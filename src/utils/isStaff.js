export const isStaff = () => {
    const auth = localStorage.getItem("clothesuser")
    const userType = JSON.parse(auth)
    return userType?.staff
}