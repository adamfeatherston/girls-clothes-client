export const getAllOutfits = () => {
    return fetch("http://localhost:8000/outfits", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleOutfit = (id) => {
    return fetch(`http://localhost:8000/outfits/${id}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteOutfit = (id) => {
    return fetch(`http://localhost:8000/outfits/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
        })
}

export const createOutfit = (outfit) => {
    return fetch("http://localhost:8000/outfits", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        },
        body: JSON.stringify(outfit)
    })
        .then(response => response.json())
}