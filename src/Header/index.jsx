import React from 'react'
import styles from './styles.module.css'
import Search from './Search'
export default function Header() {
    return (
        <header className={styles.header}>
            Header
            <Search />
        </header>
    )
}
