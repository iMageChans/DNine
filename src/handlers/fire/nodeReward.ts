import {getContractEventByData} from "../utils/contracts-utils";
import {getBaseEventRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {nodeReward} from "../../fire";

interface NodeReward {
    node: string;
    receiver: string;
    amount: bigint;
}

export async function fireNodeReward(block: any, event: any) {
    const eventDecode = await getContractEventByData(event);
    const baseRecord = await getBaseEventRecord(block, event);
    const data: NodeReward = {
        node: ss58Encode(eventDecode.node),
        receiver: ss58Encode(eventDecode.receiver),
        amount: eventDecode.amount,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await nodeReward(baseEventRecord);
}
