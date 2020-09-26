import React, { useState, useEffect } from 'react';
import p5 from 'p5';
import { Link } from 'react-router-dom'
import {
    FaTwitter,
    FaQuoteRight,
    FaEye,
    FaMugHot
} from 'react-icons/fa';
import { RiGitMergeFill } from 'react-icons/ri';
import '../styles/Home.scss';

const runSketch = () => {
    new p5(s => {
        let seed = 0;
        let scale = 20;
        let url;
        s.setup = () => {
            s.createCanvas(200, 200, s.WEBGL);
            s.frameRate(25);
            url = s.getURL();
        };

        s.draw = () => {
            // GC on page change
            if (url !== s.getURL()) {
                s.remove();
            }
            s.resizeCanvas(s.windowWidth, s.windowHeight);
            s.background(0);
            const cols = Math.floor(s.width / scale);
            const rows = Math.floor(s.height / scale);
            const terrain = Array.from(Array(rows), () => new Array(cols));
            seed -= 0.015;
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
};

const Home = () => {
    const [hovered, setHovered] = useState("");
    useEffect(() => {
        runSketch();
        document.body.classList.add('no-scroll');
        return () => document.body.classList.remove('no-scroll');
    }, []);
    return (
        <div className="Home">
            <div id="sketch"/>
            <div className="content">
                <h1 className="name">Emmanuel Z. Price</h1>
                <div className="links">
                    <span className="hovered">
                        { hovered }
                    </span>
                    <a
                        className="twitter-link"
                        href="https://twitter.com/emansrazor"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="twitter"
                    >
                        <FaTwitter 
                            onMouseEnter={() => setHovered("twitter")}
                            onMouseLeave={() => setHovered("")}
                        />
                    </a>
                    <a
                        className="github-link"
                        href="https://github.com/emansrazor"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="github"
                    >
                        <RiGitMergeFill
                            onMouseEnter={() => setHovered("github")}
                            onMouseLeave={() => setHovered("")}
                            size="19px"
                        />
                    </a>
                    <Link
                        activeClassName="current"
                        className="quote-link"
                        to="/selected-quotes"
                        title="selected quotes"
                    >
                        <FaQuoteRight
                            onMouseEnter={() => setHovered("selected quotes")}
                            onMouseLeave={() => setHovered("")}
                            size="15px"
                        />
                    </Link>
                    <Link
                        activeClassName="current"
                        className="eye-link"
                        to="/who-am-eye"
                        title="who am eye"
                    >
                        <FaEye
                            onMouseEnter={() => setHovered("who am eye")}
                            onMouseLeave={() => setHovered("")}
                            size="19px"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Home;
