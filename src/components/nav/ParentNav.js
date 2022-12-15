import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ParentNavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <Link className="nav-link" to="/clothingitems">Item List</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/clothingitems/new">Create Item</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/outfits">Outfit List</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/outfits/new">Create Outfit</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/kids">Kid List</Link>
            </li>
            {
                (localStorage.getItem("clothes_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
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