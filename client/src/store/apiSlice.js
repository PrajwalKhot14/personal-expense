import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURI}),
    endpoints: builder =>({
        // GET categories
        getCategories: builder.query({
            //GET: 'http://localhost:8080/api/categories'
            query:()=>'/api/categories',
            providesTags:['categories']
        }),
        getBanks: builder.query({
            //GET: 'http://localhost:8080/api/bank'
            query:()=>'/api/bank',
            providesTags:['bank']
        }),
        
        // GET labels
        getLabels: builder.query({
            //GET: 'http://localhost:8080/api/labels'
            query:() => '/api/labels',
            providesTags:['transactions']
        }),

        // add new Transaction
        addTransaction:builder.mutation({
            query:(initialTransaction)=>({
                // post: 'http://localhost:8080/api/transaction'
                url:'/api/transaction',
                method:"POST",
                body:initialTransaction
            }),
            invalidatesTags:['transaction']
        }),

        //delete Record
        deleteTransaction:builder.mutation({
            query:recordId=>({
                // delete: 'http://localhost:8080/api/transaction'
                url:'/api/transaction',
                method:"DELETE",
                body:recordId
            }),
            invalidatesTags:['transaction']
        })

    })
})

export default apiSlice;