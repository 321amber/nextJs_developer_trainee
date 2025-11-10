import DataCard from "./DataCard";
import {Suspense} from "react";

const DatafetchServer = async (props)=>{
       const searchParams = await props.searchParams;
    const username = searchParams.name;

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
        <div className="grid grid-cols-2 h-full gap-3">
            <div className="h-full flex justify-center items-center">
                This component is defining suspense not for full loading list this part will be static, loading part will appear somewhere.
            </div>
            <Suspense fallback={<div>Loading...</div>}>
            <DataCard username={username}/>
            </Suspense>
        </div>
    )
}
export default DatafetchServer;