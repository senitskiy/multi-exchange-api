export interface iCexConfig {
    exchange: 'binance' | 'kucoin' | 'gate' | 'mexc' | 'lpbank',
    symbol: string
}

export interface iConfig {
    api_key: string,
    api_secret: string
}

export interface iOrder {
    symbol: string,
    side: string,
    type: string,
    quantity: number,
    price: number
}

export interface iWS {

    private requestPublic(data, params): any
    private requestPrivate(data, params): any

    market(params: { symbol: string }): any
    depth(params: { symbol: string }): any
    trades(params: { symbol: string }): any
    candles(params: { symbol: string }): any

    // private
    account(): any
}

export interface iFutures { }

export interface iProviderCEX {

    config: iConfig

    requestPublic(data, params): any
    requestPrivate(data, params): any

    ping(): any
    time(): any
    market(params: { symbol: string }): any
    depth(params: {
        symbol: string,
        limit: number
    }): any
    candles(params: {
        symbol: string,
        interval: '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '12h' | '1d',
        limit: number,
        startTime?: number
        endTime?: number
    }): any
    trades(params: { symbol: string }): any
    orders(params: { symbol: string }): any

    // private
    account(): any
    createOrder(params: iOrder): any
    deleteOrder(id: string): any
    updateOrder(id: string, params: iOrder): any

    ws: iWS
    futures: iFutures

    [x: any]: any
}