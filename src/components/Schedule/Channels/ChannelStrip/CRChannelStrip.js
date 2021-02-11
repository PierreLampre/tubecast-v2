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
    // hour = 11
    // zeroOrThirty = 3
    // ampm = "pm"

    if (zeroOrThirty >= 3) {
        hour = hour + .5
    }


    //define current programming for channel

    let programs = [];


    for (let i = 0; i < schedule.length; i++) {
        let program = {
            hour: schedule[i].hour,
            ampm: schedule[i].ampm,
            name: schedule[i].name,
            id: schedule[i].id,
            length: schedule[i].length,
            currentCSS: "",
        }

        if (program.length === .5) {
            program.cssFirst = ["two-to-three"]
            program.timesFirst = [program.hour]
        } else if (program.length === 1) {
            program.cssFirst = ["two-to-four", "two-to-three"]
            program.timesFirst = [program.hour, program.hour + .5]
        } else if (program.length === 1.5) {
            program.cssFirst = ["full", "two-to-four", "two-to-three"]
            program.timesFirst = [program.hour, program.hour + .5, program.hour + 1]
        } else if (program.length === 2) {
            program.cssFirst = ["full", "full", "two-to-four", "two-to-three"]
            program.timesFirst = [program.hour, program.hour + .5, program.hour + 1, program.hour + 1.5]
        }

        if (program.length !== .5) {
            program.cssNext = "three-to-five"
        } else {
            program.cssNext = "three-to-four"
        }

        program.timeNext = program.hour - .5
        program.cssLast = "four-to-five"
        program.timeLast = program.hour - 1

        for (let i = 0; i < program.timesFirst.length; i++) {
            if (program.timesFirst[i] > 12.5) {
                program.timesFirst[i] = (program.timesFirst[i] - 12)
            }
        }

        if (program.timeNext < 1) {
            program.timeNext = program.timeNext + 12
        }
        if (program.timeLast < 1) {
            program.timeLast = program.timeLast + 12
        }

        programs.push(program);
    }

    let onRightNow;

    function setProgramBlock(css, id, name) {
        let pb = <ProgramBlock
            _css={css}
            passId={passId}
            id={id}
            key={id}
            name={name}
        />;

        return pb;
    }

    let nP11am;
    let nP11pm;

    for (let i = 0; i < programs.length; i++) {
        if (programs[i].hour === 12 && programs[i].ampm === "pm") {
            nP11am = programs[i];
        } else if (programs[i].hour === 12 && programs[i].ampm === "am") {
            nP11pm = programs[i];
        }
    }

    programs = programs.filter(program => program.ampm === ampm)


    for (let i = 0; i < programs.length; i++) {
        for (let j = 0; j < programs[i].timesFirst.length; j++) {
            if (programs[i].timesFirst[j] === hour) {
                onRightNow = programs[i]
            }
        }
    }

    function getCurrentCSS(obj) {
        let cssIndex = obj.timesFirst.indexOf(hour);
        let currentCSS = "block " + obj.cssFirst[cssIndex];
        return currentCSS
    }

    onRightNow.currentCSS = getCurrentCSS(onRightNow);

    let whatsOn = [setProgramBlock(onRightNow.currentCSS, onRightNow.id, onRightNow.name)];

    let nextProgramTime

    if (onRightNow.hour !== 12) {
        nextProgramTime = onRightNow.hour + onRightNow.length;
    } else {
        nextProgramTime = onRightNow.hour + onRightNow.length - 12;
    }

    let nextProgram;

    for (let i = 0; i < programs.length; i++) {
        if (programs[i].hour === nextProgramTime) {
            nextProgram = programs[i]
        }
    }

    if (ampm === "am") {
        nextProgram = nP11am;
    } else {
        nextProgram = nP11pm;
    }



    function nPcss() {
        let css;
        if (onRightNow.currentCSS === "block two-to-four") {
            css = "block four-to-five";
        } else if (onRightNow.currentCSS === "block two-to-three" && nextProgram.length === .5) {
            css = "block three-to-four"
        } else {
            css = "block three-to-five"
        }
        return css;
    }


    if (onRightNow.currentCSS !== "block full") {
        whatsOn.push(setProgramBlock(nPcss(), nextProgram.id, nextProgram.name))
    }

    let lastProgramTime
    let lastProgram

    if (nPcss() === "block three-to-four") {
        lastProgramTime = nextProgram.hour + nextProgram.length;
        for (let i = 0; i < programs.length; i++) {
            if (programs[i].hour === lastProgramTime) {
                lastProgram = programs[i]
            }
        }
        whatsOn.push(setProgramBlock("block four-to-five", lastProgram.id, lastProgram.name))
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
            {whatsOn.map(
                program => program
            )}
        </div>
    )
}

export default CRChannelStrip