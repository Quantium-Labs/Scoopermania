import {useState, useEffect} from 'react'
import '../App.css'

export default function Supporters() {
    useEffect(() => {
        document.title = "Scoopermania Patrons";
    }, []);

    return (
        <>
            <div id="screen-dimmer"></div>


            <div id="patronCenter" className="glass">
                <h1 id="patronTitle">Patrons</h1>
                <div id="patronLists">
                    {/*<p className="list">Matt Malupin<br/>Caleb Lefebvre<br/>Camden Clark<br/>Patricia Fries<br/>Linda*/}
                    {/*    Manganaro*/}
                    {/*</p>*/}
                    {/*<p className="list">Ms. Q<br/>Hailey Stern<br/>Amitai Zur<br/>Jannine Williams<br/>Donald Rivkin</p>*/}
                    {/*<p className="list">Cairn Johnson<br/>Lincoln Clark<br/>Al Davidson<br/>Judy Miller</p>*/}
                </div>
            </div>
            <div className="credits glass">
                <p className="creditsText">Website built by <b>Alex Rivkin</b> and <b>Eythan Lawless</b></p>
            </div>
            </>
    )
}