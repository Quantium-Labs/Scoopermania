import { Link, useLocation } from "react-router";
import { useEffect } from "react";

export default function Navbar() {
    const location = useLocation();

    useEffect(() => {
        const bar = document.getElementById("bar");
        if (bar) {
            bar.style.width = "";
            bar.style.height = "";
            bar.style.borderRadius = "";
            bar.style.backgroundColor = "";
            bar.style.borderColor = "";
            bar.style.backdropFilter = "";
            bar.style.webkitBackdropFilter = "";
            bar.style.boxShadow = "";
        }

        const allButtons = document.querySelectorAll(".btn");
        allButtons.forEach((button) => {
            button.style.fontSize = "";
            button.style.opacity = "";
            button.style.transform = "";
        });

        const allImages = document.querySelectorAll(".image");
        allImages.forEach((img) => {
            img.style.opacity = "";
            img.style.transform = "";
        });

        // Dimmer logic
        const screenDimmer = document.getElementById("screen-dimmer");
        if (screenDimmer && screenDimmer.style.pointerEvents !== 'auto') {
            screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0)";
            screenDimmer.style.backdropFilter = "blur(0)";
            screenDimmer.style.webkitBackdropFilter = "blur(0)";
        }
    }, [location.pathname]);

    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

    const handleBarHover = (e) => {
        if (isMobile()) return;
        const bar = e.currentTarget;
        // Logic from script.js barHover
        bar.style.width = "30%";
        bar.style.height = "8%";
        bar.style.borderRadius = "2em";
        bar.style.backgroundColor = "rgba(130, 130, 130, 0.5)";
        bar.style.borderColor = "rgb(170, 170, 170)";
        bar.style.backdropFilter = "blur(2vw)";
        bar.style.webkitBackdropFilter = "blur(2vw)";
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
        if (isMobile()) return;
        const bar = e.currentTarget;
        // Logic from script.js barOff
        bar.style.width = "";
        bar.style.height = "";
        bar.style.borderRadius = "";
        bar.style.backgroundColor = "";
        bar.style.borderColor = "";
        bar.style.backdropFilter = "";
        bar.style.webkitBackdropFilter = "";
        bar.style.boxShadow = "";

        const allButtons = document.querySelectorAll(".btn");
        allButtons.forEach((button) => {
            button.style.fontSize = "";
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
        if (isMobile()) return;
        const element = e.currentTarget;
        const img = element.querySelector(".image");
        const btn = element.querySelector(".btn");
        if (img) {
            img.style.opacity = "0";
            img.style.transform = "scale(0.9) translateZ(0)";
        }
        if (btn) {
            btn.style.opacity = "1";
            btn.style.transform = "scale(1.1) translateZ(0)";
        }
    };

    const handleItemLeave = (e) => {
        if (isMobile()) return;
        const element = e.currentTarget;
        const img = element.querySelector(".image");
        const btn = element.querySelector(".btn");
        if (img) {
            img.style.opacity = "";
            img.style.transform = "";
        }
        if (btn) {
            btn.style.opacity = "";
            btn.style.transform = "";
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
                    <img src="/heart.png" alt="supporters" className="image" id="supportIcn" />
                    <button id="aboutBtn" className="btn">
                        <Link to="/supporters">Patrons</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
