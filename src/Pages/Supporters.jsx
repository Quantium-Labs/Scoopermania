import {useState} from 'react'
import Navbar from '../Navbar.jsx'
import '../App.css'

export default function Supporters() {

    return (
        <>
            <head>
                <title>Scoopermania Patrons</title>
            </head>

            <body>

            <div id="screen-dimmer" onclick="exitInfo()"></div>

            <Navbar/>

            <div id="patronCenter" class="glass">
                <h1 id="patronTitle">Patrons</h1>
                <div id="patronLists">
                    <p class="list">Matt Malupin<br/>Caleb Lefebvre<br/>Camden Clark<br/>Patricia Fries<br/>Linda
                        Manganaro
                    </p>
                    <p class="list">Ms. Q<br/>Hailey Stern<br/>Amitai Zur<br/>Jannine Williams<br/>Donald Rivkin</p>
                    <p class="list">Cairn Johnson<br/>Lincoln Clark<br/>Al Davidson<br/>Judy Miller</p>
                </div>
            </div>
            </body>
            <script src='../script.js'></script>
        </>
    )
}