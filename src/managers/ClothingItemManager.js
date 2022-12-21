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

export const getSingleClothingItem = (id) => {
    return fetch(`http://localhost:8000/clothingitems/${id}`, {
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

export const getClothingTypes = () => {
    return fetch("http://localhost:8000/clothingtypes", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}

export const createClothingItem = (clothe) => {
    return fetch('http://localhost:8000/clothingitems', {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        },
        body: JSON.stringify(clothe)
    })
        .then(response => response.json())
}

export const getClothingUses = () => {
    return fetch("http://localhost:8000/clothinguses", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}