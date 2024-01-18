import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../Context/UserContext'
import axios from 'axios'
import Login from '../../Pages/Login'
export default function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        try {
            axios.get('http://localhost:4000/likedsongs/liked')
                .then(res =>
                    setFavorites(res.data)
                )
        } catch (error) {
            console.log(error);
        }
    }, [])
    console.log(favorites);
    return (
        <div className={styles.favoritesContainer}>



        </div>
    )
}
