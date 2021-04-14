import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../store/actions';


function Quotes(props) {
    useEffect(()=> {
        let msg = new SpeechSynthesisUtterance();
        msg.text = props.quote;
        window.speechSynthesis.speak(msg)
    }, [props.quote])
    return (
        <div className='quotes-container'>
            <button onClick={() => props.fetchQuote()}>What Yeezy Said?</button>
            {props.quote ? <div className='quote-container'>
                <h3>{props.quote}</h3>
                <h5 className='by-kanye'>- Kanye, 21 Grammys, West</h5>
            </div> : null}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        quote: state.quote,
        error: state.error
    }
} 

export default connect(mapStateToProps, { fetchQuote })(Quotes);