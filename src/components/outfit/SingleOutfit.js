import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleOutfit } from "../../managers/OutfitManager.js"
import "./Outfit.css"

export const SingleOutfit = () => {
    const { outfitId } = useParams()
    const [details, setDetails] = useState({
        clothing_items: []
    })


    useEffect(
        () => {
            getSingleOutfit(outfitId).then(setDetails)
        },
        [outfitId]
    )

    return <>

        <section className="outfit__header">Outfit Description: {details.outfit_description} </section>
            <div className="outfit">{details.outfit_image}</div>

        <h3>Has the following Items: </h3>
        {
            details.clothing_items.map(
                item => <div className="item" key={`item--${item?.item_description}`}>{item?.item_description}</div>
            )
        }
    </>
}