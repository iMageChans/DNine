import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeAssetDispatch} from "../utils/decoder";
import {crossChainDispatches} from "../fire";
import {isAssetDispatch} from "../utils/typeGuards";
import {AssetDispatchKind} from "../utils/kinds";
import * as CrossChain from "../abi/cross-chain-transfer";


export async function AssetDispatchService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsEvent(event, ContractAddress.cross_chain)) {
                continue;
            }

            const decode: any = CrossChain.decodeEvent(event.args.data);
            const message: any = CrossChain.decodeMessage(event.call?.args?.data)

            if (!isAssetDispatch(decode)){
                continue;
            }

            const decoded = decodeAssetDispatch(event)

            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: message.__kind,
                contract: ContractAddress.burning_manager,
                contract_address: ss58Encode(ContractAddress.cross_chain),
                data: decoded
            }

            await crossChainDispatches(data)
        }
    }
}