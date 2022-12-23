import { useState, useEffect } from "react"
import { parsePath, useNavigate } from 'react-router-dom'
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
        item_description: "",
        clothing_type: 0,
        kid: 0,
        size: "",
        clean_or_dirty: true,
        item_fits: true,
        sibling_has_match: false,
        item_image: ""
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
        var str2bool = (value) => {
            if (value && typeof value === "string") {
                if (value.toLocaleLowerCase() === "true") return true;
                if (value.toLocaleLowerCase() === "false") return false;
        }
        return value;
    }
        const copy = { ...currentClotheItem }
        copy[evt.target.id] = str2bool(evt.target.value)
        updateClotheItem(copy)
    }

    return (
        <form className="clothingItemForm">
            <h2 className="clothingItemForm__title">Add New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_description">Description: </label>
                    <input 
                        onChange={changeClotheItemState}
                        required autoFocus 
                        type="text" id="item_description" 
                        className="form-control"
                        value= {currentClotheItem.item_description} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="clothing_type">Select a Clothing Type: required </label>
                    <select 
                        id="clothing_type"
                        name="clothing_type"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"clothing_type"}>Select a Clothing Type...</option>
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
                    <label htmlFor="clean_or_dirty">Clean or Dirty?: </label>
                    <select 
                        id="clean_or_dirty"
                        name="clean_or_dirty"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"clean_or_dirty"}>Select Yes or No...</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="item_fits">Does it still fit? </label>
                    <select 
                        id="item_fits"
                        name="item_fits"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"item_fits"}>Select Yes or No...</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sibling_has_match">Does a sibling have a matching item? </label>
                    <select 
                        id="sibling_has_match"
                        name="sibling_has_match"
                        className="form-control"
                        onChange={changeClotheItemState}>
                        <option className="form-drop"id={"sibling_has_match"}>Select Yes or No...</option>
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
                        item_description: currentClotheItem.item_description,
                        clothing_type: parseInt(currentClotheItem.clothing_type),
                        kid: parseInt(currentClotheItem.kid),
                        size: currentClotheItem.size,
                        clean_or_dirty: currentClotheItem.clean_or_dirty,
                        item_fits: currentClotheItem.item_fits,
                        sibling_has_match: currentClotheItem.sibling_has_match,
                        item_image: "",
                        clothing_uses: Array.from(chosenUses)
                    }

                    // Send POST request to your API
                    createClothingItem(clothe)
                        .then(() => navigate("/clothingitems"))
                }}
                className="btn btn-primary">Add Item</button>
        </form>
    )
}