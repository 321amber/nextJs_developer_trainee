const DataCard = async ({username})=>{
 

    const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);

    await new Promise((resolve)=>{
        resolve();
    },3000);
    
    return(
            <div>
    <h1>data fetching {data.name}</h1>
    <p>gender: {data.gender}</p>
    <p>confidential Percantage: {data.probability * 100}</p>
    </div>
    )
}

export default DataCard;