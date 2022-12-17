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