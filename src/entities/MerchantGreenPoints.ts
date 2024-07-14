export interface Merchant {
    accountId: string;
    greenPoints: bigint;
}

export interface Consumer {
    accountId: string;
    greenPoints: bigint;
}

export interface MerchantGreenPoints {
    merchant: Merchant;
    consumer: Consumer;
}
