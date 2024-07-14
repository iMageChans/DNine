import {assertNotNull} from '@subsquid/util-internal'
import {
    BlockHeader,
    DataHandlerContext,
    SubstrateBatchProcessor,
    SubstrateBatchProcessorFields,
    Event as _Event,
    Call as _Call,
    Extrinsic as _Extrinsic
} from "@subsquid/substrate-processor"

import {ContractAddress} from "./constant";

export const processor = new SubstrateBatchProcessor()
    .setRpcEndpoint({
        url: 'wss://archiver.d9network.com:40300',
        rateLimit: 0,
        maxBatchCallSize: 500,
    })
    .setBlockRange({ from: 1 })
    .addEvent({
        extrinsic: true,
        call: true,
        stack: true,
    })
    .addCall({
        extrinsic: true,
        events: true,
        stack: true,
    })
    .addContractsContractEmitted({
        contractAddress: [
            ContractAddress.market_maker,
            ContractAddress.cross_chain,
            ContractAddress.usdt,
            ContractAddress.merchant,
            ContractAddress.burning_manager,
            ContractAddress.node_reward,
        ],
        extrinsic: true,
        call: true,
        stack: true,
    })
    .setFields({
        event: {
            phase: true,
            args: true,
            name: true,
        },
        extrinsic: {
            hash: true,
            fee: true,
            success: true,
            error: true,
        },
        block: {
            timestamp: true,
        },
        call: {
            name: true,
            args: true,
            origin: true,
        },
    })
    // Uncomment to disable RPC ingestion and drastically reduce no of RPC calls
    //.useArchiveOnly()

export type Fields = SubstrateBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
