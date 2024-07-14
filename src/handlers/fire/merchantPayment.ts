import {getContractEventByData, getKind} from "../utils/contracts-utils";
import {getBaseEventRecord, getCustomEventRecord} from "../models/record";
import { ss58Encode } from "../../utils/utils";
import {merchantGiveGreenPoints, merchantPayments} from "../../fire";
import {isGreenPointsRecord, isPaymentRecord} from "../types";

interface GreenPoints {
    from_address: string;
    from_green_points: bigint;
    to_address: string;
    to_green_points: bigint;
}

interface Payment {
    from_address: string;
    to_address: string;
    amount: bigint;
}

export async function fireMerchantPayment(block: any, event: any) {
    const decode = await getContractEventByData(event);
    let kind: string
    if (getKind(event) === "send_usdt_payment_to_merchant") {
        kind = "give_green_points_usdt"
    }else {
        kind = "give_green_points_d9"
    }
    if (isGreenPointsRecord(decode)) {
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getCustomEventRecord(block, event, kind);
        const data: GreenPoints = {
            from_address: ss58Encode(eventDecode.merchant.accountId),
            from_green_points: eventDecode.merchant.greenPoints,
            to_address: ss58Encode(eventDecode.consumer.accountId),
            to_green_points: eventDecode.consumer.greenPoints,
        };
        const baseEventRecord = {
            ...baseRecord,
            data: data
        };
        await merchantGiveGreenPoints(baseEventRecord);
    }else if (isPaymentRecord(decode)){
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getBaseEventRecord(block, event);
        const data: Payment = {
            from_address: ss58Encode(eventDecode.merchant),
            to_address: ss58Encode(eventDecode.consumer),
            amount: eventDecode.amount,
        };

        const baseEventRecord = {
            ...baseRecord,
            data: data
        };
        await merchantPayments(baseEventRecord);
    }
}