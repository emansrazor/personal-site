import React from 'react';

const Quote = ({ author, content }) => (
    <div className="Quote">
        <span className="author">
            { author }
        </span>:
        <blockquote className="content">
            { content.map((q, i) => (
                <React.Fragment key={i}>
                    {/* Separates multiple quotes from same author */}
                    { !!i && <hr align="left"/>}
                    <p>
                        {/* Breaks up quote with linebreaks if '\n' is present in quote */}
                        { q.split('\n').map((line, j) => (
                            <React.Fragment key={j}>
                                {line}<br/>
                            </React.Fragment>
                        )) }
                    </p>
                </React.Fragment>
            ))}
        </blockquote>
    </div>
);

export default Quote;
