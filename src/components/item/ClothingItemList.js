import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { deleteClothingItem, getClothingItems, getClothingTypes } from "../../managers/ClothingItemManager.js"
import "./Item.css"

export const ClothingItemList = () => {
    const [ items, setItems ] = useState([])
    const [ types, setTypes ] = useState([])
    const [clean, setClean] = useState(false)
    const navigate = useNavigate();
    
    const clothesParentUser = localStorage.getItem("is_staff")
    const clothesUser = JSON.parse(clothesParentUser)
    
    const updateClothingItemList = () => {
        getClothingItems().then(data => setItems(data))
    }

    const filterClothingType = () =>  {
        getClothingTypes().then(data => setTypes(data));
    }

    useEffect(() => {
        getClothingTypes().then(setTypes)
    }, [])

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
        <section className="button_area">
            <div className="button_item">
                <label htmlFor="type">Filter by Type:</label>
                    <select 
                        id="type"
                        name="type"
                        className="button_item"
                        onChange={filterClothingType}>
                        <option className="form-drop"id={"type"}>Filter by Type...</option>
                        {
                            types.map(type => {
                                return <option value={type.id}>{type.type}</option>
                            })
                        }
                    </select>
            </div>
            <div className="button_item">
                <button className="buttons"
                    onClick={() => {
                        navigate({ pathname: "/clothingitems/matching" })
                    }}
                    >Matching Items</button>
            </div>
            <div className="button_item">
                <button className="buttons" onClick={() => {
                    setClean(!clean)
                }} >
                    {
                        clean
                            ? "Show All Clothes"
                            : "Clean Clothes Only"
                    } </button>
            </div>
        </section>
        <article className="items">
            {
                items.map(item => {
                    return <>
                    <section key={`item--${item.id}`} className="item">
                        <Link to={`/clothingitems/${item.id}`} className="item__header">{item.item_description}</Link>
                        <div className="item_info">Item Type: {item.item_type}</div>
                        <div className="item_info">Belongs to: {item.kid_nickname}</div>

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