import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Authorized } from "./Authorized"
import { ParentRegister } from "../components/auth/ParentRegister"
import { KidRegister } from "../components/auth/KidRegister"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registerparent" element={<ParentRegister />} />
            <Route path="/registerkid" element={<KidRegister />} />
            <Route path="/*" element={<Authorized />}>
            </Route>
        </Routes>
    </>
}