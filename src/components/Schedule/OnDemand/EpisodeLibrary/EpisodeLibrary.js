import React from 'react'
import EpisodeListButton from "./EpisodeListButton/EpisodeListButton"
import uniqid from "uniqid"
import "./episode-library.css"

const EpisodeLibrary = ({ episodeList, passId }) => {

    console.log(episodeList);

    let buttons = [];
    let buttonsLeft = [];
    let buttonsRight = [];
    let episodeNumber = "1"

    function passTheId(id) {
        passId(id)
    }

    for (let i = 0; i < episodeList.ids.length; i++) {

        buttons.push(
            <EpisodeListButton
                key={uniqid()}
                episodeNumber={episodeNumber}
                id={episodeList.ids[i]}
                passId={passTheId}
            />
        )
        episodeNumber++
    }

    for (let i = 0; i < buttons.length; i++) {
        //evens
        if (i % 2 === 0) {
            buttonsLeft.push(buttons[i]);

            //odds
        } else {
            buttonsRight.push(buttons[i]);
        }
    }


    console.log(buttons)
    console.log(episodeNumber)

    return (
        <div className="episode-library-container">
            <h2 className="episode-library-name">{episodeList.name}</h2>
            <div className="ep-left">
                {buttonsLeft.map(btn => btn)}
            </div>
            <div className="ep-right">
            {buttonsRight.map(btn => btn)}
            </div>
        </div>
    )
}

export default EpisodeLibrary
