import user from './user'
import reciever from './reciever'
import detail_transaction from './detail_transaction'
import wallet from './wallet'
import history from './history'
import { combineReducers } from 'redux'
const reducers = {
    users : user,
    recievers : reciever,
    wallets : wallet,
    details_transactions : detail_transaction,
    historys : history
}

export default combineReducers(reducers)