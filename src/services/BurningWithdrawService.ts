import {isContractsCall, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeBurningWithdraw} from "../utils/decoder";
import {withdrawBurnings} from "../fire";
import {isBurningWithdraw} from "../utils/typeGuards";
import {BurningWithdrawKind} from "../utils/kinds";


export async function BurningWithdrawService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsCall(event, ContractAddress.burning_manager)) {
                continue;
            }
            if (event.name !== 'Balances.Transfer'){
                continue;
            }

            const decode = event.args

            if (!isBurningWithdraw(decode)){
                continue;
            }

            const decoded = decodeBurningWithdraw(event)


            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: 'burning_withdraw',
                contract: ContractAddress.burning_manager,
                contract_address: ss58Encode(ContractAddress.burning_manager),
                data: decoded
            }

            await withdrawBurnings(data)
        }
    }
}