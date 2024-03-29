import { Route, Routes } from "react-router-dom"
import { ClothingItemList } from "../components/item/ClothingItemList"
import { CreateClothingItemForm } from "../components/item/CreateClothingItem"
import { MatchingItemList } from "../components/item/MatchingItemList"
import { SingleClothingItem } from "../components/item/SingleClothingItem"
import { UpdateClothingItemForm } from "../components/item/UpdateItem"
import { KidList } from "../components/kids/KidList"
import { SingleKid } from "../components/kids/SingleKid"
import { UpdateKidForm } from "../components/kids/UpdateKid"
import { CreateOutfitForm } from "../components/outfit/CreateOutfit"
import { OutfitList } from "../components/outfit/OutfitList"
import { SingleOutfit } from "../components/outfit/SingleOutfit"

export const ParentViews = () => {
    return <>
        <Routes>
            
            <Route path="/" element={<ClothingItemList />} />
            <Route path="/clothingitems" element={<ClothingItemList />} />
            <Route path="/clothingitems/matching" element={<MatchingItemList />} />
            <Route path="/clothingitems/add" element={<CreateClothingItemForm />} />
            <Route path="/clothingitems/:clothingItemId" element={<SingleClothingItem />} />
            <Route path="/clothingitems/edit/:clothingItemId" element={<UpdateClothingItemForm />} />
            <Route path="/kids" element={<KidList />} />
            <Route path="/kids/:kidId" element={< SingleKid />} />
            <Route path="/kids/edit/:kidId" element={< UpdateKidForm />} /> 
            <Route path="/outfits" element={<OutfitList />} />
            <Route path="/outfits/:outfitId" element={< SingleOutfit />} />
            {/* <Route path="/outfits/add" element={<CreateOutfitForm />} />      */}
        </Routes>
    </>
}