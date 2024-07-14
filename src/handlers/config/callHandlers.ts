import { EventHandler, EventFilter } from "../types";
import {
    fireUSDTTransfer
} from "../fire";
import {getCallKind} from "../utils/contracts-utils";
import { ContractAddress } from "../../constant";

export const callHandlers: { filter: EventFilter, handler: EventHandler }[] = [
    {
        filter: (event: any) =>
            event.extrinsic?.success
            && event.name === "Contracts.call"
            && event.args.dest.value === ContractAddress.usdt
            && getCallKind(event) === "PSP22_transfer",
        handler: fireUSDTTransfer,
    },
];