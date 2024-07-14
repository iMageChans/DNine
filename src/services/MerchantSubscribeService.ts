import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeMerchantGreenPoints, decodeMerchantSubscribe, decodeMerchantWithdraw} from "../utils/decoder";
import {merchantGiveGreenPoints, merchantSubscribes, withdrawMerchants} from "../fire";
import {isMerchantGreenPoints, isMerchantSubscribe, isMerchantWithdraw} from "../utils/typeGuards";
import {MerchantSubscribeKind} from "../utils/kinds";
import * as Merchant from "../abi/d9-merchant-mining";
import * as Merchants from "../abi/d9-merchant-mining";


export async function MerchantSubscribeService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsEvent(event, ContractAddress.merchant)) {
                continue;
            }

            const decode: any = Merchants.decodeEvent(event.args.data);
            const message: any = Merchant.decodeMessage(event.call?.args?.data)

            if (isMerchantSubscribe(decode)){
                const decoded = decodeMerchantSubscribe(event)
                const data = {
                    id: event.id,
                    block_number: block.header.height,
                    block_hash: block.header.hash,
                    timestamp: block.header.timestamp,
                    extrinsic_hash: event.extrinsic?.hash,
                    fee: event.extrinsic?.fee || 0n,
                    kind: message.__kind,
                    contract: ContractAddress.merchant,
                    contract_address: ss58Encode(ContractAddress.merchant),
                    data: decoded
                }

                await merchantSubscribes(data)
            }else if (isMerchantGreenPoints(decode)){
                const decoded = decodeMerchantGreenPoints(event)
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
                const decoded = decodeMerchantWithdraw(event)
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