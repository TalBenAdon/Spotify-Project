import React, { useEffect, useState } from 'react'
import Song from '../Song'
import SongsData from './songs.json'
import ReactPlayer from 'react-player'
import axios from 'axios';
export default function SongsList() {
    const [useSong, setUseSong] = useState('')


    return (
        <div>
            <ReactPlayer url={useSong} />
            {SongsData.map(track => {
                return <Song setUseSong={setUseSong} />

            })}
        </div>
    )
}


// REMEMBER WHAT ZVI DID WITH THE GIRL IN FRONT OF ME. AXIOS.REQUEST(OPTIONS) AND THEN DATA WITHIN DATA.