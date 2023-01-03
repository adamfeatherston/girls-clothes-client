import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteClothingItem, getMatchingItems, } from "../../managers/ClothingItemManager.js"
import "./Item.css"

export const MatchingItemList = (props) => {
    const [ items, setItems ] = useState([])
    const [clean, setClean] = useState(false)
    const navigate = useNavigate();
    
    const clothesParentUser = localStorage.getItem("is_staff")
    const clothesUser = JSON.parse(clothesParentUser)
    
    const updateClothingItemList = () => {
        getMatchingItems().then(data => setItems(data))
    }

    useEffect(() => {
        updateClothingItemList()
    }, [])

    useEffect(
        () => {
            if (clean) {
                const cleanClothes = items.filter(item => item.clean_or_dirty === true)
                setItems(cleanClothes)
            }
            else {
                updateClothingItemList()
            }
        },
        [clean]
    )


    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/clothingitems" })
                }}
            >All Items</button>
            <button className="buttons" onClick={() => {
                setClean(!clean)
            }} >
                {
                    clean
                        ? "Show All Clothes"
                        : "Clean Clothes Only"
                } </button>
        <article className="items">
            {
                items.map(item => {
                    return <>
                    <section key={`item--${item.id}`} className="item">
                        <Link to={`/clothingitems/${item.id}`} className="item__header">Item Description: {item.item_description}</Link>
                        <div className="item">Item Type: {item.item_type}</div>
                        <div className="item">Belongs to: {item.kid_nickname}</div>
                        {clothesUser
                            ? <button className="buttons"
                                onClick={() => {
                                    deleteClothingItem(item.id).then(() => updateClothingItemList())
                                }}>Remove this Item</button>
                            : ""
                        }
                    </section>
                    </>
                })
            }
        </article>
        </>
    )
}