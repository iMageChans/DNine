import {getCustomCallRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import * as USDT from "../../abi/d9-usdt"
import {USDTTransfers} from "../../fire";

interface USDTTransfer {
    from_address: string;
    to_address: string;
    amount: bigint;
}

export async function fireUSDTTransfer(block: any, event: any) {
    const eventDecode: any = USDT.decodeMessage(event.args.data)
    const baseRecord = await getCustomCallRecord(block, event);
    const data: USDTTransfer = {
        from_address: ss58Encode(event.origin.value.value),
        to_address: ss58Encode(eventDecode.to),
        amount: eventDecode.value,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await USDTTransfers(baseEventRecord)
}