import Binance from './Binance'
import Gate from './Gate'

// import Aptos from './Aptos'

export default {

    /**
     * Сentralized exchanges (CEX)
     * @param {object} options
     */

    binance: (options) => new Binance(options),
    kucoin: (options) => null,
    gate: (options) => new Gate(options),
    mexc: (options) => null,
    lpbank: (options) => null,

    /**
     * Decentralized exchanges (DEX)
     * @param {object} options
    */

    // aptos: (options) => new Aptos(options),
    ethereum: () => null,
    bsc: () => null,
}