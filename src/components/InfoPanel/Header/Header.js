import React from 'react'
import TV_G from "./img/tvg-logo.png"
import "./header.css"

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo"><h1>Tubecast</h1></div>
            <div className="clock-box">
                <p>TV Listings</p>
                <div className="clock-and-mail">
                    <p>*</p>
                    <p>4:35am</p>
                </div>
            </div>
            <div className="tv-guide">
                <img src={TV_G} alt="" className="src"/>
            </div>
        </div>
    )
}

export default Header
