import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createClothingItem, getClothingTypes, getClothingUses } from "../../managers/ClothingItemManager"
import { getAllKids } from "../../managers/KidManager"
import "./Form.css"


export const CreateClothingItemForm = () => {
    const navigate = useNavigate()
    const [clotheItemTypes, setClotheItemTypes] = useState([])
    const [clotheItemUses, setClotheItemUses] = useState([])
    const [chosenUses, setChosenUses] = useState(new Set())
    const [Kids, setKids] = useState([])

    const [currentClotheItem, updateClotheItem] = useState({
        itemDescription: "",
        clothingType: 0,
        kid: 0,
        size: "",
        cleanOrDirty: true,
        itemFits: true,
        siblingHasMatch: false,
        itemImage: ""
    })

    useEffect(() => {
        getClothingTypes().then(setClotheItemTypes)
    }, [])

    useEffect(() => {
        getAllKids().then(setKids)
    }, [])

    useEffect(() => {
        getClothingUses().then(setClotheItemUses)
    }, [])

    const changeClotheItemState = (evt) => {
        const copy = { ...currentClotheItem }
        copy[evt.target.id] = evt.target.value
        updateClotheItem(copy)
    }

    return (
        <form className="clothingItemForm">
            <h2 className="clothingItemForm__title">Add New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="itemDescription">Description: </label>
                    <input 
                        onChange={changeClotheItemState}
                        required autoFocus 
                        type="text" id="itemDescription" 
                        className="form-control"
                        value= {currentClotheItem.itemDescription} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="clothing_type">Select a Clothing Type: required </label>
                    <select 
                        id="clothingType"
                        name="clothingType"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"clothingType"}>Select a Clothing Type...</option>
                        {
                            clotheItemTypes.map(type => {
                                return <option value={type.id}>{type.type}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="size">Size: </label>
                    <input 
                        onChange={changeClotheItemState}
                        required autoFocus 
                        type="boolean" id="size" 
                        className="form-control"
                        value= {currentClotheItem.size} 
                        placeholder="Enter Size(required field)"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="kid">Select which Kid: required  </label>
                    <select 
                        id="kid"
                        name="kid"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"kid"}>Select which Kid...</option>
                        {
                            Kids.map(kid => {
                                return <option value={kid.id}>{kid.nickname}</option>
                            })
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="clean_or_dirty">Clean or Dirty? </label>
                    <select 
                        id="cleanOrDirty"
                        name="cleanOrDirty"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"cleanOrDirty"}>Select Clean or Dirty...</option>
                        <option value={true}>Clean</option>
                        <option value={false}>Dirty</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_fits">Does it still fit? </label>
                    <select 
                        id="itemFits"
                        name="itemFits"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"itemFits"}>Select Yes or No...</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sibling_has_match">Does a sibling have a matching item? </label>
                    <select 
                        id="siblingHasMatch"
                        name="siblingHasMatch"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"siblingHasMatch"}>Select Yes or No...</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_uses">Select types of uses:</label>
                        {
                            clotheItemUses.map(
                                use => <div>
                                {use.use}
                                <input 
                                    onChange={
                                        (evt) => {
                                            const copy = new Set(chosenUses)
                                            if (evt.target.checked){
                                                copy.add(use.id)
                                            }
                                        else {
                                            copy.delete(use.id)
                                        }
                                        setChosenUses(copy)
                                    }
                                }
                                type="checkbox" /> 
                            </div>
                        )
                    }
                </div>
            </fieldset>


            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const clothe = {
                        itemDescription: currentClotheItem.itemDescription,
                        clothingType: parseInt(currentClotheItem.clothingType),
                        kid: parseInt(currentClotheItem.kid),
                        size: currentClotheItem.size,
                        cleanOrDirty: currentClotheItem.cleanOrDirty,
                        itemFits: currentClotheItem.itemFits,
                        siblingHasMatch: currentClotheItem.siblingHasMatch,
                        itemImage: "",
                        clothingUses: Array.from(chosenUses)
                    }

                    // Send POST request to your API
                    createClothingItem(clothe)
                        .then(() => navigate("/clothingitems"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}