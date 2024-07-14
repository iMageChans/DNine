import { getContractEventByData, getKind } from "../utils/contracts-utils";
import { isGreenPointsRecord, isPaymentRecord, isRedeemedD9Record } from "../types";
import {getBaseEventRecord, getCustomEventRecord} from "../models/record";
import {ss58Encode} from "../../utils/utils";
import {ContractAddress} from "../../constant";
import {merchantGiveGreenPoints, merchantPayments, withdrawMerchants} from "../../fire";

interface GreenPoints {
    from_address: string;
    from_green_points: bigint;
    to_address: string;
    to_green_points: bigint;
}

interface Redeemed {
    from_address: string;
    to_address: string;
    amount: bigint;
}

interface Payment {
    from_address: string;
    to_address: string;
    amount: bigint;
}

export async function fireGiveGreenPoints(block: any, event: any) {
    const decode = await getContractEventByData(event);
    let kind: string
    if (getKind(event) === "give_green_points_usdt") {
        kind = "send_usdt_payment_to_merchant"
    }else {
        kind = "send_d9_payment_to_merchant"
    }
    if (isGreenPointsRecord(decode)) {
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getBaseEventRecord(block, event);
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
    } else if (isRedeemedD9Record(decode)) {
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getCustomEventRecord(block, event, 'redeem_d9');
        const data: Redeemed = {
            from_address: ss58Encode(ContractAddress.merchant),
            to_address: ss58Encode(eventDecode.accountId),
            amount: eventDecode.redeemedD9,
        };

        const baseEventRecord = {
            ...baseRecord,
            data: data
        };
        await withdrawMerchants(baseEventRecord);
    }else if (isPaymentRecord(decode)){
        const eventDecode = await getContractEventByData(event);
        const baseRecord = await getCustomEventRecord(block, event, kind);
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
    }else {

    }
}