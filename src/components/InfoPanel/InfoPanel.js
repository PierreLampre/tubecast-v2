import React, { useState, useEffect } from 'react'
import TV_G from "./img/tvg-logo.png"
import mail from "./img/mail.svg"
import moment from "moment"
import channelStrings from "../../channelStrings.json"
import "./info-panel.css"

const InfoPanel = () => {

    const blurbs = channelStrings.blurbs;

    const [time, setTime] = useState(moment()
        .format("LT")
        .toString()
        .toLocaleLowerCase()
        .replace(/\s/g, ""));

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setTime(moment()
            .format("LT")
            .toString()
            .toLocaleLowerCase()
            .replace(/\s/g, ""));
    };

    let timeDigit = time.slice(0, 4);
    let ampm = time.slice(4, 6)

    if (timeDigit.slice(1, 2) !== ":") {
        timeDigit = time.slice(0, 5);
        ampm = time.slice(5, 7);
    }

    return (
        <div className="info-panel-container">
            <div className="logo"><h1>Tubecast</h1></div>
            <div className="clock-box">
                <p>TV Listings</p>
                <div className="clock-and-mail">
                    <img src={mail} alt="A letter in an envelope" />
                    <p>{timeDigit}{ampm}</p>
                </div>
            </div>
            <div className="tv-guide">
                <img src={TV_G} alt="" className="src" />
            </div>
            <div className="channel-and-program">
                <div className="info-program">Richard Simmons: Dancin' To Manson</div>
                <div className="info-channel">4 ION</div>
            </div>
            <div className="commercial">
                <iframe
                    title="A YouTube Iframe"
                    className="yt"
                    src="https://www.youtube.com/embed/KdEZ1lij8Fg?mute=1&controls=1&autoplay=1&loop=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                ></iframe>
            </div>
            <div className="blurb-box">
                We're still not sure if we like the drugs, or if they like us.
                But that won't stop us from dancin' off those pounds...
            </div>
        </div>
    )
}

export default InfoPanel
