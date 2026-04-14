import { Link } from "react-router";

export default function Navbar() {

    const handleBarHover = (e) => {
        const bar = e.currentTarget;
        // Logic from script.js barHover
        bar.style.width = "30%";
        bar.style.height = "8%";
        bar.style.borderRadius = "2em";
        bar.style.backgroundColor = "rgba(130, 130, 130, 0.5)";
        bar.style.borderColor = "rgb(170, 170, 170)";
        bar.style.backdropFilter = "blur(2vw)";
        bar.style.boxShadow = "0px 0px 85px 45px rgba(255,255,255,0.25)";

        const allButtons = document.querySelectorAll(".btn");
        allButtons.forEach((button) => {
            button.style.fontSize = "1.4vw";
        });

        // Dimmer logic
        const screenDimmer = document.getElementById("screen-dimmer");
        if (screenDimmer && screenDimmer.style.pointerEvents !== 'auto') {
            screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
            screenDimmer.style.backdropFilter = "blur(0.2vw)";
            screenDimmer.style.webkitBackdropFilter = "blur(0.2vw)";
        }
    };

    const handleBarOff = (e) => {
        const bar = e.currentTarget;
        // Logic from script.js barOff
        bar.style.width = "25%";
        bar.style.height = "7%";
        bar.style.borderRadius = "1.45em";
        bar.style.backgroundColor = "rgba(229, 229, 229, 0.3)";
        bar.style.borderColor = "#E5E5E5";
        bar.style.backdropFilter = "blur(1.5vw)";
        bar.style.boxShadow = "0 0.8vw 1.5vw rgba(0, 0, 0, 0.25)";

        const allButtons = document.querySelectorAll(".btn");
        allButtons.forEach((button) => {
            button.style.fontSize = "1.2vw";
        });

        // Dimmer logic
        const screenDimmer = document.getElementById("screen-dimmer");
        if (screenDimmer && screenDimmer.style.pointerEvents !== 'auto') {
            screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0)";
            screenDimmer.style.backdropFilter = "blur(0)";
            screenDimmer.style.webkitBackdropFilter = "blur(0)";
        }
    };

    const handleItemHover = (e) => {
        const element = e.currentTarget;
        const img = element.querySelector(".image");
        const btn = element.querySelector(".btn");
        if (img) {
            img.style.opacity = 0;
            img.style.transform = "scale(0.9) translateZ(0)"
        }
        if (btn) {
            btn.style.opacity = 1;
            btn.style.transform = "scale(1.1) translateZ(0)";
        }
    };

    const handleItemLeave = (e) => {
        const element = e.currentTarget;
        const img = element.querySelector(".image");
        const btn = element.querySelector(".btn");
        if (img) {
            img.style.opacity = 1;
            img.style.transform = "scale(1) translateZ(0)";
        }
        if (btn) {
            btn.style.opacity = 0;
            btn.style.transform = "scale(1) translateZ(0)";
        }
    };

    return (
        <div id="bar" onMouseEnter={handleBarHover} onMouseLeave={handleBarOff} className="glass">
            <div id="container">
                <div id="home" className="overlap" onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
                    <img src="/home.png" alt="Home" className="image" id="homeIcn" />
                    <button id="homeBtn" className="btn">
                        <Link to={"/"}>Home</Link>
                    </button>
                </div>

                <div id="iceCream" className="overlap" onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
                    <img src="/ticket.png" alt="Ice Cream" className="image" id="iceCreamIcn" />
                    <button id="iceCreamBtn" className="btn">
                        <Link to="/tickets">Tickets</Link>
                    </button>
                </div>

                <div id="about" className="overlap" onMouseEnter={handleItemHover} onMouseLeave={handleItemLeave}>
                    <img src="/heart.png" alt="supporters" className="image" id="donateIcn" />
                    <button id="aboutBtn" className="btn">
                        <Link to="/supporters">Patrons</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
