import React, { useState, useEffect } from 'react'
import TV_G from "./img/tvg-logo.png"
import mail from "./img/mail.svg"
import hire_me from "../Footer/img/hireme.gif"
import moment from "moment"
import "./info-panel.css"

const InfoPanel = ({ yt_id }) => {

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

    let muteNumber = 0

    //toggle mute on youtube embed by id
    if (yt_id === "KdEZ1lij8Fg") {
        muteNumber = 1
    }

    return (
        <div className="info-panel-container">
            <div className="logo">
                <a href="https://tubecast.netlify.app/"><h1 className="main-logo">Tubecast</h1></a>
            </div>
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
                <div className="info-program">Paid Programming</div>
                <div className="info-channel">4 ION</div>
            </div>
            <div className="commercial">
                <iframe
                    title="A YouTube Iframe"
                    className="yt"
                    src={`https://www.youtube.com/embed/${yt_id}?mute=${muteNumber}&controls=1&autoplay=1&fs=1&loop=1&playlist=${yt_id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture; loop;"
                ></iframe>
            </div>
            <div className="blurb-box">
                Click on program names to load them into the video player.  Click on channel names to view OnDemand programs.
            </div>
            <div className="info-footer-container">
                <a
                    href="https://github.com/PierreLampre"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={hire_me} alt="A gif begging someone to hire me." />
                </a>
            </div>
        </div>
    )
}

export default InfoPanel
