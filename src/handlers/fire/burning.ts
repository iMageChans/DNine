import {getBaseCallRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {withdrawBurnings} from "../../fire";

interface Burning {
    from_address: string;
    to_address: string;
    amount: bigint;
}

export async function fireBurning(block: any, event: any) {
    const baseRecord = await getBaseCallRecord(block, event);
    const data: Burning = {
        from_address: ss58Encode(event.args.from),
        to_address: ss58Encode(event.args.to),
        amount: event.args.amount,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await withdrawBurnings(baseEventRecord);
}
