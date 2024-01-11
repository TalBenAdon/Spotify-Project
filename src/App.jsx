import React from 'react'
import Header from './Header'
import BodyMain from './BodyMain'
import PlayerNavBar from './PlayerNavBar'
import styles from './styles.module.css'

import SongContext from './Context/SongContext'
import { useState } from 'react'

export default function App() {
  const [useSongs, setUseSongs] = useState('')
  const [searchedSong, setSearchedSong] = useState('jazz')



  return (
    <main className={styles.mainGridContainer}>
      <SongContext.Provider value={{ useSongs, setUseSongs, searchedSong, setSearchedSong }}>

        <Header />
        <BodyMain />
        <PlayerNavBar />
      </SongContext.Provider>
    </main>


  )
}
