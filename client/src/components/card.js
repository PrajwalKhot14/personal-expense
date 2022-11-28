import React from "react";

export default function Card(){
    return (
        <div className="mx-auto grid items-center justify-items-center gap-14 sm:max-w-xl sm:grid-cols-2 sm:gap-x-0 lg:max-w-4xl lg:grid-cols-3 lg:gap-x-24 xl:max-w-6xl">
   
            <div className="shadow-md flex flex-col items-center gap-3 lg:gap-4 min-w-full ">
            <p className="pc-users text-2xl font-bold lg:text-3xl xl:text-4xl" data-purecounter-duration="0">$5000</p>
            <p className="text-primary-100 lg:text-lg xl:text-xl">Bank Account</p>
            </div>

            <div className="flex flex-col items-center gap-3 lg:gap-4 min-w-full shadow-md ">
            <p className="pc-downloads text-2xl font-bold lg:text-3xl xl:text-4xl" data-purecounter-duration="0">$1000</p>
            <p className="text-primary-100 lg:text-lg xl:text-xl">Credit Balance</p>
            </div>


            <div className="flex flex-col items-center gap-3 lg:gap-4 min-w-full shadow-md ">
            <p className="pc-coffee text-2xl font-bold lg:text-3xl xl:text-4xl" data-purecounter-duration="0">$4000</p>
            <p className="text-primary-100 lg:text-lg xl:text-xl">Difference</p>
            </div>

        
      </div>
    )
}