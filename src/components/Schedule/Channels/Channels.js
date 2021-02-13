import React, { useState } from 'react'
import NewChannelStrip from "./ChannelStrip/NewChannelStrip"
import "./channels.css";

const Channels = ({ passIdSched, programSchedule, timeDigit,
    ampm, toggleTheView, passOnDemandPrograms,
    animationToggs }) => {

    const [whichArr, setWhichArr] = useState(true);

    let scrollArr = [
        <NewChannelStrip
            name={programSchedule.blurbs.drama}
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
            console.log("running")
        } else {
            setWhichArr(false)
            console.log("running")
        }
    }


    return (
        <div className="channels-container">
            {whichArr ? scrollArr.map(program => program) : channelsArr.map(program => program)}
        </div>
    )
}

export default Channels;
