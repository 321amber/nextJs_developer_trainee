import { notFound } from 'next/navigation';
import {db} from '../../../../config/db'
export const dynamic = 'force-dynamic';
import { cache } from 'react';


export async function generateStaticParams(){
    const [doctors] = await db.execute('select doctor_id from doctors');
    return doctors.map((doctor)=>({id:doctor.doctor_id.toString()}));
}
const DynamicPage = async ()=> {
    const doctors = await getAllDoctors();
    if(!doctors) return notFound();
return(
    <div>
         <div>
        <DoctorList doctors={doctors}/>
    </div>
    </div>
)

}
export default DynamicPage;

const DoctorList = async ()=>{
    const doctors = await getAllDoctors();

    return(
        <ul>
            {doctors[0].map((doctor)=>{
                <li key={doctor.doctor_id}><p>{doctor.full_name}</p></li>
            })}
        </ul>
    )
}

const getAllDoctors = cache(async ()=>{
    const [doctors] = await db.execute("select * from doctors");
    console.log("dynamic page");
    return doctors;
})