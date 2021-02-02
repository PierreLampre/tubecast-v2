import React from 'react'
import Header from "./Header/Header"
import Info from "./Info/Info"
import "./info-panel.css"

const InfoPanel = () => {
    return (
        <div className="info-panel-container">
            <Header />
            <Info />
        </div>
    )
}

export default InfoPanel
