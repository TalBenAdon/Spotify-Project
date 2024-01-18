import React, { useContext } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../../Context/UserContext'
import axios from 'axios'
export default function Song({ picture, title, songLength, videoId, song }) {


    const { setFavorites, favorites } = useContext(UserContext)
    const onClickHandle = () => {

        try {

            axios.post('http://localhost:4000/likedsongs/liked', { videoId, title, songLength, picture })
        } catch (error) {
            console.log(error);
        }
    }

    console.log(song);

    return (
        <div className={styles.songContainer}>
            <div className={styles.imgButtonContainer}>

                <img className={styles.songImg} src={picture} alt="song's thumbnail" />
                <button className={styles.addToFavButton} onClick={onClickHandle}>🤍</button>
            </div>
            <div className={styles.songTextContanier}>
                <div className={styles.songTitle}>{title}</div>
                <div className={styles.songLength}>{songLength}</div>
            </div>
        </div>


    )
}
