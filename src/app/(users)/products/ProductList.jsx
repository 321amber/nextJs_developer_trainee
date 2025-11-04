"use client"

import { useSearchParams } from "next/navigation"

export const ProductList = ()=>{
    const searchParams = useSearchParams();
    console.log("inside: ", searchParams);
    const catagory = searchParams.get("catagory");
    console.log("inside: ",catagory);
    
    return <>
        <h1>CLient</h1>
    </>
}