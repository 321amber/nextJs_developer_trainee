import { db } from "../../../config/db";
import { HospitalForm } from "./HospitalForm";

const Hospitals = async()=>{
    const [hospitals] = await db.execute("select * from hospitals");
    return(
        <>
            <HospitalForm/>

            <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Registered Hospitals</h3>
    <div className="overflow-x-auto">
     <ol className="flex space-x-4 p-4">
    {hospitals.map((hospital, index) => (
      <li
        key={index}
        className="shrink-0 w-64 bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-800">{hospital.name}</h3>
        <p className="text-sm text-gray-600">{hospital.city}, {hospital.state}</p>
        <p className="text-sm mt-1">
          <span className="font-medium text-gray-700">Type:</span> {hospital.type}
        </p>
        <p className="text-sm">
          <span className="font-medium text-gray-700">Origin Year:</span> {hospital.origin_year}
        </p>
      </li>
    ))}
  </ol>
  </div>
  </div>
        </>
    )
}

export default Hospitals;