import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"",
    avatar:""
}

export const activateSlice = createSlice({
    name:"activate",
    initialState,
    reducers:{
        setName:(state,action)=>{
            state.name=action.payload

        },
        setAvatar:(state,action)=>{
            state.avatar=action.payload
        }
    }
})

// export const [setAuth] = authSlice.actions
// export default authSlice.reducer



