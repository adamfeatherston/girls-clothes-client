import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const KidNavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <Link className="nav-link" to="/clothingitems">Item List</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/outfits">Outfit List</Link>
            </li>
            {/* <li className="navbar__item">
                Navigation link
            </li> */}
            {
                (localStorage.getItem("clothes_token") !== null) ?
                    <li className="nav-item">
                        <button className="btn"
                            onClick={() => {
                                localStorage.removeItem("clothes_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}