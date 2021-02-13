import React, { useState } from 'react'
import "./timestrip.css";

const Timestrip = ({ timeDigit, ampm, scrollToggs }) => {

    const [btnBool, setBtnBool] = useState(true);

    let hourDigit;
    let shortAP = ampm.slice(0, 1);
    let first_zeroesOrThirty;

    //logic to make sure UI displays right time blocks at 
    //every possible time.

    if (timeDigit.length === 4) {
        hourDigit = parseInt(timeDigit.slice(0, 1));
        if (parseInt(timeDigit.slice(2, 3)) >= 3) {
            first_zeroesOrThirty = "30";
        } else {
            first_zeroesOrThirty = "00"
        }
    }

    if (timeDigit.length === 5) {
        hourDigit = parseInt(timeDigit.slice(0, 2));
        if (hourDigit === 12) {

        }
        if (parseInt(timeDigit.slice(3, 4)) >= 3) {
            first_zeroesOrThirty = "30";
        } else {
            first_zeroesOrThirty = "00"
        }
    }

    let btnProps = {
        init: "STOP",
        alternate: "AUTOSCROLL"
    }

    function toggleButtonString(bool) {

        scrollToggs();

        if (bool === true) {
            setBtnBool(false)
        } else {
            setBtnBool(true)
        }
        console.log("clicked")
    }


    return (
        <div className="timestrip-container">
            <div className="txt-box today">
                <button
                    className="scroll-toggle"
                    onClick={() => toggleButtonString(btnBool)}
                >
                    {btnBool ? btnProps.init : btnProps.alternate}</button>
            </div>
            <div className="txt-box time-1">
                <h3 className="today-h3">{hourDigit}:{first_zeroesOrThirty}{shortAP}</h3>
            </div>
            <div className="txt-box time-2">
                <h3 className="today-h3">
                    {first_zeroesOrThirty === "00" ? hourDigit : hourDigit !== 12 ? hourDigit + 1 : hourDigit - 11}
                    :
                    {first_zeroesOrThirty === "00" ? "30" : "00"}
                    {shortAP}
                </h3>
            </div>
            <div className="txt-box time-3">
                <h3 className="today-h3">
                    {hourDigit !== 12 ? hourDigit + 1 : hourDigit - 11}
                    :
                    {first_zeroesOrThirty === "00" ? "00" : "30"}
                    {shortAP}
                </h3>
            </div>
        </div>
    )
}

export default Timestrip
