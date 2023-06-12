import React from 'react';
import './card.scss';

const card =({quote,author, color,getNewQuote})=>{
    
    return(
        <div id="quote-box" className="cardContainer" >
            <div className="quoteSec" >
            <span className="quote" id="text">
                {quote}
            </span>
            <span className="author" id="author">-{author}</span>
            </div>
            <div className="quoteButtons">
                <button id="new-quote" className="newQuote"  onClick={getNewQuote}>New Quote</button>
                <a className="tweetQuote" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">Tweet Quote</a>
            </div>
        </div>
    )
}

export default card;