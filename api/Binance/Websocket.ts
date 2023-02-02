import Generator from 'generator'

const schema = {
    depth: {
        // speed: 100 or 1000
        input: ({ symbol, level = 5, speed = 1000 }) => `${symbol}@depth${level}@${speed}ms`
    },
    market: {
        input: ({ symbol }) => `${symbol}@ticker`
    },
    trades: {
        input: ({ symbol }) => `${symbol}@trade`
    },
    aggTrades: {
        input: ({ symbol }) => `${symbol}@aggTrade`
    },
    candles: {
        input: ({ symbol, timeframe = '30m' }) => `${symbol}@kline_${timeframe}`
    }
}

const endpoint = 'wss://stream.binance.com:9443/ws/'

/**
 * Websocket
 * {@link https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md}
 * {@link https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md | User data}
 */

export default class Websocket extends Generator {

    options: object

    constructor(options) {

        super()

        this.options = options

        const api = this.generate({
            schema,
            schema_params: {
                symbol: (val) => (val).toLowerCase()
            },
            request_public: (data, params, cb) => this.requestPublic(data, params, cb),
            request_private: (data, params, cb) => this.requestPrivate(data, params, cb),
        })

        Object.assign(this, api)
    }

    requestPublic(data, params, cb) {
        const url = endpoint + data.input(params)
        return this.handler(url, cb)
    }

    requestPrivate(data, params, cb) {
        const url = endpoint + data.input(params)
        // const { api_key, api_secret } = this.options

        return this.handler(url, cb)
    }
}