import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {merchantGiveGreenPoints, merchantPayments, withdrawMerchants} from "../fire";
import {isMerchantGreenPoints, isMerchantPayment, isMerchantWithdraw} from "../utils/typeGuards";
import * as Merchant from "../abi/d9-merchant-mining";
import * as MarketMakers from "../abi/market-maker";
import {decodeMerchantGreenPoints, decodeMerchantPayment, decodeMerchantWithdraw} from "../utils/decoder";


export async function MerchantGreenPointsService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsEvent(event, ContractAddress.merchant)) {
                continue;
            }

            const decode: any = Merchant.decodeEvent(event.args.data);
            const message: any = Merchant.decodeMessage(event.call?.args?.data)
            let kind: string

            if (message.__kind === "give_green_points_usdt") {
                kind = "send_usdt_payment_to_merchant"
            }else {
                kind = "send_d9_payment_to_merchant"
            }

            if (isMerchantPayment(decode)){
                const decoded: any = decodeMerchantPayment(event)
                const data = {
                    id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    timestamp: block.header.timestamp,
                    extrinsic_hash: event.extrinsic?.hash,
                    fee: event.extrinsic.fee ?? 0n,
                    kind: kind,
                    contract: ContractAddress.merchant,
                    contract_address: ss58Encode(ContractAddress.merchant),
                    data: decoded
                }

                await merchantPayments(data)

            }else if (isMerchantGreenPoints(decode)){
                const decoded: any = decodeMerchantGreenPoints(event)
                const data = {
                    id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    timestamp: block.header.timestamp,
                    extrinsic_hash: event.extrinsic?.hash,
                    fee: event.extrinsic.fee ?? 0n,
                    kind: message.__kind,
                    contract: ContractAddress.merchant,
                    contract_address: ss58Encode(ContractAddress.merchant),
                    data: decoded
                }

                await merchantGiveGreenPoints(data)
            }else if (isMerchantWithdraw(decode)){
                const decoded: any = decodeMerchantWithdraw(event)
                const data = {
                    id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    timestamp: block.header.timestamp,
                    extrinsic_hash: event.extrinsic?.hash,
                    fee: event.extrinsic?.fee || 0n,
                    kind: 'redeem_d9',
                    contract: ContractAddress.merchant,
                    contract_address: ss58Encode(ContractAddress.merchant),
                    data: decoded
                }

                await withdrawMerchants(data)
            }
        }
    }
}