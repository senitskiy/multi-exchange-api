# multi exchange api

## Описание задачи

Требуется разработать кросс-биржевое апи с REST, Webscoket и Futures подключением. 

* REST - получение и изменение данных
* Webscket - получение данных и изменение
* Futures - тоже самое, что и REST+Webscket, только с другим эндпоинтом

Пример нашей реализации [REST](https://github.com/marcius-capital/multi-exchange-api/blob/main/api/Binance/index.ts) + [WS](https://github.com/marcius-capital/multi-exchange-api/blob/main/api/Binance/Websocket.ts). Для создания API мы используем [схему](https://github.com/marcius-capital/multi-exchange-api/blob/main/api/Binance/index.ts#L10) и класс [Generator.ts](https://github.com/marcius-capital/multi-exchange-api/blob/main/modules/Generator.ts). 

Пример стороннего проекта: https://coinray.docs.apiary.io/ . В сети полно готовых решение [раз](https://www.npmjs.com/package/binance-api-node), [два](https://www.npmjs.com/package/node-binance-api) etc.

### Test task

1. доделать [Binance API](https://github.com/marcius-capital/multi-exchange-api/tree/main/api/Binance) с REST+WS+Futures используя [документацию](https://github.com/marcius-capital/multi-exchange-api/edit/main/README.md#docs)
2. написать тесты для каждого метода используя Mocha+Chai

**Задание оплачивается при 100% выполнение с продолжением работы.**

Контакты для связи: https://RebelGroupHR.t.me/

## TODO

**CEX**

- [ ] Binance
- [ ] Kucoin
- [ ] Gateio
- [ ] MEXC
- [ ] BitMart
- [ ] стандартизированный ответ для всех бирж

**DEX**

- [ ] Etherium
- [ ] BSC
- [ ] Aptos
- [ ] стандартизированный ответ для всех бирж

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
* [MEXC](https://www.mexc.com/mexc-api)
* [BitMart](https://developer-pro.bitmart.com/en/spot/#getting-started-2)
