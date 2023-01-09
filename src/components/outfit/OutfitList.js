import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deleteOutfit, getAllOutfits } from "../../managers/OutfitManager.js"
import "./Outfit.css"

export const OutfitList = () => {
    const [ outfits, setOutfits ] = useState([])
    // const [clean, setClean] = useState(false)

    
    const clothesParentUser = localStorage.getItem("is_staff")
    const clothesUser = JSON.parse(clothesParentUser)
    
    const updateOutfitList = () => {
        getAllOutfits().then(data => setOutfits(data))
    }

    useEffect(() => {
        updateOutfitList()
    }, [])

    // useEffect(
    //     () => {
    //         if (clean) {
    //             const cleanClothes = outfits.filter(outfit => outfit.clean_or_dirty === true)
    //             setOutfits(cleanClothes)
    //         }
    //         else {
    //             updateOutfitList()
    //         }
    //     },
    //     [clean]
    // )

    return (
        <>
        <article className="outfits">
            {
                outfits.map(outfit => {
                    return <>
                    <section key={`outfit--${outfit.id}`} className="outfit">
                        <Link to={`/outfits/${outfit.id}`} className="outfit__header">{outfit.outfit_description}</Link>
                        <div className="outfit">{outfit.outfit_image}</div>

                        {clothesUser
                            ? <button className="buttons"
                                onClick={() => {
                                    deleteOutfit(outfit.id).then(() => updateOutfitList())
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