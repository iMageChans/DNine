import { SS58 } from '../constant'

export function ss58Encode(value: any): string {
    return SS58.encode(value)
}

export async function convertObjectToJSON(data: any): Promise<string> {
    const jsonData = JSON.stringify(data, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
    );
    return jsonData;
}


export function isContractsEvent(event: { name: string, args: { contract: string } }, address: string) {
    return event.name === 'Contracts.ContractEmitted' && event.args.contract === address
}

export function isContractsCall(call: { name: string, args: { dest: { value: string } } }, address: string) {
    return call.name === 'Contracts.call' && call.args.dest.value === address
}