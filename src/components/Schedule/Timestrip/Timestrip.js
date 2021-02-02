import React from 'react'
import "./timestrip.css";

const Timestrip = () => {
    return (
        <div className="timestrip-container">
            <div className="txt-box today">
                <h3 className="today-h3">Today</h3>
            </div>
            <div className="txt-box time-1">
                <h3 className="today-h3">4:30a</h3>
            </div>
            <div className="txt-box time-2">
                <h3 className="today-h3">5:00a</h3>
            </div>
            <div className="txt-box time-3">
                <h3 className="today-h3">5:30a</h3>
            </div>
        </div>
    )
}

export default Timestrip
