import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'
export default function NavBar() {

    return (
        <div className={styles.NavBar}>
            <ul className={styles.navBarUl}>
                <li className={styles.navBarLi}><NavLink to={'/'} className={({ isActive }) => isActive ? styles.active : ""}>
                    Home</NavLink></li>
                <li className={styles.navBarLi}><NavLink to={'/favorites'} className={({ isActive }) => isActive ? styles.active : ""}>
                    Favorites</NavLink></li>
                <li className={styles.navBarLi}><NavLink to={'/playList'} className={({ isActive }) => isActive ? styles.active : ""}>
                    PlayList</NavLink></li>
            </ul>
        </div>
    )
}
