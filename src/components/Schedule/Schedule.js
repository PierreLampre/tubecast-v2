import React, { useState, useEffect } from 'react'
import Timestrip from "./Timestrip/Timestrip";
import Channels from "./Channels/Channels";
import moment from "moment";
import channelStrings from "../../channelStrings.json"
import "./schedule.css";

const Schedule = (props) => {

    const programSchedule = channelStrings;

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

    function passId(id) {
        props.passId(id)
    }

    return (
        <div className="schedule-container">
            <Timestrip
                timeDigit={timeDigit}
                ampm={ampm}
            />
            <Channels
                timeDigit={timeDigit}
                ampm={ampm}
                programSchedule={programSchedule}
                passIdSched={passId}
            />
        </div>
    )
}

export default Schedule
