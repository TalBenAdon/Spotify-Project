import React from 'react'
import MainContent from './MainContent'
import styles from './styles.module.css'
import SongContext from './Context/SongContext'
import { useState } from 'react'
import UserProvider from './Context/UserContext'
import Favorites from './MainContent/Favorites'
import MainLayout from './MainLayout'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Logout from './MainLayout/Header/Logout'

export default function App() {
  const [useSongs, setUseSongs] = useState('')
  const [searchedSong, setSearchedSong] = useState('jazz')



  return (
    <main className={styles.mainGridContainer}>
      <SongContext.Provider value={{ useSongs, setUseSongs, searchedSong, setSearchedSong }}>

        <UserProvider>
          <Routes>

            <Route element={<MainLayout />}>
              <Route index element={<MainContent />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/favorites' element={<Favorites />} />

            </Route>
          </Routes>
        </UserProvider>

      </SongContext.Provider>
    </main >


  )
}
