import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Timestrip from "./Timestrip/Timestrip";
import Channels from "./Channels/Channels";
import OnDemand from "./OnDemand/OnDemand.js";
import EpisodeLibrary from "./OnDemand/EpisodeLibrary/EpisodeLibrary"
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

    const [onDemandPrograms, setOnDemandPrograms] = useState([]);
    const [episodeList, setEpisodeList] = useState(null);
    const [scroll, setScroll] = useState(true)

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

    function passOnDemandPrograms(arr) {
        setOnDemandPrograms(arr);
    }

    function passEpisodeList(obj) {
        setEpisodeList(obj);
    }

    return (
        <div className="schedule-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <div className="default-schedule-container">
                            <Timestrip
                                timeDigit={timeDigit}
                                ampm={ampm}
                                setScroll={setScroll}
                            />
                            <Channels
                                timeDigit={timeDigit}
                                ampm={ampm}
                                programSchedule={programSchedule}
                                passIdSched={passId}
                                passOnDemandPrograms={passOnDemandPrograms}
                                scroll={scroll}
                            />
                        </div>
                    </Route>
                    <Route path="/on-demand">
                        <OnDemand
                            programs={onDemandPrograms}
                            passId={passId}
                            passEpisodeList={passEpisodeList}
                        />
                    </Route>
                    <Route path="/episode-library">
                        <EpisodeLibrary
                            episodeList={episodeList}
                            passId={passId}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Schedule
