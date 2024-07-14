import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeAddVoting} from "../utils/decoder";
import {nodeAddVoting} from "../fire";
import {isAddVoting} from "../utils/typeGuards";
import {AddVotingKind} from "../utils/kinds";


export async function AddVotingService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsEvent(event, ContractAddress.burning_manager)) {
                continue;
            }
            if (event.call.name !== 'D9NodeVoting.add_voting_interest'){
                continue;
            }

            const decode = event.call.args

            if (!isAddVoting(decode)){
                continue;
            }

            const decoded = decodeAddVoting(event)
            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: event.call.name,
                contract: ContractAddress.burning_manager,
                contract_address: ss58Encode(ContractAddress.burning_manager),
                data: decoded
            }

            await nodeAddVoting(data)
        }
    }
}