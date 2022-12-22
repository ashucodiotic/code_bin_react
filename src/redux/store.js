import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "./service/productService"
import AuthSclice from "./slice/AuthSclice"
import productSlice from "./slice/ProductSlice"

export const store=configureStore({
    reducer:{
        product:productSlice,
        auth:AuthSclice
        // [productApi.reducerPath]:productApi.reducer
    },

    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: true,
    // })
    //   .concat([
    //     productApi.middleware,
       
    //   ]),
})