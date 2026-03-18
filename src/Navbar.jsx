/* src/Navbar.jsx */
import { barHover, barOff, itemHover, itemLeave } from './script.js'; // You'll need to export these from script.js

export default function Navbar() {
    return (
        // Note: React uses camelCase for events (onMouseEnter, not onmouseenter)
        // and passes the function itself {barHover}, not a string "barHover()"
        <div id="bar" onMouseEnter={barHover} onMouseLeave={barOff} className="glass">

            <div id="container">

                <div id="home" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/assets/home.png" alt="Home" className="image" id="homeIcn"/>
                    <button id="homeBtn" className="btn"><a href="/">Home</a></button>
                </div>

                <div id="iceCream" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/assets/ticket.png" alt="Ice Cream" className="image" id="iceCreamIcn"/>
                    <button id="iceCreamBtn" className="btn"><a href="/tickets">Tickets</a></button>
                </div>

                <div id="about" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/assets/heart.png" alt="supporters" className="image" id="donateIcn"/>
                    <button id="aboutBtn" className="btn"><a href="/supporters">Patrons</a></button>
                </div>

            </div>
        </div>
    )
}
