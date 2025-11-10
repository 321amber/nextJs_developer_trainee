"use client";

import { useActionState } from "react";
import { contactAction } from "./contact.action";

const Contact = ()=>{
  const [state, formAction, isPending] = useActionState(contactAction,  null);
 return(
  <div>
<div class="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg ring-1 ring-gray-100">
  <h2 class="text-2xl font-semibold text-gray-800">Contact Us</h2>
  <p class="mt-2 text-sm text-gray-500">
    Have a question? Send us a message below.
  </p>
  
  <form class="mt-6 space-y-4" action={formAction}>
    <div>
      <label for="name" className="block text-sm font-medium text-gray-700">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your full name"
        className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </div>

    <div>
      <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
    </div>

    <div>
      <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Write your message here..."
        className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      ></textarea>
    </div>

    <button
      type="submit"
      disabled = {isPending}
      className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      {
        isPending ? <span>Loading....</span> : <span>Submit</span>
      }
    </button>
  </form>
</div>
{
state &&
<p className={`p-4 text-center m-10 ${state.success ? "bg-green-500":"bg-red-500"}`}>
  {state.message}
</p>
}
</div>

 )
}

export default Contact;