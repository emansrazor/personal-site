import React from 'react';
import Quote from '../components/Quote';
import quotes from '../config/quotes';
import '../styles/Quotes.scss';

const Quotes = () => (
    <div className="Quotes">
        <div className="display">
            { Object.entries(quotes)
                    .map(([a, c]) => ({author: a, content: c})) // convert to array of dicts
                    .sort((a, b) => {                           // alphabetical by first name
                        return b.author > a.author ? -1 :
                               b.author < a.author ?  1 :
                               0;
                    }).map((q, i) => (
                        <Quote
                            key={ i }
                            url={ q.url }
                            author={ q.author }
                            content={ q.content }/>
                    )) }
        </div>
    </div>
);

export default Quotes;
