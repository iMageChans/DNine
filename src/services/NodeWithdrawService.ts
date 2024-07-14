import {decodeNodeWithdraw} from "../utils/decoder";
import {nodeWithdraw} from "../fire";
import {isNodeWithdraw} from "../utils/typeGuards";
import {NodeWithdrawKind} from "../utils/kinds";


export async function NodeWithdrawService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }

            if (event.name !== 'Balances.Withdraw'){
                continue;
            }


            const decode: any = event.args;

            if (!isNodeWithdraw(decode)){
                continue;
            }

            const decoded = decodeNodeWithdraw(event)

            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: 'node_withdraw',
                contract: 'node_withdraw',
                contract_address: 'node_withdraw',
                data: decoded
            }

            await nodeWithdraw(data)
        }
    }
}