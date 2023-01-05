import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleKid } from "../../managers/KidManager.js"
import "./KidList.css"

export const SingleKid = () => {
    const { kidId } = useParams()
    const [details, setDetails] = useState({})
    const navigate = useNavigate()

    useEffect(
        () => {
            getSingleKid(kidId).then(setDetails)
        },
        [kidId]
    )

    return <>
        <div className="itemDetailHeader">
            <h2>{details.nickname}: Age {details.age}</h2>
            <button className="btn btn-primary"
                onClick={() => navigate(`/kids/edit/${kidId}`)}
                >Edit Kid Attributes</button>
        </div>

        <section className="item__header">Clothing Sizes: </section>
            <div className="item">Dress: {details.dress_size}</div>
            <div className="item">Shirt: {details.shirt_size}</div>
            <div className="item">Pants: {details.pant_size}</div>
            <div className="item">Underwear/Diaper: {details.underwear_or_diaper_size}</div>
            <div className="item">Socks: {details.sock_size}</div>
            <div className="item">Shoe: {details.shoe_size}</div>
            <div>{details.item_image}</div>

    </>
}