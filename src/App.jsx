import { useState, useEffect, useRef } from "react";
import "./App.css"; // Ensure styles are loaded

function App() {
    const closeTimeoutRef = useRef(null);
    // Countdown State
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    useEffect(() => {
        const date = new Date("May 9, 2026, 11:00:00").getTime(); // Updated to match script.js date

        const updateCountdown = () => {
            let current = new Date().getTime();
            const distance = date - current;

            if (distance < 0) {
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
                return;
            }

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: ("0" + days).slice(-2),
                hours: ("0" + hours).slice(-2),
                minutes: ("0" + minutes).slice(-2),
                seconds: ("0" + seconds).slice(-2)
            });
        };

        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const mainBtnClick = () => {
        const centerElem = document.getElementById("center");
        const infoRight = document.querySelector(".infoRight");
        const screenDimmer = document.getElementById("screen-dimmer");
        const mainBtn = document.getElementById("scroll");
        const bar = document.getElementById("bar");

        if (!centerElem || !screenDimmer || !infoRight) return;

        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }

        // --- Animate elements ---
        centerElem.style.transition = "0.7s ease-in-out";
        centerElem.style.scale = "0.5";
        centerElem.style.left = "1vw";
        centerElem.style.bottom = "1vw";
        centerElem.style.backgroundColor = "rgba(130, 130, 130, 0.5)";
        centerElem.style.borderColor = "rgb(170, 170, 170)";

        const labels = document.querySelectorAll(".label");
        labels.forEach((label) => {
            label.style.transition = "0.7s ease-in-out";
            label.style.color = "#E5E5E5";
        });
        const numbers = document.querySelectorAll(".number");
        numbers.forEach((number) => {
            number.style.transition = "0.7s ease-in-out";
            number.style.color = "#E5E5E5";
        });
        const colons = document.querySelectorAll(".colon");
        colons.forEach((colon) => {
            colon.style.transition = "0.7s ease-in-out";
            colon.style.color = "#E5E5E5";
        });

        if (mainBtn) {
            mainBtn.style.opacity = "0";
            mainBtn.style.pointerEvents = "none";
        }

        infoRight.style.transition = "none";
        infoRight.style.left = "200%";
        infoRight.style.zIndex = "10";
        infoRight.style.display = "block";

        requestAnimationFrame(() => {
            infoRight.style.transition = "0.7s ease-in-out";
            infoRight.style.left = "50%";
        });

        if (bar) {
            bar.style.transition = "0.5s ease-in-out";
            bar.style.top = "-10%";
            bar.style.pointerEvents = "none";
        }

        // --- Activate PERSISTENT dimmer ---
        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        screenDimmer.style.pointerEvents = "auto";
        setIsInfoOpen(true);
    };

    const exitInfo = () => {
        if (!isInfoOpen) return;
        const centerElem = document.getElementById("center");
        const infoRight = document.querySelector(".infoRight");
        const screenDimmer = document.getElementById("screen-dimmer");
        const mainBtn = document.getElementById("scroll");
        const bar = document.getElementById("bar");

        if (!centerElem || !screenDimmer || !infoRight) return;

        // --- Animate elements back ---
        centerElem.style.transition = "0.7s ease-in-out";
        centerElem.style.scale = "1";
        centerElem.style.left = "50%";
        centerElem.style.bottom = "50%";
        centerElem.style.backgroundColor = "rgba(229, 229, 229, 0.3)";
        centerElem.style.borderColor = "#E5E5E5";

        const labels = document.querySelectorAll(".label");
        labels.forEach((label) => {
            label.style.color = "white";
        });
        const numbers = document.querySelectorAll(".number");
        numbers.forEach((number) => {
            number.style.color = "white";
        });
        const colons = document.querySelectorAll(".colon");
        colons.forEach((colon) => {
            colon.style.color = "white";
        });

        infoRight.style.left = "200%";
        infoRight.style.zIndex = "0";

        closeTimeoutRef.current = setTimeout(() => {
            infoRight.style.display = "none";
            closeTimeoutRef.current = null;
        }, 700);

        if (bar) {
            bar.style.transition = "0.5s ease-in-out";
            bar.style.top = "8%";
            bar.style.pointerEvents = "auto";
        }

        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0)";
        screenDimmer.style.backdropFilter = "";
        screenDimmer.style.webkitBackdropFilter = "";
        screenDimmer.style.pointerEvents = "";

        document.body.style.cursor = "default";

        setTimeout(() => {
            if (mainBtn) {
                mainBtn.style.opacity = "";
                mainBtn.style.pointerEvents = "";
            }
        }, 500);
        setIsInfoOpen(false);
    };

    // Close info if clicking outside infoRight when open
    useEffect(() => {
        const handleClickOutside = (event) => {
            const infoRight = document.querySelector(".infoRight");
            // const bar = document.querySelector("#bar"); // handled in Navbar

            if (isInfoOpen && infoRight && !infoRight.contains(event.target)) {
                // Check if it was mainBtn that was clicked, to avoid immediate close?
                // event.stopPropagation in mainBtn handled this in script.js
                // Here manual check:
                const mainBtn = document.getElementById("scroll");
                if (!mainBtn.contains(event.target)) {
                    exitInfo();
                }
            }
        };

        if (isInfoOpen) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isInfoOpen]);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div id="screen-dimmer" onClick={exitInfo}></div>


            <div id="center" className="glass">
                <div id="countdown-container">
                    <div className="time-unit">
                        <span className="number" id="days">
                            {timeLeft.days}
                        </span>
                        <span className="label">Days</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                        <span className="number" id="hours">
                            {timeLeft.hours}
                        </span>
                        <span className="label">Hours</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                        <span className="number" id="minutes">
                            {timeLeft.minutes}
                        </span>
                        <span className="label">Minutes</span>
                    </div>
                    <span className="colon">:</span>
                    <div className="time-unit">
                        <span className="number" id="seconds">
                            {timeLeft.seconds}
                        </span>
                        <span className="label">Seconds</span>
                    </div>
                </div>
            </div>

            <div id="scrollBtn">
                <button className="mainBtn" id="scroll" onClick={(e) => {
                    e.stopPropagation();
                    mainBtnClick();
                }}>
                    More Info
                </button>
            </div>

            <div className="infoRight glass">
                <p id="exit" onClick={exitInfo}>
                    X
                </p>
                <h2 id="infoTitle">More Info</h2>
                <h3 className="larger">What even is Scoopermania?</h3>
                <p className="info">Scoopermania is an annual all-you-can-eat ice cream fundraiser for the Jimmy Fund and Dana-Farber Cancer Institute!</p>
                <h3 className="larger">When is it?</h3>
                <p className="info">
                    Scoopermania will be held on Saturday, May 17, 2025, from 11:00 AM to 4:00 PM at the{" "}
                    <a id="map" href="https://maps.apple.com/directions?destination=42.415726%2C+-71.15239&mode=driving">
                        Cyrus Dallin Art Museum.
                    </a>
                </p>
            </div>
        </>
    );
}

export default App;

