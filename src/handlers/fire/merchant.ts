import {getContractEventByData} from "../utils/contracts-utils";
import {getBaseCallRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {ContractAddress} from "../../constant";
import {withdrawMerchants} from "../../fire";

interface Merchant {
    from_address: string;
    to_address: string;
    amount: bigint;
}

export async function fireMerchant(block: any, event: any) {
    const eventDecode = await getContractEventByData(event);
    const baseRecord = await getBaseCallRecord(block, event);
    const data: Merchant = {
        from_address: ss58Encode(ContractAddress.merchant),
        to_address: ss58Encode(eventDecode.accountId),
        amount: eventDecode.redeemedD9,
    };

    const baseEventRecord = {
        ...baseRecord,
        data: data
    };
    await withdrawMerchants(baseEventRecord);
}
