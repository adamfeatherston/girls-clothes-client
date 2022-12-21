import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSingleClothingItem } from "../../managers/ClothingItemManager.js"
import "./Item.css"

export const SingleClothingItem = () => {
    const { clothingItemId } = useParams()
    const [details, setDetails] = useState({
        clothing_uses: []
    })
    const navigate = useNavigate()

    useEffect(
        () => {
            getSingleClothingItem(clothingItemId).then(setDetails)
        },
        [clothingItemId]
    )

    return <>
        <div className="itemDetailHeader">
            <h2>{details.description}</h2>
            <button className="btn btn-primary"
                onClick={() => navigate(`/clothingitems/edit/${clothingItemId}`)}
                >Edit this item</button>
        </div>

        <div>Belongs to: {details.kid_nickname}</div>
        <div>Release in the year {details.size}</div>
        <div>Is Clean?: {String(details.clean_or_dirty)}</div>
        <div>Sibling Has Matching Item? {String(details.sibling_has_match)}</div>
        <div>Does this still fit?{String(details.item_fits)}</div>
        <div>{details.item_image}</div>

        <h3>Can be used for the following purposes: </h3>
        {
            details.clothing_uses.map(
                use => <div key={`use--${use?.use}`}>Use: {use?.use}</div>
            )
        }
    </>
}

