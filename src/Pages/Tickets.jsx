import { useState, useEffect, useRef } from 'react'
import '../App.css'

export default function Tickets() {
    useEffect(() => {
        document.title = "Scoopermania Tickets";
    }, []);

    const closeTimeoutRef = useRef(null);
    const [ticketType, setTicketType] = useState('Premium');
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

    const handleBuy = () => {
        let url = '';
        switch (ticketType) {
            case 'Premium':
                url = 'https://ko-fi.com/s/9419ab8349';
                break;
            case 'Adult':
                url = 'https://ko-fi.com/s/152b08e74c';
                break;
            case 'Child':
                url = 'https://ko-fi.com/s/08b43c691b';
                break;
            case 'Support':
                url = 'https://ko-fi.com/scoopermania';
                break;
            default:
                return;
        }
        window.open(url, '_blank');
    };

    const mainBtnClick = () => {
        const centerElem = document.getElementById("centerTickets"); // Changed to match Tickets page ID
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
        centerElem.style.opacity = 0;
        centerElem.style.pointerEvents = "none";
        centerElem.style.left = "50%";
        centerElem.style.bottom = "50%";
        centerElem.style.backgroundColor = "rgba(130, 130, 130, 0.5)";
        centerElem.style.borderColor = "rgb(170, 170, 170)";
        
        // Colors logic... (labels, numbers, colons not present in Tickets page center?)
        // Tickets page center has labels and inputs. Script.js targetted ".label", ".number", ".colon".
        // Let's check Tickets.jsx content. It has "buyLabel".
        // Script.js seemed generic. I'll include the color transitions just in case.
        const labels = document.querySelectorAll(".label");
        labels.forEach((label) => {
            label.style.transition = "0.7s ease-in-out";
            label.style.color = "#E5E5E5";
        });

        if (mainBtn) {
            mainBtn.style.opacity = 0;
            mainBtn.style.pointerEvents = "none";
        }

        infoRight.style.transition = "none";
        infoRight.style.left = "200%";
        infoRight.style.zIndex = 10;
        infoRight.style.display = "block";

        requestAnimationFrame(() => {
            infoRight.style.transition = "0.7s ease-in-out";
            infoRight.style.left = "50%";
        });

        if (bar) {
            bar.style.transition = "0.5s ease-in-out";
            bar.style.pointerEvents = "none";
            if (isMobile()) {
                bar.style.setProperty("bottom", "-30%", "important");
            } else {
                bar.style.top = "-10%";
            }
        }

        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        screenDimmer.style.pointerEvents = "auto";
        setIsInfoOpen(true);
    };

    const exitInfo = () => {
        if (!isInfoOpen) return;
        const centerElem = document.getElementById("centerTickets");
        const infoRight = document.querySelector(".infoRight");
        const screenDimmer = document.getElementById("screen-dimmer");
        const mainBtn = document.getElementById("scroll");
        const bar = document.getElementById("bar");

        if (!centerElem || !screenDimmer || !infoRight) return;

        centerElem.style.transition = "0.7s ease-in-out";
        centerElem.style.opacity = 1;
        centerElem.style.pointerEvents = "auto";
        centerElem.style.scale = 1;
        centerElem.style.left = "50%";
        centerElem.style.bottom = "50%";
        centerElem.style.backgroundColor = "rgba(229, 229, 229, 0.3)";
        centerElem.style.borderColor = "#E5E5E5";

         const labels = document.querySelectorAll(".label");
        labels.forEach((label) => {
            label.style.color = "white"; // Or default color
        });

        infoRight.style.transition = "0.7s ease-in-out";
        infoRight.style.left = "200%";
        infoRight.style.zIndex = 0;
        
        closeTimeoutRef.current = setTimeout(() => {
             infoRight.style.display = "none";
             closeTimeoutRef.current = null;
        }, 700);

        if (bar) {
            bar.style.transition = "0.5s ease-in-out";
            bar.style.pointerEvents = "auto";
            if (isMobile()) {
                bar.style.setProperty("bottom", "0%", "important");
            } else {
                bar.style.top = "8%";
            }
        }

        screenDimmer.style.backgroundColor = "rgba(0, 0, 0, 0)";
        screenDimmer.style.backdropFilter = "blur(0)";
        screenDimmer.style.webkitBackdropFilter = "blur(0)";
        screenDimmer.style.pointerEvents = "none";

        document.body.style.cursor = "default";

        setTimeout(() => {
            if (mainBtn) {
                mainBtn.style.opacity = 1;
                mainBtn.style.pointerEvents = "auto";
            }
        }, 500);
        setIsInfoOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
             const infoRight = document.querySelector(".infoRight");
             if (isInfoOpen && infoRight && !infoRight.contains(event.target)) {
                 const mainBtn = document.getElementById("scroll");
                 if (!mainBtn || !mainBtn.contains(event.target)) {
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


    return (
        <>
            <div id="screen-dimmer" onClick={exitInfo}></div>


            <div id="centerTickets" className="glass">
                <div id="centerForm">
                    <div id="form">
                        <label htmlFor="ticketType" id="buyLabel">Buy a Ticket!</label>
                        <div id="enter">
                            <select 
                                name="ticketType" 
                                id="ticketType" 
                                value={ticketType}
                                onChange={(e) => setTicketType(e.target.value)}
                            >
                                {/*<option value="Premium">Premium</option>*/}
                                <option value="Adult">Adult</option>
                                <option value="Child">Child</option>
                                <option value="Support">Support</option>
                            </select>
                            <button id="buyBtn" onClick={handleBuy}><img src="/rightArrow.svg" id="buyArrow" /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="scrollBtn">
                <button 
                    className="mainBtn no-glow" 
                    id="scroll" 
                    onClick={(e) => {
                        e.stopPropagation();
                        mainBtnClick();
                    }}
                >
                    What's the difference?
                </button>
            </div>

            <div className="infoRight glass" id="ticketInfoRight">
                <p id="exit" onClick={exitInfo}>X</p>
                <h2 id="infoTitle">What's the difference?</h2>
                <div>
                    <div>
                        <h3 className="larger">Child</h3>
                        <p className="info">For those 12 and younger, get all-you-can-eat ice cream for only <b>$5</b> at Scoopermania!</p>
                    </div>
                    <div>
                        <h3 className="larger">Adult</h3>
                        <p className="info">For those 13 and older, get all-you-can-eat ice cream for only <b>$8</b> at
                            Scoopermania!</p>
                    </div>
                    <div>
                        <h3 className="larger">Premium</h3>
                        <p className="info">For a minimum of only <b>$2</b> more than an adult ticket, enjoy all-you-can-eat ice
                            cream, enter into the raffle, support the cause, and cement your name into the Patrons page of
                            the Scoopermania website!</p>
                    </div>
                </div>
            </div>
            <div className="credits glass">
                <p className="creditsText">Website built by <b>Alex Rivkin</b> and <b>Eythan Lawless</b></p>
            </div>
        </>
    )
}