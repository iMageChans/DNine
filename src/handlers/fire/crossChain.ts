import { getContractEventByData } from "../utils/contracts-utils";
import {
    isAssetCommitRecord,
    isAssetDispatchRecord,
} from "../types";
import {getBaseEventRecord, getCustomEventRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {crossChainCommits, crossChainDispatches} from "../../fire";

interface Commit {
    transaction_id: string;
    from_address: string;
    amount: bigint;
}

interface Dispatch {
    tx_id: string;
    to_address: string;
    amount: bigint;
}

export async function fireCrossChain(block: any, event: any) {
    const decode = await getContractEventByData(event);
    if (isAssetCommitRecord(decode)) {
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getBaseEventRecord(block, event);
        const data: Commit = {
            transaction_id: eventDecode.transactionId,
            from_address: ss58Encode(eventDecode.fromAddress),
            amount: eventDecode.amount,
        };
        const baseEventRecord = {
            ...baseRecord,
            data: data
        };
        await crossChainCommits(baseEventRecord);
    } else if (isAssetDispatchRecord(decode)) {
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getCustomEventRecord(block, event, 'redeem_d9');
        const data: Dispatch = {
            tx_id: eventDecode.txId,
            to_address: ss58Encode(eventDecode.toAddress),
            amount: eventDecode.amount,
        };

        const baseEventRecord = {
            ...baseRecord,
            data: data
        };
        await crossChainDispatches(baseEventRecord);
    }else {

    }
}