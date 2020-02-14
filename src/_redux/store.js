import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";
import {Lelang} from '../_reducers/lelang'
const rootReducers = combineReducers({
    Lelang
})
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store