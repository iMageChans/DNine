import {isContractsCall, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeUSDTTransfer} from "../utils/decoder";
import {USDTTransfers} from "../fire";
import {isUSDTTransfer} from "../utils/typeGuards";
import {NodeRewardKind} from "../utils/kinds";
import * as USDT from "../abi/d9-usdt";


export async function USDTTransferService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.calls){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsCall(event, ContractAddress.usdt)) {
                continue;
            }

            const decode = USDT.decodeMessage(event.args?.data)
            if (!isUSDTTransfer(decode)){
                continue;
            }

            const decoded = decodeUSDTTransfer(event)

            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: decode.__kind,
                contract: ContractAddress.usdt,
                contract_address: ss58Encode(ContractAddress.usdt),
                data: decoded
            }

            await USDTTransfers(data)
        }
    }
}