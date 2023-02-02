# multi exchange api

## TODO

Требуется разработать "multi exchange api" с REST, Webscoket и Futures (REST+WS) api. 

**CEX**

- [ ] Binance
- [ ] Kucoin
- [ ] Gateio
- [ ] MEXC
- [ ] BitMart

**DEX**

- [ ] Etherium
- [ ] BSC
- [ ] Aptos


## Folders

```bash
├── api
|   ├── index.ts
|   ├── Binance
|   |   ├── index.js # REST
|   |   ├── Websocket.ts
|   |   └── Futures.ts
|   └── etc.
├── modules
|   └── Generator.ts # CEX API generator
├── ts
|   ├── provider.cex.d.ts
|   └── provider.dex.d.ts
```

## Docs

https://coinmarketcap.com/ru/rankings/exchanges/

* [Binance](https://github.com/binance/binance-spot-api-docs)
    * [REST](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
    *  [Webscoket](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md) + [Webscoket Spot](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md) + [Webscoket User](https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md)
    * [Futures]()
* [Kucoin](https://docs.kucoin.com/#general)
* [Gateio](https://www.gate.io/docs/developers/apiv4/en/)
* [MEXC](https://mxcdevelop.github.io/APIDoc/)
* [BitMart](https://developer-pro.bitmart.com/en/spot/#getting-started-2)
