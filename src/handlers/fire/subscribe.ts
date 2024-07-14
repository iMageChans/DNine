import {getContractEventByData} from "../utils/contracts-utils";
import {getBaseCallRecord, getBaseEventRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {merchantSubscribes} from "../../fire";

interface Subscribe {
    account_id: string
    usdt: bigint
    expiry_date: string
}

export async function fireSubscribe(block: any, event: any) {
    const eventDecode = await getContractEventByData(event);
    const baseRecord = await getBaseCallRecord(block, event);
    const data: Subscribe = {
        account_id: ss58Encode(eventDecode.accountId),
        usdt: eventDecode.usdt,
        expiry_date: eventDecode.expiry,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await merchantSubscribes(baseEventRecord);
}