import React from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.css'
export default function PlayerNavBar() {
    return (
        <>
            <div className={styles.reactPlayer}>

                <ReactPlayer url='' />
            </div>

            <div className={styles.playerNavBar}>
                PlayerNavBar
            </div>
        </>
    )
}
