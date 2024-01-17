import React, { useContext } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../../Context/UserContext'
export default function Song({ picture, title, songLength, videoId, song }) {

    const { setFavorites, favorites } = useContext(UserContext)
    const onClickHandle = () => {
        let favoritedSong = { ...favorites }
        if (favoritedSong[song.videoId]) {

            delete favoritedSong[song.videoId]
        }
        else {
            favoritedSong = { ...favorites, [song.videoId]: song }
        }
        setFavorites(favoritedSong)

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
