import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState={
        loading:false,
        error:'',
        status:false,
        message:'',
        user:{}
       
}
const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
       
        builder.addCase(fetchRegister.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchRegister.fulfilled,(state,action)=>{
            state.loading=false
            state.status=action.payload
            state.error=''
        })
        builder.addCase(fetchRegister.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
    
})

export const fetchRegister=createAsyncThunk(
    'auth/register', async (value)=>{
       return await  axios.post(`http://192.168.1.19:3005/codebin/register`,value).then((res) =>res.data.status)
     
    }
)


export default authSlice.reducer