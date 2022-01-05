import {createStore, applyMiddleware, Middleware} from 'redux'
import reducer from './reducer'

export default createStore(reducer);
