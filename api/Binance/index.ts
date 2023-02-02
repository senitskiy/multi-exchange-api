import crypto from 'crypto'
import axios from 'axios'

import Generator from 'generator'
import { iConfig, iProviderCEX } from 'ts/provider.cex'

import Websocket from './Websocket'
import Futures from './Futures'

const schema = {
    ping: {
        route: 'ping',
    },
    time: {
        route: 'time',
    },
    depth: {
        route: 'depth',
    },
    candles: {
        route: 'klines',
    },
    trades: {
        route: 'trades',
    },
    aggTrades: {
        route: 'aggTrades'
    },
    ticker24hr: {
        route: 'ticker/24hr',
    },
    ticker: {
        route: 'ticker/price',
    },
    account: {
        route: 'account',
        method: 'get',
        private: true
    },
    openOrders: {
        route: 'openOrders',
        method: 'get',
        private: true
    },
    orders: {
        route: 'allOrders',
        method: 'get',
        private: true
    },
    createOrder: {
        route: 'order',
        method: 'post',
        private: true,
        params: {
            timeInForce: 'GTC',
        }
    },
    deleteOrder: {
        route: 'order',
        method: 'delete',
        private: true
    },
    createOrderTest: {
        route: 'order/test',
        method: 'post',
        private: true,
        params: {
            timeInForce: 'GTC',
            type: 'LIMIT'
        }
    },
    myTrades: {
        route: 'myTrades',
        method: 'get',
        private: true
    },
}

const endpoint = 'https://api.binance.com/api/v3/'

/**
 * Binance API wrapper
 * @docs {@link https://github.com/binance/binance-spot-api-docs}
 * @example https://github.com/ViewBlock/binance-api-node
 * @version 3
 */

export default class Binance extends Generator implements iProviderCEX {

    config: iConfig
    ws: any
    futures: any

    ping: any
    time: any
    market: any
    depth: any
    candles: any
    trades: any
    orders: any
    account: any
    createOrder: any
    deleteOrder: any
    updateOrder: any

    constructor(config: iConfig) {

        super()

        this.config = config

        this.ws = new Websocket(config)
        this.futures = new Futures(config)

        const api = this.generate({
            schema,
            schema_params: {
                symbol: (val) => (val).toUpperCase(),
                side: (val) => (val).toUpperCase(),
                type: (val) => (val).toUpperCase(),
            },
            request_private: this.requestPrivate,
            request_public: this.requestPublic,
        })

        Object.assign(this, api)
    }

    /**
     * Request public
     * @param data - default params
     * @param params - payload params
     * @returns {promise}
     */

    requestPublic(data, params) {
        const url = endpoint + data.route
        return axios.get(url, { params }).then(r => r.data)
    }

    /**
     * Request private
     * @param data 
     * @param params
     * @returns {promise}
     */

    requestPrivate(data, params) {

        const url = endpoint + data.route

        const { api_key, api_secret } = this.config
        const timestamp = new Date().getTime()

        const queryString = JSON.stringify({ ...data.params, ...params, timestamp })
        const signature = crypto.createHmac('sha256', api_secret)
            .update(queryString)
            .digest('hex')

        const opt = {
            method: data.method || 'get',
            url,
            headers: { 'X-MBX-APIKEY': api_key },
            params: { ...params, ...data.params, signature, timestamp }
        }

        return axios(opt).then(r => r.data)
    }

}