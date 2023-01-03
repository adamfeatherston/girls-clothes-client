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

        <section className="item__header">Item Description: {details.item_description} </section>
            <div className="item">Belongs to: {details.kid_nickname}</div>
            <div className="item">Size: {details.size}</div>
            <div className="item">Is Clean?: {String(details.clean_or_dirty)}</div>
            <div className="item">Sibling Has Matching Item?: {String(details.sibling_has_match)}</div>
            <div className="item">Does this still fit?: {String(details.item_fits)}</div>
            <div>{details.item_image}</div>

        <h3>Can be used for the following purposes: </h3>
        {
            details.clothing_uses.map(
                use => <div className="item" key={`use--${use?.use}`}>{use?.use}</div>
            )
        }
    </>
}

