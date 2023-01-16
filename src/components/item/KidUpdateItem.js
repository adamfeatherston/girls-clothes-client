// import { useState, useEffect } from "react"
// import { useNavigate, useParams } from 'react-router-dom'
// import { getClothingTypes, getClothingUses, getSingleClothingItem, updateClothingItem } from "../../managers/ClothingItemManager"
// import { getAllKids } from "../../managers/KidManager"
// import "./Form.css"


// export const KidUpdateClothingItemForm = () => {
//     const navigate = useNavigate()
//     const { clothingItemId } = useParams()
//     const [ itemTypes, setItemTypes ] =useState([])
//     const [ chosenItemType, setChosenItemType ] = useState(0)
//     const [ itemUses, setItemUses ] =useState([])
//     const [ kids, setKids ] = useState([])
//     const [ chosenKid, setChosenKid ] = useState(0)
//     const [ assignedUses, setAssignedUses ] = useState(new Set())

//     const [currentClotheItem, updateClotheItem] = useState({
//         item_description: "",
//         clothing_type: 0,
//         kid: 0,
//         size: "",
//         clean_or_dirty: "",
//         item_fits: "",
//         sibling_has_match: "",
//         item_image: "", 
//         clothing_uses: {}
//     })

//     useEffect(() => {
//         setChosenItemType(currentClotheItem.clothing_type.id)
//     }, [currentClotheItem])

//     useEffect(() => {
//         getClothingTypes().then(setItemTypes)
//     }, [])


//     useEffect(() => {
//         getClothingUses().then(setItemUses)
//     }, [])

//     useEffect(() => {
//         setChosenKid(currentClotheItem.kid.id)
//     }, [currentClotheItem])

//     useEffect(() => {
//         getAllKids().then(setKids)
//     }, [])

//     useEffect(() => {
//         getSingleClothingItem(clothingItemId).then(data => {updateClotheItem(data)
//             const selectedUses = new Set()
//             for (const use of data.clothing_uses) {
//                 selectedUses.add(use.id)
//             }
//             setAssignedUses(selectedUses)
//         })
//     }, [clothingItemId])


//     const changeClotheItemState = (evt) => {
//         var str2bool = (value) => {
//             if (value && typeof value === "string") {
//                 if (value.toLocaleLowerCase() === "true") return true;
//                 if (value.toLocaleLowerCase() === "false") return false;
//         }
//         return value;
//     }
//         const copy = { ...currentClotheItem }
//         copy[evt.target.id] = str2bool(evt.target.value)
//         updateClotheItem(copy)
//     }

//     return (
//         <form className="clothingItemForm">
//             <h2 className="form-group">Edit  Item</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="item_description">Description: </label>
//                     <input 
//                         onChange={changeClotheItemState}
//                         required autoFocus 
//                         type="text" id="item_description" 
//                         className="form-control"
//                         value= {currentClotheItem.item_description} 
//                         placeholder="Item Description (required field)"   
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="clothing_type">Select a Clothing Type: required </label>
//                     <select 
//                         id="clothing_type"
//                         name="clothing_type"
//                         className="form-control"
//                         value = {chosenItemType}
//                         onChange={(evt) => setChosenItemType(evt.target.value)}>
//                         <option className="form-drop"id={"clothing_type"}>Select a Clothing Type...</option>
//                         {
//                             itemTypes.map(type => {
//                                 return <option value={type.id}>{type.type}</option>
//                             })
//                         }
//                     </select>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="size">Size: </label>
//                     <input 
//                         onChange={changeClotheItemState}
//                         required autoFocus 
//                         type="text" id="size" 
//                         className="form-control"
//                         value= {currentClotheItem.size} 
//                         placeholder="Enter Size(required field)"
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="kid">Select which Kid: required  </label>
//                     <select 
//                         id="kid"
//                         name="kid"
//                         className="form-control"
//                         value = {chosenKid}
//                         onChange={(evt) => setChosenKid(evt.target.value)}>
//                         <option className="form-drop"id={"kid"}>Select which Kid...</option>
//                         {
//                             kids.map(kid => {
//                                 return <option value={kid.id}>{kid.nickname}</option>
//                             })
//                         }
//                     </select>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="clean_or_dirty">Clean or Dirty?: </label>
//                     <select 
//                         id="clean_or_dirty"
//                         name="clean_or_dirty"
//                         className="form-control"
//                         value = {currentClotheItem.clean_or_dirty}
//                         onChange={changeClotheItemState}>
//                         <option className="form-drop"id={"clean_or_dirty"}>Select Yes or No...</option>
//                         <option value={true}>Clean</option>
//                         <option value={false}>Dirty</option>
//                     </select>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="item_fits">Does it still fit? </label>
//                     <select 
//                         id="item_fits"
//                         name="item_fits"
//                         className="form-control"
//                         value = {currentClotheItem.item_fits}
//                         onChange={changeClotheItemState}>
//                         <option className="form-drop"id={"item_fits"}>Select Yes or No...</option>
//                         <option value={true}>Yes, still fits</option>
//                         <option value={false}>No, does not fit</option>
//                     </select>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="sibling_has_match">Does a sibling have a matching item? </label>
//                     <select 
//                         id="sibling_has_match"
//                         name="sibling_has_match"
//                         className="form-control"
//                         value = {currentClotheItem.sibling_has_match}
//                         onChange={changeClotheItemState}>
//                         <option className="form-drop"id={"sibling_has_match"}>Select Yes or No...</option>
//                         <option value={true}>Yes, sibling has same</option>
//                         <option value={false}>No, just for this kid</option>
//                     </select>
//                 </div>
//             </fieldset>
//                     <button type="submit"
//                         onClick={evt => {
//                             // Prevent form from being submitted
//                             evt.preventDefault()
        
//                             const clothe = {
//                                 item_description: currentClotheItem.item_description,
//                                 clothing_type: parseInt(chosenItemType),
//                                 kid: parseInt(chosenKid),
//                                 size: currentClotheItem.size,
//                                 clean_or_dirty: currentClotheItem.clean_or_dirty,
//                                 item_fits: currentClotheItem.item_fits,
//                                 sibling_has_match: currentClotheItem.sibling_has_match,
//                                 item_image: "",
//                                 clothing_uses: "",
//                                 id: currentClotheItem.id
//                             }
        
//                             updateClothingItem(clothe)
//                                 .then(() => navigate("/clothingitems"))
//                         }}
//                         className="btn btn-primary">Update Item</button>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="item_uses">You may wear this for:</label>
//                     {
//                     itemUses.clothing_uses.map(
//                     use => <div className="item" key={`use--${use?.use}`}>{use?.use}</div>
//             )
//         }      
//                 </div>
//             </fieldset>


//         </form>
//     )
// }