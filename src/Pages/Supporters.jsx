import {useState} from 'react'
import Navbar from '../Navbar.jsx'
import '../App.css'

export default function Supporters() {

    return (
        <>
            <head>
                <title>Scoopermania Patrons</title>
                <link rel="icon" href="../assets/icon.png" type="image/x-icon"/>
                <link rel="stylesheet" href="../styles.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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