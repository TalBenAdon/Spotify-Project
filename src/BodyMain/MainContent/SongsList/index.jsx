import React, { useContext, useEffect, useState } from 'react'
import Song from './Song'
import axios from 'axios'
import SongContext from '../../../Context/SongContext'


export default function SongsList() {
    const { useSongs } = useContext(SongContext)
    console.log(useSongs);

    const renderedSongs = [...useSongs]

    return (
        <div>
            {renderedSongs.map(song => {
                return <Song picture={song.thumbnail[0].url} title={song.title} songLength={song.lengthText} videoId={song.videoId} />
            })}


        </div>
    )
}


// REMEMBER WHAT ZVI DID WITH THE GIRL IN FRONT OF ME. AXIOS.REQUEST(OPTIONS) AND THEN DATA WITHIN DATA.