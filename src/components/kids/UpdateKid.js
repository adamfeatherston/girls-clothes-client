import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleKid, updateKidDetails } from "../../managers/KidManager"
import "./Form.css"


export const UpdateKidForm = () => {
    const navigate = useNavigate()
    const { kidId } = useParams()

    const [currentKid, updateKid] = useState({
        nickname: "",
        age: "",
        dress_size: "",
        shoe_size: "",
        shirt_size: "",
        pant_size: "",
        underwear_or_diaper_size: "",
        sock_size: ""
    })

    useEffect(() => {
        getSingleKid(kidId).then(data => {updateKid(data)

        })
    }, [kidId])


    const changeKidState = (evt) => {
        const copy = { ...currentKid }
        copy[evt.target.id] = (evt.target.value)
        updateKid(copy)
    }

    return (
        <form className="clothingItemForm">
            <h2 className="form-group">Edit Kid Attributes</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="nickname">Nickname: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="nickname" 
                        className="form-control"
                        value= {currentKid.nickname} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age">Age: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="age" 
                        className="form-control"
                        value= {currentKid.age} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dress_size">Dress Size: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="dress_size" 
                        className="form-control"
                        value= {currentKid.dress_size} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="shirt_size">Shirt Size: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="shirt_size" 
                        className="form-control"
                        value= {currentKid.shirt_size} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="pant_size">Pants Size: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="pant_size" 
                        className="form-control"
                        value= {currentKid.pant_size} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="underwear_or_diaper_size">Underwear/Diaper Size: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="underwear_or_diaper_size" 
                        className="form-control"
                        value= {currentKid.underwear_or_diaper_size} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="sock_size">Sock Size: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="sock_size" 
                        className="form-control"
                        value= {currentKid.sock_size} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="shoe_size">Shoe Size: </label>
                    <input 
                        onChange={changeKidState}
                        required autoFocus 
                        type="text" id="shoe_size" 
                        className="form-control"
                        value= {currentKid.shoe_size} 
                        placeholder="Item Description (required field)"   
                    />
                </div>
            </fieldset>
                    <button type="submit"
                        onClick={evt => {
                            // Prevent form from being submitted
                            evt.preventDefault()
        
                            const kid = {
                                nickname: currentKid.nickname,
                                age: currentKid.age,
                                dress_size: currentKid.dress_size,
                                shoe_size: currentKid.shoe_size,
                                shirt_size: currentKid.shirt_size,
                                pant_size: currentKid.pant_size,
                                underwear_or_diaper_size: currentKid.underwear_or_diaper_size,
                                sock_size: currentKid.sock_size,
                                id: currentKid.id
                            }
        
                            updateKidDetails(kid)
                                .then(() => navigate("/kids"))
                        }}
                        className="btn btn-primary">Update Attributes</button>
        </form>
    )
}