export interface iDexConfig {
    provider: 'aptos' | 'etherium' | 'bsc',
    network: 'mainnet' | 'testnet' | 'private_node',
    private_key: string
}

interface iPair {
    symbol: string,
    asset_x: string,
    asset_y: string,
    is_stable_curve?: boolean,
    reserve_x: number,
    reserve_y: number,
}

interface iMarket extends iPair {
    reserve_x: number,
    reserve_y: number,
}

export interface iProviderDEX {

    // fields
    config: iDexConfig
    client: any
    account: any
    address: string

    // methods
    url: any

    market(market: iPair): Promise<iMarket | boolean>
    markets(markets: iPair[]): Promise

    multicall(): any
    swap(payload: {
        from_coin: string,
        to_coin: string,
        amount_in: string,
        amount_out: string,
        curve?: string
    }): Promise<any>
    // normaliseSwapRequest(payload): any
    normaliseSwapResponse(payload): any

    balance(asset: string): Promise<number>
    approve(asset: string): Promise<any>
    approves(markets: iPair[]): Promise<number>

    transaction(payload): Promise<{ success: boolean, url: string }>

    [x: any]: any
} 