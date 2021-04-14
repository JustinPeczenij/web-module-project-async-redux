import axios from "axios";

export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCCESS = "FETCH_QUOTE_SUCCESS";
export const FETCH_QUOTE_ERROR = "FETCH_QUOTE_ERROR";

export const fetchQuote = () => {
    return (dispatch) => {
    dispatch({type: FETCH_QUOTE_START })
    axios.get('https://api.kanye.rest')
        .then((res)=> {
            console.log(res.data.quote)
            dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data.quote })
        })
        .catch((err)=> {
            console.log(err)
            dispatch({ type: FETCH_QUOTE_ERROR, payload: err.message })
        })
    }   
}