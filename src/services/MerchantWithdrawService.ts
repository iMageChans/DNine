import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeMerchantWithdraw} from "../utils/decoder";
import {withdrawMerchants} from "../fire";
import {isMerchantWithdraw} from "../utils/typeGuards";
import {MerchantWithdrawKind} from "../utils/kinds";
import * as Merchants from "../abi/d9-merchant-mining";
import * as Merchant from "../abi/d9-merchant-mining";


export async function MerchantWithdrawService(ctx: any){
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

            if (!isMerchantWithdraw(decode)){
                continue;
            }

            const decoded = decodeMerchantWithdraw(event)

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

            await withdrawMerchants(data)
        }
    }
}