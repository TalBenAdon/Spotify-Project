import React from 'react'

export default function Song({ picture, title, songLength, videoId }) {
    return (
        <>
            <img src={picture} alt="song's thumbnail" />
            <div>{title}</div>
            <div>{songLength}</div>
        </>


    )
}
