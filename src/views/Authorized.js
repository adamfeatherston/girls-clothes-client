import { Navigate, Outlet } from "react-router-dom"
import { KidNavBar } from "../components/nav/KidNav"
import { ParentNavBar } from "../components/nav/ParentNav"
import { KidViews } from "./KidViews"
import { ParentViews } from "./ParentViews"

export const Authorized = () => {

    const clothesParentUser = localStorage.getItem("is_staff")
    const clothesUser = JSON.parse(clothesParentUser)
    
    if (localStorage.getItem("clothes_token") && clothesUser) {
        return  <>
                    <Outlet />
                    <ParentNavBar />
                    <ParentViews />
                </>
    }
    else if (localStorage.getItem("clothes_token") && !clothesUser) {
        return  <>
                    <Outlet />
                    <KidNavBar />
                    <KidViews />
                </>
    }
return <Navigate to='/login' replace />
}