import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: `https://dummyjson.com/` }),
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: () => ({
                url: "products",
                method: "GET",
               
            })
        }),

    })

})

export const { useGetAllProductQuery
    } = productApi