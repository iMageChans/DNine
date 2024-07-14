import {
    getCallKind,
    getContractCallAddress,
    getContractEventAddress, getContractEventByData, getContractNameByAddress,
    getKind
} from "../utils/contracts-utils";
import {ss58Encode} from "../../utils/utils";

interface BaseRecord {
    id: string
    block_number: string
    block_hash: string
    timestamp: string
    extrinsic_hash: string
    fee: bigint
    kind: string;
    contract: string;
    contract_address: string;
}

export async function getBaseEventRecord(block: any, event: any): Promise<BaseRecord> {
    const contractAddress = getContractEventAddress(event);
    const contractName = getContractNameByAddress(event.args.contract)
    let kind: string
    if (event.call || event.call.args || event.call.args.dest){
        kind = await getKind(event)
    }else {
        const eventDecode = await getContractEventByData(event)
        kind = eventDecode.__kind
    }

    return {
        id: event.id,
        block_number: block.header.height,
        block_hash: block.header.hash,
        timestamp: block.header.timestamp,
        extrinsic_hash: event.extrinsic?.hash,
        fee: event.extrinsic.fee ?? 0n,
        kind: kind,
        contract: contractName,
        contract_address: ss58Encode(contractAddress),
    }
}

export async function getCustomEventRecord(block: any, event: any, kind: any): Promise<BaseRecord> {
    const contractAddress = getContractEventAddress(event);
    const contractName = getContractNameByAddress(event.args.contract)
    return {
        id: event.id,
        block_number: block.header.height,
        block_hash: block.header.hash,
        timestamp: block.header.timestamp,
        extrinsic_hash: event.extrinsic?.hash,
        fee: event.extrinsic.fee ?? 0n,
        kind: kind,
        contract: contractName,
        contract_address: ss58Encode(contractAddress),
    }
}


export async function getBaseCallRecord(block: any, event: any, kind?:any): Promise<BaseRecord> {
    if(!kind) {
        const contractAddress = getContractCallAddress(event);
        const contractName = getContractNameByAddress(contractAddress)
        const kind = await getKind(event)
        return {
            id: event.id,
            block_number: block.header.height,
            block_hash: block.header.hash,
            timestamp: block.header.timestamp,
            extrinsic_hash: event.extrinsic?.hash,
            fee: event.extrinsic.fee ?? 0n,
            kind: kind,
            contract: contractName,
            contract_address: ss58Encode(contractAddress),
        }
    }else {
        return {
            id: event.id,
            block_number: block.header.height,
            block_hash: block.header.hash,
            timestamp: block.header.timestamp,
            extrinsic_hash: event.extrinsic?.hash,
            fee: event.extrinsic.fee ?? 0n,
            kind: kind,
            contract: kind,
            contract_address: kind,
        }
    }
}

export async function getCustomCallRecord(block: any, event: any): Promise<BaseRecord> {
    const contractAddress = event.args.dest.value;
    const contractName = getContractNameByAddress(contractAddress)
    const kind = await getCallKind(event)
    return {
        id: event.id,
        block_number: block.header.height,
        block_hash: block.header.hash,
        timestamp: block.header.timestamp,
        extrinsic_hash: event.extrinsic?.hash,
        fee: event.extrinsic.fee ?? 0n,
        kind: kind,
        contract: contractName,
        contract_address: ss58Encode(contractAddress),
    }
}