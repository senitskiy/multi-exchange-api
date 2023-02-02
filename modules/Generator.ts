import ReconnectingWebSocket from 'reconnecting-websocket'
import NodeWebSocket from 'ws'

const wsClient = typeof window !== 'undefined' ? WebSocket : NodeWebSocket

interface iSchema {
    [index: string]: (params: object) => object
}

interface iParams {
    [index: string]: {
        route?: string,
        method?: string,
        input?: (params: object) => object,
        private: boolean,
        params: object // default_params
    }
}

export default class Generator {

    streams: object

    constructor() {
        this.streams = new Map()
    }

    /**
     * Generate Private and Public API
     * @param {object} schema 
     * @param {funcion} public 
     * @param {function} private 
     * @returns {object}
     */

    generate({ schema, schema_params, request_private, request_public }) {
        return Object.keys(schema).reduce((p, c) => {
            p[c] = (params = {}, cb) => {
                params = this.normalise(schema_params, params)
                return (schema[c].private) ? request_private(schema[c], params, cb) : request_public(schema[c], params, cb)
            }
            return p
        }, {})
    }

    /**
    * Normalise params
    * @param {object} params 
    * @returns {object}
    */

    private normalise(schema: iSchema = {}, params: iParams = {}) {
        return Object.keys(params).reduce((p, c) => {
            p[c] = schema[c] ? schema[c](params[c]) : params[c]
            return p
        }, {})
    }

    /**
     * Handler ws connection
     * https://www.npmjs.com/package/ws
     * @param {string} url
     * @param {*} cb 
    */

    handler(url, cb) {
        const ws = new ReconnectingWebSocket(url, [], {
            WebSocket: wsClient,
            minReconnectionDelay: 5000,
            maxRetries: Infinity
        })

        ws.addEventListener('open', () => console.log('[ws]: open'))
        ws.addEventListener('message', (message) => cb(JSON.parse(message.data)))
        
        return ws
    }

    terminate(id) { }
}