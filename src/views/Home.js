import React from 'react';
import p5 from 'p5';
import '../styles/Home.scss';

new p5(s => {
    let seed = 0;
    let scale = 20;
    let camera;
    s.setup = () => {
        s.createCanvas(200, 200, s.WEBGL);
        s.frameRate(25);
    };

    s.draw = () => {
        s.resizeCanvas(s.windowWidth, s.windowHeight);
        s.background(0);
        const cols = Math.floor(s.width / scale);
        const rows = Math.floor(s.height / scale);
        const terrain = Array.from(Array(rows), () => new Array(cols));
        seed -= 0.01;
        let yoff = seed;

        for (let y = 0; y < rows; y++) {
            let xoff = 0;
            for (let x = 0; x < cols; x++) {
                terrain[y][x] = s.map(
                    s.noise(xoff, yoff),
                    0, 1,
                    -150, 150
                );
                xoff += 0.1;
            }
            yoff += 0.1;
        }
        s.stroke(255);
        s.noFill();
        s.translate(-s.width/2, -100);
        s.rotateX(s.PI/3);
        //s.translate(-s.width/1.3, -s.height/2);
        for (let y = 0; y < rows-1; y++) {
            s.beginShape(s.TRIANGLE_STRIP);
            for (let x = 0; x < cols; x++) {
                s.vertex(x*scale, y*scale, terrain[y][x]);
                s.vertex(x*scale, (y+1)*scale, terrain[y+1][x]);
            }
            s.endShape();
        }
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
                <li>?</li>
                <li>"</li>
            </ul>
        </div>
    </div>
);

export default Home;
