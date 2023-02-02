import 'tsconfig-paths/register'
import api from 'api'

api.binance({
    api_key: '',
    api_secret: '',
}).ping().then(console.log)