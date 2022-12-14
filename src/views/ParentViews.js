import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { ParentRegister } from "../components/auth/ParentRegister"
import { Authorized } from "./Authorized"
import { ClothingItemList } from "../components/item/ClothingItemList"



export const ParentViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<ParentRegister />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<ClothingItemList />} />
                
            </Route>
        </Routes>
    </>
}