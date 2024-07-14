import axios from "axios";

async function req(data: any, urls: string) {
    const localUrl = process.env.LOCAL_URL || 'http://host.docker.internal:8000';
    const url = `${localUrl}${urls}`;
    try {
        const jsonData = JSON.stringify(data, (key, value) =>
            typeof value === 'bigint' ? value.toString() : value
        );
        const response = await axios.post(url, jsonData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/plain, */*'
            }
        });
        console.log('Response:', jsonData);
    } catch (error) {
        console.error('Post Event Data Error:', error);
    }
}

export async function crossChainCommits(data: any){
    req(data, '/api/cross_chain/commits/')
}

export async function crossChainDispatches(data: any){
    req(data, '/api/cross_chain/dispatches/')
}

export async function liquidityOperation(data: any){
    req(data, '/api/liquidity/operation/')
}

export async function marketMakerTransactions(data: any){
    req(data, '/api/market_maker/transactions/')
}

export async function merchantGiveGreenPoints(data: any){
    req(data, '/api/merchant/give_green_points/')
}

export async function merchantPayments(data: any){
    req(data, '/api/merchant/payments/')
}

export async function merchantSubscribes(data: any){
    req(data, '/api/merchant/subscribes/')
}

export async function nodeAddVoting(data: any){
    req(data, '/api/node/add_voting/')
}

export async function nodeReward(data: any){
    req(data, '/api/node/reward/')
}

export async function nodeWithdraw(data: any){
    req(data, '/api/node/withdraw/')
}

export async function d9Transfers(data: any){
    req(data, '/api/transfer/d9transfers/')
}

export async function USDTTransfers(data: any){
    req(data, '/api/transfer/usdttransfers/')
}

export async function withdrawBurnings(data: any){
    req(data, '/api/withdraw/burnings/')
}

export async function withdrawMerchants(data: any){
    req(data, '/api/withdraw/merchants/')
}