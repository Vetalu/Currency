import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './index.css';
import Currency_Calc from "./components/Currency_Calc";
import Currency_Rates from "./components/Currency_Rates";
import Layout from "./pages/Layout"

function App () {
    return (
        <div>
        <Layout/>
        <Routes>
            <Route path="/" element={<Currency_Calc/>}/>
            <Route path="Currency_Rates" element={<Currency_Rates/>}/>
        </Routes>
        </div>
    )
}

export default App;
