import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_ERROR } from "../actions"


const initialState = {
    isLoading: false,
    quote: '',
    error: ''
} 

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isLoading:true
            }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                quote: action.payload,
                error: ''
            }
        case FETCH_QUOTE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}