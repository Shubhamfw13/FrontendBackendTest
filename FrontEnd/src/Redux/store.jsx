import { createStore, applyMiddleware, compose } from "redux"

import { authReducer, apartmentReducer } from "../Auth/reducer"

import thunk from "redux-thunk"

import { combineReducers } from "redux"

const reducer = combineReducers({
    auth: authReducer,
    apartment: apartmentReducer
})

const composeEnhancer = ((process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))