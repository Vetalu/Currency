export default function ApiCalculator(currencyRate,currencyBuy,userValue,currencySell,dispatch) {
    let requestURL = `https://api.exchangerate.host/convert?from=${currencyBuy}&amount=${userValue}&to=${currencySell}`;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
        let response = request.response.info.rate;
        dispatch({type:"RATE", payload: response});
        dispatch({type:"RESULT", payload:currencyRate});
    }
}