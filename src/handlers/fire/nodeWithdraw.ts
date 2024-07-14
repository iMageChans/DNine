import {getBaseCallRecord, getBaseEventRecord, getCustomEventRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {nodeWithdraw} from "../../fire";

interface NodeWithdraw {
    account_id: string;
    amount: bigint;
}

export async function fireNodeWithdraw(block: any, event: any) {
    const baseRecord = await getBaseCallRecord(block, event, 'NodeWithdraw');
    const data: NodeWithdraw = {
        account_id: ss58Encode(event.args.who),
        amount: event.args.amount,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await nodeWithdraw(baseEventRecord);
}