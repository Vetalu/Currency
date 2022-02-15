import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createStore } from 'redux';
import App from './App'

const defaultState = {
    userValue: 1,
    currencyBuy: "USD",
    currencySell: "UAH",
    currencyRate: 1,
    currencyResult:0,
    currencyInformation: {} ,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "BUY":
            return {...state, currencyBuy: action.payload}
        case "SELL":
            return {...state, currencySell: action.payload}
        case "RATE":
            return {...state, currencyRate: action.payload}
        case "USER_VAL":
            return {...state, userValue: action.payload}
        case "RESULT":
            return {...state, currencyResult: state.userValue * state.currencyRate}
        case "GET_CUR":
            return {...state, currencyInformation: action.payload}
        default: 
            return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
