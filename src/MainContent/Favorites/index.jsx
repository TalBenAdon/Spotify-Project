import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../Context/UserContext'
export default function Favorites() {
    const { favorites } = useContext(UserContext)

    return (
        <div className={styles.favoritesContainer}>
            {console.log(favorites)}
            {/* {favorites.map(favSong => {
                <div>

                    <img src={favSong.img} alt={favSong.title} />
                    <div>
                        <div>{favSong.title}</div>
                        <div>{favSong.songLength}</div>
                    </div>

                </div>

            })} */}

        </div>
    )
}
