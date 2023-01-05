export const getAllKids = () => {
    return fetch("http://localhost:8000/kids", {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}

export const updateKidDetails = (kid) => {
    return fetch(`http://localhost:8000/kids/${kid.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        },
        body: JSON.stringify(kid)
    })
}

export const getSingleKid = (id) => {
    return fetch(`http://localhost:8000/kids/${id}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("clothes_token")}`
        }
    })
        .then(response => response.json())
}
