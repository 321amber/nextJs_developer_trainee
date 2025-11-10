"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DatafetchServer = ()=>{
    const [data, setData] = useState({});
    const searchParams = useSearchParams();
    const username = searchParams.get("name");

    useEffect(()=>{
        const revealsUserGender = async ()=>{
                const res = await fetch(`https://api.genderize.io/?name=${username}`);
                const userData = await res.json();
                console.log(userData);
                setData(userData);
        };
        revealsUserGender();
    }, [])

    
    if(!username){
        return(
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6">
<div className="w-full max-w-md">
<div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold">
    <h2>No name provided</h2>
    <p>Please add the username to the url</p>
</div>
</div>
</div>
</div>
</div>
      )
       }
    return (
        <div>
    <h1>data fetching {data.name}</h1>
    <p>gender: {data.gender}</p>
    <p>confidential Percantage: {data.probability * 100}</p>
    </div>
    )
}
export default DatafetchServer;