export type EventHandler = (block: any, event: any) => Promise<void>;
export type EventFilter = (event: any) => Promise<boolean> | boolean;

export function isMarketMakerRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'accountId' in decoded
        && 'usdt' in decoded
        && 'd9' in decoded;
}

export function isAssetCommitRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'transactionId' in decoded
        && 'fromAddress' in decoded
        && 'amount' in decoded;
}

export function isAssetDispatchRecord(decoded: any){
    return decoded
        && typeof decoded === 'object'
        && 'txId' in decoded
        && 'toAddress' in decoded
        && 'amount' in decoded;
}

export function isRedeemedD9Record(decoded: any){
    return decoded
        && typeof decoded === 'object'
        && 'accountId' in decoded
        && 'redeemedD9' in decoded;
}

export function isPaymentRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'amount' in decoded
        && 'consumer' in decoded
        && 'merchant' in decoded;
}

export function isSubscribeRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'accountId' in decoded
        && 'usdt' in decoded
        && 'expiry' in decoded
}

export function isGreenPointsRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'consumer' in decoded
        && 'merchant' in decoded
        && typeof decoded.consumer === 'object'
        && typeof decoded.merchant === 'object'
        && 'accountId' in decoded.consumer
        && 'greenPoints' in decoded.consumer
        && 'accountId' in decoded.merchant
        && 'greenPoints' in decoded.merchant
}

export function isNodeWithdrawRewardRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'node' in decoded
        && 'receiver' in decoded
        && 'amount' in decoded;
}

export function isNodeWithdrawRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'who' in decoded
        && 'amount' in decoded;
}

export function isD9TransferRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'from' in decoded
        && 'to' in decoded
        && 'amount' in decoded;
}

export function isNodeVotingRecord(decoded: any) {
    return decoded
        && typeof decoded === 'object'
        && 'amountToBurn' in decoded
        && 'beneficiaryVoter' in decoded
        && 'burnContract' in decoded
        && 'mainPool' in decoded;
}