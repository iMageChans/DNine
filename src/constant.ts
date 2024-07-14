import process from 'node:process'
import * as ss58 from '@subsquid/ss58'

export const PREFIX = 9
export const SS58 = ss58.codec(PREFIX)
export const ContractAddress = {
    market_maker: SS58.decode('z8keEeLwjZFK5NS5PF6xYwTHEbm7jwpH4gBYB1JV6pDTtWg'),
    cross_chain: SS58.decode('vNNoHwVH8af77P4s1ch14yTy7UTd8w9g2VfYA5fBExZzA7i'),
    usdt: SS58.decode('uLj9DRUujbpCyK7USZY5ebGbxdtKoWvdRvGyyUsoLWDsNng'),
    merchant: SS58.decode('xjyLYnZBRhYYjUKjCp8UiHnmcjHmkPfRSBxTiLLMoEwtzwp'),
    burning_manager: SS58.decode('wRGYShktZsxtKwXCCzqtLW7P1a5K2qDsaXEcRWxVYKGwH7d'),
    node_reward: SS58.decode('xqDsmMNZsCprGkjG6JPCQYysvdBs5GvudLzkXt73BbysX6D'),
}