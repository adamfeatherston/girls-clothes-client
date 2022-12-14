import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { KidRegister } from "../components/auth/KidRegister"
import { Authorized } from "./Authorized"
import { ClothingItemList } from "../components/item/ClothingItemList"



export const KidViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<KidRegister />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<ClothingItemList />} />
                
            </Route>
        </Routes>
    </>
}