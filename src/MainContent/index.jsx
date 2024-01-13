import React, { useContext, useEffect } from 'react'
import styles from './styles.module.css'
import SongsList from './SongsList'
import axios from 'axios';
import SongContext from '../Context/SongContext';
export default function MainContent() {
    const { setUseSongs, searchedSong } = useContext(SongContext)
    console.log(searchedSong);
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://yt-api.p.rapidapi.com/search',
            params: {
                query: searchedSong ? searchedSong : "javascript"
            },
            headers: {
                'X-RapidAPI-Key': '6fcdcf86b9msh60a6aef065a2214p1e2358jsne972a8c0cf1d',
                'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
            }
        };

        try {
            const response = axios.request(options)
            response.then(res => {
                const filteredSongs = res.data.data.filter(data => {
                    return data.type === 'video'
                })
                setUseSongs(filteredSongs)
            })

        } catch (error) {
            console.error(error);
        }
    }, [searchedSong])

    return (
        <div className={styles.MainContent}>
            <SongsList />
        </ div>
    )
}
