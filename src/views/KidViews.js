import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"
import { KidItemList } from "../components/item/KidItemList"
import { KidMatchingItemList } from "../components/item/KidMatchingItemList"
import { KidUpdateClothingItemForm } from "../components/item/KidUpdateItem"
import { OutfitList } from "../components/outfit/OutfitList"


export const KidViews = () => {
    return <>
        <Routes>
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<KidItemList />} />
            <Route path="/clothingitems/matching" element={<KidMatchingItemList />} />
            <Route path="/clothingitems/:clothingItemId" element={<KidUpdateClothingItemForm />} />
            <Route path="/outfits" element={<OutfitList />} />
        </Routes>
    </>
}