import React from 'react'
import BodyMain from './BodyMain'
import styles from './styles.module.css'
import SongContext from './Context/SongContext'
import { useState } from 'react'
import UserProvider from './Context/UserContext'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
export default function App() {
  const [useSongs, setUseSongs] = useState('')
  const [searchedSong, setSearchedSong] = useState('jazz')



  return (
    <main className={styles.mainGridContainer}>
      <SongContext.Provider value={{ useSongs, setUseSongs, searchedSong, setSearchedSong }}>

        <UserProvider>
          <Routes>
            <Route element={<MainLayout />}>

              <Route index element={<BodyMain />} />



            </Route>

          </Routes>
        </UserProvider>

      </SongContext.Provider>
    </main>


  )
}
