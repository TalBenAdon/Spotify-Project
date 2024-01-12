import React from 'react'
import styles from './styles.module.css'
import Search from './Search'
import Login from './Login'
import Logout from './Logout'
export default function Header() {
    return (
        <header className={styles.header}>
            Header
            <Search />
            <Login />
            <Logout />
        </header>
    )
}
