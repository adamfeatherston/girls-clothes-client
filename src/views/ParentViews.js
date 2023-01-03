import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"
import { CreateClothingItemForm } from "../components/item/CreateClothingItem"
import { MatchingItemList } from "../components/item/MatchingItemList"
import { SingleClothingItem } from "../components/item/SingleClothingItem"
import { UpdateClothingItemForm } from "../components/item/UpdateItem"

export const ParentViews = () => {
    return <>
        <Routes>
            
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<ClothingItemList />} />
            <Route path="/clothingitems/matching" element={<MatchingItemList />} />
            <Route path="/clothingitems/add" element={<CreateClothingItemForm />} />
            <Route path="/clothingitems/:clothingItemId" element={<SingleClothingItem />} />
            <Route path="/clothingitems/edit/:clothingItemId" element={<UpdateClothingItemForm />} />     
        </Routes>
    </>
}