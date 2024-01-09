import React from 'react'
import Header from './Header'
import BodyMain from './BodyMain'
import PlayerNavBar from './PlayerNavBar'
import styles from './styles.module.css'


export default function App() {
  return (
    <main className={styles.mainGridContainer}>

      <Header />
      <BodyMain />
      <PlayerNavBar />
    </main>


  )
}
