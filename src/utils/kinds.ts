import * as CrossChain from "../abi/cross-chain-transfer";
import * as Burning from "../abi/burn-manager";
import * as MarketMaker from "../abi/market-maker";
import * as Merchant from "../abi/d9-merchant-mining";
import * as NodeReward from "../abi/node-reward";


export function AddVotingKind(event: any): string {
    return event.call.name;
}

export function AssetCommitKind(event: any): string {
    const decoded = CrossChain.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function AssetDispatchKind(event: any): string {
    const decoded = CrossChain.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function BurningWithdrawKind(event: any): string {
    const decoded = Burning.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function D9TransferKind(event: any): string {
    return 'd9_transfer';
}

export function LiquidityKind(event: any): string {
    const decoded = MarketMaker.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function MarketMakerKind(event: any): string {
    const decoded = MarketMaker.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function MerchantWithdrawKind(event: any): string {
    const decoded = Merchant.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function MerchantSubscribeKind(event: any): string {
    const decoded = Merchant.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function NodeRewardKind(event: any): string {
    const decoded = NodeReward.decodeMessage(event.call?.args?.data);
    return decoded.__kind;
}

export function NodeWithdrawKind(event: any): string {
    return 'node_withdraw';
}