"use client";
const ClientComp = () => { //we cannot make client component async function.

    // we are making this file as client component , so if we use any of the component inside it like if we pass any component as child to it, it will also become the client component.
  return (
    <div>
      <h1>this is a client component</h1>
      <button
      className="bg-red-400 text-black p-5"
      onClick={alert("hii")}>Click me</button>
    </div>
  )
}

export default ClientComp