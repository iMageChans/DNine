import * as MarketMaker from '../../abi/market-maker'
import * as CrossChain from '../../abi/cross-chain-transfer'
import * as USDT from '../../abi/d9-usdt'
import * as Merchant from '../../abi/d9-merchant-mining'
import * as BurningManager from '../../abi/burn-manager'
import * as NodeReward from '../../abi/node-reward'
import * as MainPool from '../../abi/main-pool'
import process from "node:process";
import {ContractAddress} from "../../constant";


const ContractDecode = {
    market_maker: MarketMaker,
    cross_chain: CrossChain,
    usdt: USDT,
    merchant: Merchant,
    burning_manager: BurningManager,
    node_reward: NodeReward,
    main_pool: MainPool,
}


export function getContractNameByAddress(address: string): any {
    for (const [contractName, contractAddress] of Object.entries(ContractAddress)) {
        if (contractAddress === address) {
            return contractName;
        }
    }
    return undefined;
}

export function getContractAddressByName(name: string): any {
    for (const [contractName, contractAddress] of Object.entries(ContractAddress)) {
        if (contractName === name) {
            return contractAddress;
        }
    }
    return undefined;
}

export function getContractNameByDecode(name: string): any {
    for (const [contractName, contractDecode] of Object.entries(ContractDecode)) {
        if (contractName === name) {
            return contractDecode;
        }
    }
    return undefined;
}

export function getContractEventAddress(event: any): any {
    try {
        return event.args.contract
    }catch (err){
        throw new Error('no event');
    }
}

export function getContractCallAddress(event: any): any {
    try {
        return event.call?.args?.dest?.value
    }catch (err){
        throw new Error('no event');
    }
}

export function getContractEvent(event: any): any {
    try {
        return event.args.data
    }catch (err){
        throw new Error('no event');
    }
}

export function getContractCall(event: any): any {
    try {
        return event.call?.args.data
    }catch (err){
        throw new Error('no call');
    }
}

export async function getContractEventByData(event: any): Promise<any> {
    const name = getContractNameByAddress(event.args.contract)
    const decode = getContractNameByDecode(name)
    return decode.decodeEvent(event.args.data)
}

export async function getContractCallByData( event: any): Promise<any> {
    const name = getContractNameByAddress(event.call?.args?.dest?.value)
    const decode = getContractNameByDecode(name)
    return decode.decodeMessage(event.call?.args?.data)
}

export function getKind(event: any): any {
    const name = getContractNameByAddress(event.call?.args?.dest?.value)
    const decode = getContractNameByDecode(name)
    const metaData = decode.decodeMessage(event.call?.args?.data)
    return metaData.__kind
}

export function getCallKind(event: any): any {
    const name = getContractNameByAddress(event.args?.dest?.value)
    const decode = getContractNameByDecode(name)
    const metaData = decode.decodeMessage(event.args?.data)
    return metaData.__kind
}