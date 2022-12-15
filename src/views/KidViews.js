import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"
import { MatchingItemList } from "../components/item/MatchingItemList"

export const KidViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<ClothingItemList />} />
            <Route path="/clothingitems/matching" element={<MatchingItemList />} />
        </Routes>
    </>
}