import React from 'react'
import styles from './styles.module.css'
import Search from './Search'
import Login from '../../Pages/Login'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header className={styles.header}>
            Header
            <Search />
            <NavLink to='/login' className={({ isActive }) => isActive ? styles.active : ""}>Login</NavLink>
            {/* <Logout /> */}
        </header>
    )
}
