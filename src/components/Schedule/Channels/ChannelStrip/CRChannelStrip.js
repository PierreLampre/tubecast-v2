import React from 'react'
import ProgramBlock from "./ProgramBlock"
import { Link } from "react-router-dom"
import "./channel-strip.css"

const CRChannelStrip = ({ name, schedule, timeDigit, ampm, passIdChann, sendPrograms }) => {

    //get the channel name and digits
    let end = parseInt(name.channelText.length);
    let num = name.channelText.slice(0, 3);
    let channel = name.channelText.slice(3, end);

    //get time information
    let hour = parseInt(timeDigit.slice(0, 1));
    let zeroOrThirty = parseInt(timeDigit.slice(2, 3));

    if (timeDigit.slice(1, 2) !== ":") {
        hour = parseInt(timeDigit.slice(0, 2));
        zeroOrThirty = parseInt(timeDigit.slice(3, 4));
    }

    //should you want to spoof the clock...do it here
    // //!!**!!**CHECK THIS BEFORE YOU THINK THE SCHEDULE HAS A BUG **!!**!!
    hour = 1
    zeroOrThirty = 0
    ampm = "am"

    if (zeroOrThirty >= 3) {
        hour = hour + .5
    }

    //define current programming for channel

    let thisHoursPrograms = [];
    let firstFilter = [];
    let programElements = [];

    for (let i = 0; i < schedule.length; i++) {
        if (schedule[i].hour < hour + 2.5 && schedule[i].hour > hour - 2.5) {
            firstFilter.push(schedule[i]);
        }
    }

    if (ampm === "am") {
        thisHoursPrograms = firstFilter.filter(program => (program.ampm === "am" && program.hour !== 12) ||
            (program.hour === 12 && program.ampm === "pm"))
    } else {
        thisHoursPrograms = firstFilter.filter(program => (program.ampm === "pm" && program.hour !== 12) ||
            (program.hour === 12 && program.ampm === "am"))
    }

    if (hour >= thisHoursPrograms[0].hour + 1.5) {
        thisHoursPrograms.shift()
    }

    if (hour === 12 || (hour === 12 && zeroOrThirty >= 3)) {
        thisHoursPrograms = [];
        thisHoursPrograms = schedule.filter(program => program.hour === 12 || (program.hour > 0 && program.hour < 2))

        if (ampm === "am") {
            thisHoursPrograms = thisHoursPrograms.filter(program => (program.ampm === "am"))
        } else {
            thisHoursPrograms = thisHoursPrograms.filter(program => (program.ampm === "pm"))
        }
        if (hour === thisHoursPrograms[0].hour - 10.5) {
            thisHoursPrograms.shift();
        }
    }

    if (hour === 1 || hour === 1.5) {
        thisHoursPrograms = [];
        thisHoursPrograms = schedule.filter(program => program.hour === 12 || (program.hour > 0 && program.hour < 3.5))
        if (ampm === "am") {
            thisHoursPrograms = thisHoursPrograms.filter(program => (program.ampm === "am"))
        } else {
            thisHoursPrograms = thisHoursPrograms.filter(program => (program.ampm === "pm"))
        }
    }

    let allTheLengths = [];

    for (let i = 0; i < thisHoursPrograms.length; i++) {
        allTheLengths.push(thisHoursPrograms[i].length)
    }

    let currentLength = allTheLengths.reduce((a, b) => a + b, 0)
    console.log(currentLength)

    console.log(thisHoursPrograms)

    let full;

    for (let i = 0; i < thisHoursPrograms.length; i++) {
        if (thisHoursPrograms[i].hour === hour) {
            full = thisHoursPrograms[i];
        }
    }

    if (full !== undefined) {
        let full = [
            <ProgramBlock
                _css={"block full"}
                passId={passId}
                id={thisHoursPrograms[0].id}
                key={thisHoursPrograms[0].id}
                name={thisHoursPrograms[0].name}
            />
        ]
        programElements = full
    }


    //lift up the proper video ID onClick

    function passId(id) {
        passIdChann(id);
    }

    function sendThePrograms(arr) {
        sendPrograms(arr);
    }

    return (
        <div className="channel-strip-container">
            <Link
                to="/on-demand"
                className="name"
                onClick={() => sendThePrograms(schedule)}
            >
                <h4 className="number">{num}</h4>
                <h4 className="title">{channel}</h4>
            </Link>
            {programElements.map(
                program => program
            )}
        </div>
    )
}

export default CRChannelStrip