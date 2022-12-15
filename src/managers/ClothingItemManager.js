export const getClothingItems = () => {
    return fetch("http://localhost:8000/clothingitems", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}

export const getMatchingItems = () => {
    return fetch("http://localhost:8000/clothingitems?siblingMatch=True", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteClothingItem = (id) => {
    return fetch(`http://localhost:8000/clothingitems/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
        })
}
