import React from 'react'
import SongsList from './SongsList'
import styles from './styles.module.css';
import NavBar from './NavBar';


export default function BodyMain() {

    return (
        <div >
            Body
            <NavBar />
            <SongsList />
        </div>
    )
}
