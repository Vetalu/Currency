import React from "react";
import ApiRates from "../api/ApiRates";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";

function Currency_Rates() {
    // Api request
    useEffect(() => {
        ApiRates(dispatch)
    }, []);
    // Redux 
    const dispatch = useDispatch()
    const currencyRat = useSelector(state => state.currencyInformation)

    return (
        <div className="currencyRates">
            <h1>Currency Rates</h1>
            <div>
                <ol>
                {Object.keys(currencyRat).map((value) => {
                    return <li key={currencyRat[value]}>{value}:{Number(currencyRat[value]).toFixed(4)}</li>
                } )}
                </ol>
            </div>
        </div>
    )
}

export default Currency_Rates