
const ServerComp = () => {
  return (
    //in server component we do not need to create it to client for data fetching and everything, we directly make the component as asynchronous and can directly fetch the data , do not need to use the useeffect or anything which we use in the client component.
    <div>
      <h1>this is a Server component</h1>
      <button
      className="bg-red-400 text-black p-5"
     >Click me</button>
    </div>
  )
}

export default ServerComp
