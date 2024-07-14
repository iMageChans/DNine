import {isContractsEvent, ss58Encode} from "../utils/utils";
import {ContractAddress} from "../constant";
import {decodeLiquidity} from "../utils/decoder";
import {liquidityOperation} from "../fire";
import {isLiquidity} from "../utils/typeGuards";
import * as MarketMakers from "../abi/market-maker";


export async function LiquidityService(ctx: any){
    for await (const block of ctx.blocks){
        for await (const event of block.events){
            if (!event.extrinsic?.success){
                continue;
            }
            if (!isContractsEvent(event, ContractAddress.market_maker)) {
                continue;
            }

            const decode: any = MarketMakers.decodeEvent(event.args.data);

            let message: any;

            try {
                message = MarketMakers.decodeMessage(event.call?.args?.data)
            }catch (err){
                message = {
                    kind: "",
                }
            }

            if (!isLiquidity(decode)){
                continue;
            }

            const decoded = decodeLiquidity(event)

            const data = {
                id: event.id,
                block_number: block.header.height,
                block_hash: block.header.hash,
                timestamp: block.header.timestamp,
                extrinsic_hash: event.extrinsic?.hash,
                fee: event.extrinsic?.fee || 0n,
                kind: message.__kind || '',
                contract: ContractAddress.market_maker,
                contract_address: ss58Encode(ContractAddress.market_maker),
                data: decoded
            }

            await liquidityOperation(data)
        }
    }
}