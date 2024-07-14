import { AddVoting } from '../entities/AddVoting';
import { AssetCommit } from '../entities/AssetCommit';
import { AssetDispatch } from '../entities/AssetDispatch';
import { BurningWithdraw } from '../entities/BurningWithdraw';
import { D9Transfer } from '../entities/D9Transfer';
import { Liquidity } from '../entities/Liquidity';
import { MarketMaker } from '../entities/MarketMaker';
import { Merchant, Consumer, MerchantGreenPoints } from '../entities/MerchantGreenPoints';
import { MerchantPayment } from '../entities/MerchantPayment';
import { MerchantSubscribe } from '../entities/MerchantSubscribe';
import { MerchantWithdraw } from '../entities/MerchantWithdraw';
import { NodeReward } from '../entities/NodeReward';
import { USDTTransfer } from '../entities/USDTTransfer';
import {NodeWithdraw} from "../entities/NodeWithdraw";

export function isUSDTTransfer(data: any): data is USDTTransfer {
    return (
        typeof data === 'object' &&
        data !== null &&
        'to' in data &&
        'value' in data
    );
}

export function isNodeWithdraw(data: any): data is NodeWithdraw {
    return (
        typeof data === 'object' &&
        data !== null &&
        'who' in data &&
        'amount' in data
    );
}


export function isNodeReward(data: any): data is NodeReward {
    return (
        typeof data === 'object' &&
        data !== null &&
        'node' in data &&
        'receiver' in data &&
        'amount' in data
    );
}


export function isMerchantWithdraw(data: any): data is MerchantWithdraw {
    return (
        typeof data === 'object' &&
        data !== null &&
        'accountId' in data &&
        'redeemedD9' in data
    );
}


export function isMerchantSubscribe(data: any): data is MerchantSubscribe {
    return (
        typeof data === 'object' &&
        data !== null &&
        'accountId' in data &&
        'expiry' in data &&
        'usdt' in data
    );
}


export function isMerchantPayment(data: any): data is MerchantPayment {
    return (
        typeof data === 'object' &&
        data !== null &&
        'merchant' in data &&
        'consumer' in data &&
        'amount' in data
    );
}


export function isMerchant(data: any): data is Merchant {
    return (
        typeof data === 'object' &&
        data !== null &&
        'accountId' in data &&
        'greenPoints' in data
    );
}

export function isConsumer(data: any): data is Consumer {
    return (
        typeof data === 'object' &&
        data !== null &&
        'accountId' in data &&
        'greenPoints' in data
    );
}

export function isMerchantGreenPoints(data: any): data is MerchantGreenPoints {
    return (
        typeof data === 'object' &&
        data !== null &&
        'merchant' in data &&
        'consumer' in data &&
        isMerchant(data.merchant) &&
        isConsumer(data.consumer)
    );
}


export function isMarketMaker(data: any): data is MarketMaker {
    return (
        typeof data === 'object' &&
        data !== null &&
        'accountId' in data &&
        'usdt' in data &&
        'd9' in data
    );
}


export function isLiquidity(data: any): data is Liquidity {
    return (
        typeof data === 'object' &&
        data !== null &&
        'accountId' in data &&
        'usdt' in data &&
        'd9' in data
    );
}


export function isD9Transfer(data: any): data is D9Transfer {
    return (
        typeof data === 'object' &&
        data !== null &&
        'from' in data &&
        'to' in data &&
        'amount' in data
    );
}


export function isBurningWithdraw(data: any): data is BurningWithdraw {
    return (
        typeof data === 'object' &&
        data !== null &&
        'from' in data &&
        'to' in data &&
        'amount' in data
    );
}


export function isAssetDispatch(data: any): data is AssetDispatch {
    return (
        typeof data === 'object' &&
        data !== null &&
        'txId' in data &&
        'toAddress' in data &&
        'amount' in data
    );
}


export function isAssetCommit(data: any): data is AssetCommit {
    return (
        typeof data === 'object' &&
        data !== null &&
        'transactionId' in data &&
        'fromAddress' in data &&
        'amount' in data
    );
}


export function isAddVoting(data: any): data is AddVoting {
    return (
        typeof data === 'object' &&
        data !== null &&
        'beneficiaryVoter' in data &&
        'mainPool' in data &&
        'amountToBurn' in data &&
        'burnContract' in data
    );
}
