import React, { useState, useRef, useEffect } from 'react'
import ProgramBlock from "./ProgramBlock"
import { Link } from "react-router-dom"
import disableScroll from 'disable-scroll';
import "./channel-strip.css"

const CRChannelStrip = ({ name, schedule, timeDigit, ampm, passIdChann, sendPrograms, setArr, scroll }) => {

    const [toggleClass, setToggleClass] = useState(true)
    const containerRef = useRef();

    useEffect(() => {

        (function () {
            containerRef.current.style.animation = "moveSlideshow 26s linear infinite;"
            setToggleClass(true);
            setArr(true);
            disableScroll.on();
        })();

        if (scroll === true) {
            containerRef.current.style.animation = "moveSlideshow 26s linear infinite;"
            setToggleClass(true);
            setArr(true);
            disableScroll.on();
        } else {
            containerRef.current.style.animation = "none;"
            setToggleClass(false);
            setArr(false);
            disableScroll.off();
        }

        return function () {
            disableScroll.off();
        }
    }, [setArr, scroll]);

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
    // hour = 8
    // zeroOrThirty = 0
    // ampm = "am"

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
            program.cssNext = "block three-to-five"
        } else {
            program.cssNext = "block three-to-four"
        }

        program.timeNext = program.hour - .5
        program.cssLast = "block four-to-five"
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

    let allPrograms = programs.map(program => program)

    programs = programs.filter(program => program.ampm === ampm)

    // get the changeover timed programs when we need them.

    let concatArr = [];

    if (hour > 8 && hour < 12) {
        if (ampm === "pm") {
            programs = allPrograms.filter(program => (program.hour >= 5.5) && (program.ampm === "pm" && program.hour < 12))
            concatArr = allPrograms.filter(program => (program.hour === 12 && program.ampm === "am") || (program.hour <= 6 && program.ampm === "am"))
            programs = programs.concat(concatArr);
        } else {
            programs = allPrograms.filter(program => (program.hour >= 5.5) && (program.ampm === "am" && program.hour < 12))
            concatArr = allPrograms.filter(program => (program.hour === 12 && program.ampm === "pm") || (program.hour <= 6 && program.ampm === "pm"))
            programs = programs.concat(concatArr);
        }
    } else {
        programs = programs.filter(program => program.ampm === ampm)
    }

    let onRightNow;
    let onRightNowIndex;

    for (let i = 0; i < programs.length; i++) {
        for (let j = 0; j < programs[i].timesFirst.length; j++) {
            if (programs[i].timesFirst[j] === hour) {
                onRightNowIndex = programs.indexOf(programs[i])
                onRightNow = programs[i]
            }
        }
    }
    let nextProgramIndex = onRightNowIndex + 1;
    let nextProgram = programs[nextProgramIndex]
    let lastProgramIndex = onRightNowIndex + 2;
    let lastProgram = programs[lastProgramIndex]

    function getCurrentCSS(obj) {
        let cssIndex = obj.timesFirst.indexOf(hour);
        let currentCSS = "block " + obj.cssFirst[cssIndex];
        return currentCSS
    }

    onRightNow.currentCSS = getCurrentCSS(onRightNow);

    let whatsOn = [];

    let dynamicNextCSS;

    if (nextProgram.hour === hour + 1 || (hour >= 12 && nextProgram.hour === hour + 1 - 12)) {
        dynamicNextCSS = "block four-to-five"
    } else {
        if (nextProgram.length === .5)
            dynamicNextCSS = "block three-to-four"
        else {
            dynamicNextCSS = "block three-to-five"
        }
    }

    let oneProgram = whatsOn = [setProgramBlock(onRightNow.currentCSS, onRightNow.id, onRightNow.name)];

    let twoPrograms = whatsOn = [setProgramBlock(onRightNow.currentCSS, onRightNow.id, onRightNow.name),
    setProgramBlock(dynamicNextCSS, nextProgram.id, nextProgram.name)];

    let threePrograms = whatsOn = [setProgramBlock(onRightNow.currentCSS, onRightNow.id, onRightNow.name),
    setProgramBlock(dynamicNextCSS, nextProgram.id, nextProgram.name),
    setProgramBlock(lastProgram.cssLast, lastProgram.id, lastProgram.name)];

    //when the onRightNow is only a half hour long
    if (hour === onRightNow.timesFirst[0] && onRightNow.length === .5) {
        if (nextProgram.length >= 1) {
            whatsOn = twoPrograms
        } else {
            whatsOn = threePrograms
        }
    } else if (hour === onRightNow.timesFirst[0] && onRightNow.length === 1) {
        whatsOn = twoPrograms
    } else if (hour === onRightNow.timesFirst[0] && onRightNow.length > 1) {
        whatsOn = oneProgram

        //if onRightNow has a second index in timesFirst and thats what time it is...
    } else if (onRightNow.timesFirst[1] && hour === onRightNow.timesFirst[1]) {
        if (onRightNow.length === 2) {
            whatsOn = oneProgram
        } else if (onRightNow.length === 1.5) {
            whatsOn = twoPrograms
        } else if (onRightNow.length === 1) {
            if (nextProgram.length >= 1) {
                whatsOn = twoPrograms
            } else {
                whatsOn = threePrograms
            }
        }
    } else if ((onRightNow.timesFirst[2] && hour === onRightNow.timesFirst[2]) ||
        (onRightNow.timesFirst[3] && hour === onRightNow.timesFirst[3])) {
        if (nextProgram.length >= 1) {
            whatsOn = twoPrograms
        } else {
            whatsOn = threePrograms
        }
    }

    //lift up the proper video ID onClick

    function passId(id) {
        passIdChann(id);
    }

    function sendThePrograms(arr) {
        sendPrograms(arr);
        disableScroll.off();
    }

    return (
        <div ref={containerRef} className={toggleClass ? "channel-strip-container-scroll" : "channel-strip-container-static"}>
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