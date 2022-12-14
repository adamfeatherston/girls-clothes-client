import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Auth.css"

export const KidRegister = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const nickname = useRef()
    const age = useRef()
    const dressSize = useRef()
    const shoeSize = useRef()
    const shirtSize = useRef()
    const pantSize = useRef()
    const underwearOrDiaperSize = useRef()
    const sockSize = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newKid = {
                "account_type": "kid",
                "username": username.current.value,
                "is_staff": false,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "nickname": nickname.current.value,
                "age": age.current.value,
                "dress_size": dressSize.current.value,
                "shoe_size": shoeSize.current.value,
                "shirt_size": shirtSize.current.value,
                "pant_size": pantSize.current.value,
                "underwear_or_diaper_size": underwearOrDiaperSize.current.value,
                "sock_size": sockSize.current.value,
                "password": password.current.value
            }

            registerUser(newKid)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lu_token", res.token)
                        navigate("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Create a Kid Profile</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset> 
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="nickname"> Profile Image </label>
                    <input ref={nickname} type="text" name="nickname" className="form-control" placeholder="Nickname" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="age"> Medium </label>
                    <input ref={age} type="integer" name="age" className="form-control" placeholder="Age" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="dressSize"> CV </label>
                    <input ref={dressSize} type="text" name="dressSize" className="form-control" placeholder="Dress Size" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="shoeSize"> CV </label>
                    <input ref={shoeSize} type="text" name="shoeSize" className="form-control" placeholder="Shoe Size" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="shirtSize"> CV </label>
                    <input ref={shirtSize} type="text" name="shirtSize" className="form-control" placeholder="Shirt Size" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="pantSize"> CV </label>
                    <input ref={pantSize} type="text" name="pantSize" className="form-control" placeholder="Pant Size" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="underwearOrDiaperSize"> CV </label>
                    <input ref={underwearOrDiaperSize} type="text" name="underwearOrDiaperSize" className="form-control" placeholder="Underwear or Diaper Size" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="sockSize"> CV </label>
                    <input ref={sockSize} type="text" name="sockSize" className="form-control" placeholder="Sock Size" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register as an Artist</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}