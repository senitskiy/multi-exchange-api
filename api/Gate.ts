
interface Options {
    api_key: string,
    api_secret: string
}

export default class Gate {

    options: Options

    constructor(options: Options) {
        this.options = options
    }

    // queries

    account() { }
    orders() { }

    // mutations

    createOrder() { }
    updateOrder() { }
    cancelOrder() { }

    // websocket

    
}