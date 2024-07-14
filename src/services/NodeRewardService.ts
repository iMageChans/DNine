import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeNodeReward} from "../utils/decoder";
import {nodeReward} from "../fire";
import {isNodeReward} from "../utils/typeGuards";
import {NodeRewardKind} from "../utils/kinds";
import * as NodeRewards from "../abi/node-reward";
import * as Merchant from "../abi/d9-merchant-mining";


export async function NodeRewardService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsEvent(event, ContractAddress.node_reward)) {
                continue;
            }


            const decode: any = NodeRewards.decodeEvent(event.args.data);
            const message: any = NodeRewards.decodeMessage(event.call?.args?.data)


            if (!isNodeReward(decode)){
                continue;
            }

            const decoded = decodeNodeReward(event)

            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: message.__kind,
                contract: ContractAddress.node_reward,
                contract_address: ss58Encode(ContractAddress.node_reward),
                data: decoded
            }

            await nodeReward(data)
        }
    }
}