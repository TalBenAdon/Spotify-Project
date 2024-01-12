import React from 'react'
import { useContext } from 'react'
import SongContext from '../../../Context/SongContext'

export default function Search() {

    const { setSearchedSong } = useContext(SongContext)

    const handleSearch = (event) => {
        setSearchedSong(event.target.value)
    }


    return (
        <div>
            <input type="text" name='Search' onChange={handleSearch} placeholder='Search:' />
        </div>
    )
}
