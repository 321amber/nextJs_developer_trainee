'use client'
import { useActionState } from "react";
import { hospitalAction } from "./hospital.action";

export const HospitalForm = ()=>{
    const [state, formAction, isPending] = useActionState(hospitalAction, null);
    return(
        <>
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
  <h2 className="text-2xl font-semibold text-gray-800">Hospital Registration</h2>

  {/* Hospital Form */}
  <form className="space-y-4" action={formAction}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Hospital Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter hospital name"
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
        />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter city"
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Enter state"
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Hospital Type</label>
        <select
          id="type"
          name="type"
          className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
        >
          <option value="">Select type</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
          <option value="Trust">Trust</option>
        </select>
      </div>
    </div>

    <div>
      <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year of Origin</label>
      <input
        type="number"
        id="year"
        name="year"
        placeholder="e.g. 1998"
        className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      Add Hospital
    </button>
  </form>
   </div>
        </>
    )
}

export default HospitalForm;