import {getBaseCallRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {d9Transfers} from "../../fire";

interface D9Transfer {
    from_address: string;
    to_address: string;
    amount: bigint;
}

export async function fireD9Transfer(block: any, event: any) {
    const baseRecord = await getBaseCallRecord(block, event, 'd9Transfer');
    const data: D9Transfer = {
        from_address: ss58Encode(event.args.from),
        to_address: ss58Encode(event.args.to),
        amount: event.args.amount,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await d9Transfers(baseEventRecord);
}