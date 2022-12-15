export const isStaff = () => {
    const auth = localStorage.getItem("clothes_token")
    const userType = JSON.parse(auth)
    return userType?.staff
}