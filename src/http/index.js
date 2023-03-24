import axios from "axios"
// require("dotenv").config()
// import process from "dotenv"

const api= axios.create(
    {
        baseURL:"http://localhost:3004",
        withCredentials:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
        },

    }
)

// console.log(process.env.REACT_APP_API_URL)

// list of all the end points

export const verifyNumber = async (data)=>{
    const res= await api.post("/api/verify-phone",data)
    return res
}

export const activate = async (data)=>{
    const res= await api.post("/api/activate",data)
    return res
}


export default api
