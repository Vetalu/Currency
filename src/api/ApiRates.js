export default function ApiRates(dispatch) {
    const data = new Date()
    var requestURL = `https://api.exchangerate.host/${data.toISOString().split('T')[0]}?base=USD`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
    var response = request.response;
    dispatch({type:"GET_CUR", payload: response.rates})
    }
}