import {decodeD9Transfer} from "../utils/decoder";
import {d9Transfers} from "../fire";
import {isD9Transfer} from "../utils/typeGuards";
import {D9TransferKind} from "../utils/kinds";


export async function D9TransferService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }

            if (event.name !== 'Balances.Transfer'){
                continue;
            }

            const decode = event.args
            if (!isD9Transfer(decode)){
                continue;
            }

            const decoded = decodeD9Transfer(event)

            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: 'd9_transfer',
                contract: 'd9_transfer',
                contract_address: 'd9_transfer',
                data: decoded
            }

            await d9Transfers(data)
        }
    }
}