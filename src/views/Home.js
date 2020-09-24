import React from 'react';
import p5 from 'p5';

new p5(s => {
    s.setup = () => {
        s.createCanvas(200, 200);
    };

    s.draw = () => {
        s.background(0);
    };
}, 'sketch');

const Home = () => ( 
    <div className="Home">
        <div id="sketch"/>
        <div className="content">
            <h1 className="name">Emmanuel Z. Price</h1>
            <ul className="links">
                <li>v</li>
                <li>w</li>
                <li>x</li>
                <li>y</li>
                <li>z</li>
            </ul>
        </div>
    </div>
);

export default Home;
