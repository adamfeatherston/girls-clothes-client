import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"
import { CreateClothingItemForm } from "../components/item/CreateClothingItem"
import { MatchingItemList } from "../components/item/MatchingItemList"

export const ParentViews = () => {
    return <>
        <Routes>
            
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<ClothingItemList />} />
            <Route path="/clothingitems/matching" element={<MatchingItemList />} />
            <Route path="/clothingitems/add" element={<CreateClothingItemForm />} />     
        </Routes>
    </>
}