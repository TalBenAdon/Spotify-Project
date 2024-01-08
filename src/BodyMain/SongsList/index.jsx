import React, { useEffect, useState } from 'react'
import Song from '../Song'
import SongsData from './songs.json'
import ReactPlayer from 'react-player'
import axios from 'axios';
export default function SongsList() {
    const [useSong, setUseSong] = useState('')
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: {
                query: 'Kaikai Kitan',
                type: 'video'
            },
            headers: {
                'X-RapidAPI-Key': '6fcdcf86b9msh60a6aef065a2214p1e2358jsne972a8c0cf1d',
                'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        axios.get(options)
            .then(respond => console.log(respond))
    }, [])
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