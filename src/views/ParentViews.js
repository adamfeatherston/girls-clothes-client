import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"

export const ParentViews = () => {
    return <>
        <Routes>
            
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<ClothingItemList />} />
                
        </Routes>
    </>
}