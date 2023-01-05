import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllKids } from "../../managers/KidManager.js"
import "./KidList.css"

export const KidList = () => {
    const [ kids, setKids ] = useState([])
    
    
    const updateKidList = () => {
        getAllKids().then(data => setKids(data))
    }

    useEffect(() => {
        updateKidList()
    }, [])

    return (
        <>
        <article className="kids">
            {
                kids.map(kid => {
                    return <>
                    <section key={`kid--${kid.id}`} className="kid">
                        <Link to={`/kids/${kid.id}`} className="item__header">{kid.nickname}</Link>
                        <div className="kid">Age: {kid.age}</div>
                    </section>
                    </>
                })
            }
        </article>
        </>
    )
}