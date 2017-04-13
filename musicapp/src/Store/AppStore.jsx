import {applyMiddleware , createStore} from "redux";

// import logger from "redux-logger";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"

//link reducer here
import reducer from "./../Reducers/Reducers";

const middleware = applyMiddleware(thunk, createLogger({collapsed: true}));
export default createStore(reducer, {}, middleware);
