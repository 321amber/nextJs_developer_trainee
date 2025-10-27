const SingleProfile = async (props)=>{
    const username = await props.params;
    console.log(username);
    
    
    
    return (
        <h1>Dynamic {username.username}</h1>
    )
}
export default SingleProfile;