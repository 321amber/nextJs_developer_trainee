const SingleProfilePost = async (props)=>{
    const username = await props.params; // we can only use this dynamic routing in server components and not in client components
    console.log(username);
    
    
    
    return (
        <h1>Dynamic user: {username.username} and post: {username.postId}</h1>
    )
}
export default SingleProfilePost;