import { barHover, barOff, itemHover, itemLeave } from "./script.js"; // You'll need to export these from script.js
import { Link } from "react-router";

export default function Navbar() {
    return (
        <div id="bar" onMouseEnter={barHover} onMouseLeave={barOff} className="glass">
            <div id="container">
                <div id="home" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/home.png" alt="Home" className="image" id="homeIcn" />
                    <button id="homeBtn" className="btn">
                        <Link to={"/"}>Home</Link>
                    </button>
                </div>

                <div id="iceCream" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/ticket.png" alt="Ice Cream" className="image" id="iceCreamIcn" />
                    <button id="iceCreamBtn" className="btn">
                        <Link to="/tickets">Tickets</Link>
                    </button>
                </div>

                <div id="about" className="overlap" onMouseEnter={(e) => itemHover(e.currentTarget)} onMouseLeave={(e) => itemLeave(e.currentTarget)}>
                    <img src="/heart.png" alt="supporters" className="image" id="donateIcn" />
                    <button id="aboutBtn" className="btn">
                        <Link to="/supporters">Patrons</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
