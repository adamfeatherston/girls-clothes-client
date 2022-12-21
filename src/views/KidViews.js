import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"
import { MatchingItemList } from "../components/item/MatchingItemList"
import { SingleClothingItem } from "../components/item/SingleClothingItem"

export const KidViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<ClothingItemList />} />
            <Route path="/clothingitems/matching" element={<MatchingItemList />} />
            <Route path="/clothingitems/:clothingItemId" element={<SingleClothingItem />} />
        </Routes>
    </>
}