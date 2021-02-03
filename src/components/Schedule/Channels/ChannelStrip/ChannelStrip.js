import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import moment from "moment";
import "./channel-strip.css"

const ChannelStrip = ({ name, schedule, timeDigit, ampm }) => {

    //bring in the clock

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

    //get the channel name and digits
    let end = parseInt(name.channelText.length);
    let num = name.channelText.slice(0, 3);
    let channel = name.channelText.slice(3, end);

    //get time information
    let hour = parseInt(timeDigit.slice(0, 1));
    let zeroOrThirty = timeDigit.slice(2, 3);

    if (timeDigit.slice(1, 2) !== ":") {
        hour = timeDigit.slice(0, 2);
        zeroOrThirty = timeDigit.slice(3, 4);
    }

    let firstBlock = schedule.filter(
        (program) => program.timeSlot === hour + ampm
    );

    let secondBlock = schedule.filter(
        (program) => program.timeSlot === (hour + 1) + ampm
    )

    let defaultClass = "block program"
    let first30 = "block one-30"
    let second30 = "block two-30"

    return (
        <div className="channel-strip-container">
            <div className="name">
                <h4 className="number">{num}</h4>
                <h4 className="title">{channel}</h4>
            </div>
            <Link to="/pv"
                className={
                    zeroOrThirty >= 3
                        ?
                        first30
                        :
                        defaultClass.concat("-1")
                }
            >
                <h4>{firstBlock[0].name}</h4>
            </Link>
            <Link to="/pv"
                className={
                    zeroOrThirty >= 3
                        ?
                        second30
                        :
                        defaultClass.concat("-2")
                }
            >
                <h4>{secondBlock[0].name}</h4>
            </Link>
        </div>
    )
}

export default ChannelStrip
