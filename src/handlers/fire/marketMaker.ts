import {getContractEventByData} from "../utils/contracts-utils";
import {getBaseEventRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {marketMakerTransactions} from "../../fire";

interface Transaction {
    account_id: string
    usdt: bigint
    d9: bigint
}

export async function fireMarketMaker(block: any, event: any) {
    const eventDecode = await getContractEventByData(event);
    const baseRecord = await getBaseEventRecord(block, event);
    const data: Transaction = {
        account_id: ss58Encode(eventDecode.accountId),
        usdt: eventDecode.usdt,
        d9: eventDecode.d9,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await marketMakerTransactions(baseEventRecord);
}