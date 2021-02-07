import React from 'react'
import "./episode-list-button.css"

const EpisodeListButton = ({ episodeNumber, id, passId }) => {

    function passTheId(id) {
        passId(id)
    }

    return (
        <button
            className="episode-list-button"
            onClick={() => passTheId(id)}
        >
            Episode{" " + episodeNumber}
        </button>
    )
}

export default EpisodeListButton
