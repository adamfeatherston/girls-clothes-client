import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteItem, getItems } from "../../managers/ClothingItemManager.js"
import "./EventList.css"

export const ClothingItemList = (props) => {
    const [ items, setItems ] = useState([])
    const navigate = useNavigate();
    
    
    const updateClothingItemList = () => {
        getItems().then(data => setItems(data))
    }

    useEffect(() => {
        updateClothingItemList()
    }, [])


    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/items/new" })
                }}
            >Add New Item</button>
        <article className="items">
            {
                items.map(item => {
                    return <>
                    <section key={`item--${item.id}`} className="item">
                        <Link to={`/items/edit/${item.id}`} className="item__header">Item Description: {item.item_description}</Link>
                        <div className="item">Item Type: {item.item_type}</div>
                        <div className="item">Size: {item.size}</div>
                        <div className="item">Does it still fit?: {item.item_fits}</div>
                        <div className="item">Sibling have a match?: {item.sibling_has_match}</div>
                        <div className="item">Belongs to: {item.kid_nickname}</div>
                    </section>
                    <button className="buttons"
                            onClick={() => {
                                deleteItem(item.id).then(() => updateClothingItemList())
                            }}>Remove this Item</button>
                    </>
                })
            }
        </article>
        </>
    )
}