/* src/Navbar.jsx */
import { barHover, barOff, itemHover, itemLeave } from './script.js'; // You'll need to export these from script.js
import {Link} from 'react-router';

export default function Navbar() {
    return (
        // Note: React uses camelCase for events (onMouseEnter, not onmouseenter)
        // and passes the function itself {barHover}, not a string "barHover()"
        <div id="bar" onMouseEnter={barHover} onMouseLeave={barOff} className="glass">

            <div id="container">

                <div id="home" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/public/home.png" alt="Home" className="image" id="homeIcn"/>
                    <button id="homeBtn" className="btn"><Link to={'/'}>Home</Link></button>
                </div>

                <div id="iceCream" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/public/ticket.png" alt="Ice Cream" className="image" id="iceCreamIcn"/>
                    <button id="iceCreamBtn" className="btn"><Link to="/tickets">Tickets</Link></button>
                </div>

                <div id="about" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/public/heart.png" alt="supporters" className="image" id="donateIcn"/>
                    <button id="aboutBtn" className="btn"><Link to="/supporters">Patrons</Link></button>
                </div>

            </div>
        </div>
    )
}
