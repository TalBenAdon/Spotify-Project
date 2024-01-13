import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import PlayerNavBar from './PlayerNavBar'
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
    return (
        <>
            <Header />
            <NavBar />
            <PlayerNavBar />
            <Outlet />
        </>
    )
}
