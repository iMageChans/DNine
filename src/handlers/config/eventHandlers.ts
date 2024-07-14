import { EventHandler, EventFilter } from "../types";
import {
    fireBurning,
    fireMerchant,
    fireGiveGreenPoints,
    fireMerchantPayment,
    fireSubscribe,
    fireLiquidity,
    fireCrossChain,
    fireNodeReward,
    fireMarketMaker,
    fireD9Transfer,
    fireNodeWithdraw,
    fireAddVoting,
} from "../fire";
import { getKind } from "../utils/contracts-utils";
import { ContractAddress } from "../../constant";

export const eventHandlers: { filter: EventFilter, handler: EventHandler }[] = [
    {
        filter: (event: any) => {
            if (!event.extrinsic?.success) return false;
            if (event.name !== "Balances.Transfer") return false;
            if (!event.call || !event.call.args || !event.call.args.dest) return false;
            if (event.call.args.dest.value !== ContractAddress.burning_manager) return false;
            return getKind(event) === "withdraw";
        },
        handler: fireBurning,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.merchant
            && getKind(event) === "redeem_d9",
        handler: fireMerchant,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.merchant
            && (getKind(event) === "give_green_points_d9"
                || getKind(event) === "give_green_points_usdt"),
        handler: fireGiveGreenPoints,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.merchant
            && (getKind(event) === "send_usdt_payment_to_merchant"
                || getKind(event) === "send_d9_payment_to_merchant"),
        handler: fireMerchantPayment,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.merchant
            && getKind(event) === "subscribe",
        handler: fireSubscribe,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.market_maker
            && (getKind(event) === "add_liquidity"
                || getKind(event) === "remove_liquidity"),
        handler: fireLiquidity,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.market_maker
            && (getKind(event) === "get_usdt"
                || getKind(event) === "get_d9"),
        handler: fireMarketMaker,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.cross_chain
            && (getKind(event) === "asset_commit"
                || getKind(event) === "asset_dispatch"),
        handler: fireCrossChain,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Contracts.ContractEmitted"
            && event.args.contract === ContractAddress.node_reward
            && getKind(event) === "withdraw_reward",
        handler: fireNodeReward,
    },
    {
        filter: (event: any) => event.extrinsic?.success
            && event.name === "Balances.Transfer",
        handler: fireD9Transfer,
    },
    {
        filter: (event: any) =>
        event.extrinsic?.success
        && event.name === "Balances.Withdraw",
        handler: fireNodeWithdraw,
    },
    {
        filter: (event: any) =>
            event.extrinsic?.success
            && event.name === "Contracts.Called"
            && event.args.contract === ContractAddress.burning_manager
            && event.call.name === 'D9NodeVoting.add_voting_interest',
        handler: fireAddVoting,
    },
];
