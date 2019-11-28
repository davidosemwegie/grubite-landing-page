import React from 'react';
import './LandingPage.css';
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

import screenshot from './screenshot.png'

//const screenshot = () => <Img src="src/Landing/screenshot.PNG" />

function LandingPage() {
    return (
        <html>
            <header>
                <p className="logo">grubite</p>
            </header>
            <body>
                <div className="body-row">
                    <div className="body-box" id="left-box">
                        <h1 className="hero-text">Revolutionizing the way you decide <p className="p-inner-text">what to eat.</p></h1>
                        <h2 className="launch-text">Coming <p className="p-inner-text">soon.</p></h2>
                    </div>
                    <div className="body-box" id="right-box">
                        <img src={screenshot} alt="screenshot" />
                    </div>
                </div>
            </body>
            {/* <footer>
                <p className="footerLogo">grubite</p>
                <IconContext.Provider value={{ color: "black", size: "50" }}>
                    <div>
                        <FaInstagram />
                    </div>
                </IconContext.Provider>
            </footer> */}
        </html>
    )
}

export default LandingPage;