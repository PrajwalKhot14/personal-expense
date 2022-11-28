import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints: builder =>({
        // GET categories
        getCategories: builder.query({
            //GET: 'http://localhost:8080/api/categories'
            query:()=>'/api/categories'
        }),
        // GET labels
        getLabels: builder.query({
            //GET: 'http://localhost:8080/api/labels'
            query:() => '/api/labels'
        }),
        // add new Transaction
        addTransaction:builder.mutation({
            query:(initialTransaction)=>({
                url:'/api/transaction',
                method:"POST",
                body:initialTransaction
            })
        }),

        //delete Record
        deleteTransaction:builder.mutation({
            query:recordId=>({
                url:'/api/transaction',
                method:"DELETE",
                body:recordId
            })
        })
    })
})

export default apiSlice;