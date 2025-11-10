"use client"
import { useEffect, useState } from "react";

const RandomJokes = ()=>{
    const [randomJoke, setRandomJoke] = useState({});
    const [showJoke, setShowJoke] = useState(true);
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const fetchJokesApi = async ()=>{
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        
        setRandomJoke(data);
    }
    useEffect(()=>{
        fetchJokesApi();
    },[]);

    return(
        <div>
            <h1>setup: {randomJoke.setup}</h1>
            {showJoke ? (<button onClick={()=> setShowJoke(false)}>Reveal</button>):(<div>
                <h2>punchLine: {randomJoke.punchline}</h2>
                <button onClick={()=>setShowJoke(true)}>Hide punchline</button>
            </div>)}
            
            <div onClick={()=> fetchJokesApi()}>Next</div>
        </div>
    )
}
export default RandomJokes;