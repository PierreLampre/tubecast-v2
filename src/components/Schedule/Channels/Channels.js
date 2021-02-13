import React, { useState } from 'react'
import NewChannelStrip from "./ChannelStrip/NewChannelStrip"
import uniqid from "uniqid"
import "./channels.css";

const Channels = ({ passIdSched, programSchedule, timeDigit,
    ampm, toggleTheView, passOnDemandPrograms,
    animationToggs }) => {

    const [whichArr, setWhichArr] = useState(true);

    let scrollArr = [
        <NewChannelStrip
            name={programSchedule.blurbs.drama}
            key={uniqid()}
            schedule={programSchedule.channels.drama}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.mystery}
            key={uniqid()}
            schedule={programSchedule.channels.mystery}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.mst3k}
            key={uniqid()}
            schedule={programSchedule.channels.mst3k}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.foodie}
            key={uniqid()}
            schedule={programSchedule.channels.foodie}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.collegeRock}
            key={uniqid()}
            schedule={programSchedule.channels.collegeRock}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.drama}
            key={uniqid()}
            schedule={programSchedule.channels.drama}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.mystery}
            key={uniqid()}
            schedule={programSchedule.channels.mystery}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.mst3k}
            key={uniqid()}
            schedule={programSchedule.channels.mst3k}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />
    ]

    let channelsArr = [
        <NewChannelStrip
            name={programSchedule.blurbs.drama}
            key={uniqid()}
            schedule={programSchedule.channels.drama}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.mystery}
            key={uniqid()}
            schedule={programSchedule.channels.mystery}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.mst3k}
            key={uniqid()}
            schedule={programSchedule.channels.mst3k}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.foodie}
            key={uniqid()}
            schedule={programSchedule.channels.foodie}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />,
        <NewChannelStrip
            name={programSchedule.blurbs.collegeRock}
            key={uniqid()}
            schedule={programSchedule.channels.collegeRock}
            timeDigit={timeDigit}
            ampm={ampm}
            passIdChann={passIdChann}
            toggleTheView={toggleTheViewChann}
            sendPrograms={sendProgramsChann}
            animationToggs={animationToggs}
            setArr={setArr}
        />
    ]

    function passIdChann(id) {
        passIdSched(id);
    }

    function toggleTheViewChann() {
        toggleTheView();
    }

    function sendProgramsChann(arr) {
        passOnDemandPrograms(arr);
    }

    function setArr(bool) {
        if (bool) {
            setWhichArr(true)
        } else {
            setWhichArr(false)
        }
    }


    return (
        <div className="channels-container">
            {whichArr ? scrollArr.map(program => program) : channelsArr.map(program => program)}
        </div>
    )
}

export default Channels;
