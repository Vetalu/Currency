import React from "react";
import ApiRates from "../api/ApiRates";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

function Currency_Rates() {
    // check button value
    function handlebut(id) {
        ApiRates(dispatch, id)
    }
    // Api request
    useEffect(() => {
        ApiRates(dispatch)
    }, []);
    // Redux 
    const dispatch = useDispatch();
    const currencyRat = useSelector(state => state.currencyInformation);
    return (
        <div className="currencyRates">
            <h1>Currency Rates</h1>
            <h2>Select the currency you want to see the rate for 1 unit</h2>
            <div className="buttRate">  
                <button onClick={() => handlebut("EUR")}>EUR</button>
                <button onClick={() => handlebut("USD")}>USD</button>
                <button onClick={() => handlebut("UAH")}>UAH</button>
                <button onClick={() => handlebut("PLN")}>PLN</button>
                <button onClick={() => handlebut("JPN")}>JPN</button>
                <button onClick={() => handlebut("NOK")}>NOK</button>
            </div>
            <div>
                <ol>
                {Object.keys(currencyRat).map((value) => {
                    return <li key={value}>{value}:{Number(currencyRat[value]).toFixed(4)}</li>
                } )}
                </ol>
            </div>
        </div>
    )
}

export default Currency_Rates