import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import ApiCalculator from "../api/ApiCalculator";

function Currency_Calc () {
    const dispatch = useDispatch();
    const userValue = useSelector(state => state.userValue);
    const currencyBuy = useSelector(state => state.currencyBuy);
    const currencySell = useSelector(state => state.currencySell);
    const currencyResult = useSelector(state => state.currencyResult);
    const currencyRate = useSelector(state => state.currencyRate);

    // Api request
        useEffect(() => {
            ApiCalculator(currencyRate,currencyBuy,userValue,currencySell, dispatch)
            }, [() => checkText]);
        useEffect(() => {
            ApiCalculator(currencyRate,currencyBuy,userValue,currencySell, dispatch)
            }, []);
        
    //Regular expression check
    const currencyCheck = ["USD","PLN","UAH","EUR","CZK","JPY","NOK"];
    function checkText() {
        let textarea = document.getElementById("text").value.toUpperCase();
        for (let i = 0; i!=currencyCheck.length; i++) {
            let num = Number(textarea.match(/\d+/g));
            dispatch({type:"USER_VAL", payload: num});
                if (textarea.match(`${num} ${currencyCheck[i]}`)) {
                    dispatch({type:"BUY", payload: currencyCheck[i]});
                }
                if (textarea.match(`IN ${currencyCheck[i]}`)) {
                    dispatch({type:"SELL", payload: currencyCheck[i]});
                }
            }
        
    }

    return (
        <div className="App">   
            <div className="title">
                <h1>Currency Conversion</h1>
            </div>
            <div className="currencyField">
                <p>Example: 15 USD in UAH</p> 
                <textarea wrap="off" maxLength="20" id="text"></textarea>
                <p>Result: you buy {userValue} {currencyBuy} for { Number(currencyResult.toFixed(2))} {currencySell}</p>
                <p>1 {currencyBuy} = {Number(currencyRate.toFixed(2))} {currencySell}</p>
            </div>
            <button className="butCalc" onClick={() => checkText()}>Convert!</button>
        </div>
    )
}

export default Currency_Calc