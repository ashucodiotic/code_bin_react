import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
        loading:false,
        error:'',
        productList:[],
        id:"",
        singleData:{},
        productCart:[]
}
const productSlice = createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.productList=action.payload
        },
        setId:(state,action)=>{
            state.id=action.payload
        },
        setSingleData:(state,action)=>{
            state.singleData=action.payload
        },
        setCartData:(state,action)=>{
            state.productCart=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.productList=action.payload
            state.error=''
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.loading=false
            state.productList=[]
            state.error=action.error.message
        })
        builder.addCase(fetchProductId.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProductId.fulfilled,(state,action)=>{
            state.loading=false
            state.singleData=action.payload
            state.error=''
        })
        builder.addCase(fetchProductId.rejected,(state,action)=>{
            state.loading=false
            state.singleData={}
            state.error=action.error.message
        })
    }
    
})


export const fetchProduct=createAsyncThunk(
    'product/getAll', async ()=>{
       return await  axios.get('https://dummyjson.com/products').then((res) =>res.data.products)
    }
)


export const fetchProductId=createAsyncThunk(
    'product/getid', async (id)=>{
       return await  axios.get(`https://dummyjson.com/products/${id}`).then((res) =>res.data)
    }
)

















export const {
    setProduct,
    setId,
    setSingleData,
    setCartData
    
}=productSlice.actions

export default productSlice.reducer