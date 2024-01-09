import React from 'react'

import styles from './styles.module.css';
import NavBar from './NavBar';
import MainContent from './MainContent';


export default function BodyMain() {

    return (
        <div className={styles.bodyMainContainer} >

            <NavBar />
            <MainContent />
        </div>
    )
}
