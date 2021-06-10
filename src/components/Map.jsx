import React, { Component } from 'react'

function Map(){
    const post = [
        {
            title: "Primer posteo",
            body: "Mi primer objeto",
            id: 1,
        },
        {
            title: "Segundo posteo",
            body: "Mi segundo objeto",
            id: 2,
        },
    ];


    return (
        <div>
            {
                post.map((post, index) =>{ return <p id={index}>{post.title}</p> })
            }
        </div>
    )
}

export default Map