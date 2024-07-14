import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeAssetCommit} from "../utils/decoder";
import {crossChainCommits} from "../fire";
import {isAssetCommit} from "../utils/typeGuards";
import {AssetCommitKind} from "../utils/kinds";
import * as CrossChain from "../abi/cross-chain-transfer";
import * as Merchant from "../abi/d9-merchant-mining";


export async function AssetCommitService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){

            if (!event.extrinsic?.success){
                continue;
            }


            if (!isContractsEvent(event, ContractAddress.cross_chain)) {
                continue;
            }

            const test: any = CrossChain.decodeEvent(event.args.data);
            console.log(test)

            const decode: any = CrossChain.decodeEvent(event.args.data);
            const message: any = CrossChain.decodeMessage(event.call?.args?.data)

            if (!isAssetCommit(decode)){
                continue;
            }

            const decoded = decodeAssetCommit(event)

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

            await crossChainCommits(data)
        }
    }
}