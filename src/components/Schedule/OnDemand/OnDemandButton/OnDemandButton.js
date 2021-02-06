import React from 'react'
import "./on-demand-button.css"

const OnDemandButton = ({ name }) => {
    return (
        <button className="on-demand-button">
            {name}
        </button>
    )
}

export default OnDemandButton
