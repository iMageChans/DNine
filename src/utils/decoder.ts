import {AddVoting} from "../entities/AddVoting";
import {BurningWithdraw} from "../entities/BurningWithdraw";
import {AssetCommit} from "../entities/AssetCommit";
import * as CrossChain from '../abi/cross-chain-transfer'
import * as Merchants from '../abi/d9-merchant-mining'
import * as MarketMakers from '../abi/market-maker'
import * as NodeRewards from '../abi/node-reward'
import * as USDT from '../abi/d9-usdt'
import {AssetDispatch} from "../entities/AssetDispatch";
import {Consumer, Merchant, MerchantGreenPoints} from "../entities/MerchantGreenPoints";
import {D9Transfer} from "../entities/D9Transfer";
import {Liquidity} from "../entities/Liquidity";
import {MarketMaker} from "../entities/MarketMaker";
import {MerchantPayment} from "../entities/MerchantPayment";
import {MerchantSubscribe} from "../entities/MerchantSubscribe";
import {MerchantWithdraw} from "../entities/MerchantWithdraw";
import {NodeReward} from "../entities/NodeReward";
import {USDTTransfer} from "../entities/USDTTransfer";
import {NodeWithdraw} from "../entities/NodeWithdraw";
import {ss58Encode} from "./utils";

function addressEncode(data: any): string {
    return `Dn${ss58Encode(data)}`;
}

export function decodeAddVoting(event: any): AddVoting {
    const decode = event.call.args
    return {
        beneficiaryVoter: addressEncode(decode.beneficiaryVoter),
        mainPool: addressEncode(decode.mainPool),
        amountToBurn: decode.amountToBurn,
        burnContract: addressEncode(decode.burnContract)
    };
}

export function decodeBurningWithdraw(event: any): BurningWithdraw {
    const decode = event.args
    return {
        from: addressEncode(decode.from),
        to: addressEncode(decode.to),
        amount: decode.amount
    };
}

export function decodeAssetCommit(event: any): AssetCommit {
    const decode: any = CrossChain.decodeEvent(event.args.data);
    return {
        transactionId: decode.transactionId,
        fromAddress: addressEncode(decode.fromAddress),
        amount: decode.amount
    };
}

export function decodeAssetDispatch(event: any): AssetDispatch {
    const decode: any = CrossChain.decodeEvent(event.args.data);
    return {
        txId: decode.txId,
        toAddress: addressEncode(decode.toAddress),
        amount: decode.amount
    };
}

export function decodeD9Transfer(event: any): D9Transfer {
    const decode = event.args
    return {
        from: addressEncode(decode.from),
        to: addressEncode(decode.to),
        amount: decode.amount
    };
}

export function decodeLiquidity(event: any): Liquidity {
    const decode: any = MarketMakers.decodeEvent(event.args.data);
    return {
        accountId: addressEncode(decode.accountId),
        usdt: decode.usdt,
        d9: decode.d9
    };
}

export function decodeMarketMaker(event: any): MarketMaker {
    const decode: any = MarketMakers.decodeEvent(event.args.data);
    return {
        accountId: addressEncode(decode.accountId),
        usdt: decode.usdt,
        d9: decode.d9
    };
}

export function decodeMerchantGreenPoints(event: any): MerchantGreenPoints {
    const decode: any = Merchants.decodeEvent(event.args.data);

    const merchant: Merchant = {
        accountId: addressEncode(decode.merchant.accountId),
        greenPoints: decode.merchant.greenPoints
    }

    const consumer: Consumer = {
        accountId: addressEncode(decode.consumer.accountId),
        greenPoints: decode.consumer.greenPoints
    }

    return {
        merchant: merchant,
        consumer: consumer,
    };
}

export function decodeMerchantPayment(event: any): MerchantPayment {
    const decode: any = Merchants.decodeEvent(event.args.data);
    return {
        amount: decode.amount,
        merchant: addressEncode(decode.merchant),
        consumer: addressEncode(decode.consumer),
    };
}

export function decodeMerchantSubscribe(event: any): MerchantSubscribe {
    const decode: any = Merchants.decodeEvent(event.args.data);
    return {
        accountId: addressEncode(decode.accountId),
        expiry: decode.expiry,
        usdt: decode.usdt,
    };
}

export function decodeMerchantWithdraw(event: any): MerchantWithdraw {
    const decode: any = Merchants.decodeEvent(event.args.data);
    return {
        accountId: addressEncode(decode.accountId),
        redeemedD9: decode.redeemedD9,
    };
}

export function decodeNodeReward(event: any): NodeReward {
    const decode: any = NodeRewards.decodeEvent(event.args.data);
    return {
        node: addressEncode(decode.node),
        receiver: addressEncode(decode.receiver),
        amount: decode.amount,
    };
}

export function decodeNodeWithdraw(event: any): NodeWithdraw {
    const decode: any = event.args;
    return {
        who: addressEncode(decode.who),
        amount: decode.amount,
    };
}

export function decodeUSDTTransfer(event: any): USDTTransfer {
    const decode:any = USDT.decodeMessage(event.args.data)
    return {
        from: addressEncode(event.origin.value.value),
        to: addressEncode(decode.to),
        amount: decode.value
    };
}