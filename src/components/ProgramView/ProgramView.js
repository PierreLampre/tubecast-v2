import React from 'react'
import "./program-view.css"

const ProgramView = ({ yt_id }) => {

    return (
        <div className="program-view-container">
            <iframe className="yt-embed" title="television" src={`https://www.youtube.com/embed/${yt_id}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default ProgramView
