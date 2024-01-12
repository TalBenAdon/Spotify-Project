import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import PlayerNavBar from './PlayerNavBar'
export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <NavBar />
            {children}
            <PlayerNavBar />
        </>
    )
}
