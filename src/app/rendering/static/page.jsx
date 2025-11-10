import {db} from '../../../../config/db'
export const revalidate = 30; //ISR

const StaticPage = async ()=> {
const doctors = await db.execute("select * from doctors");
console.log(doctors[0]);

console.log("static page");
return(
    <div>
        <ul>
            {doctors[0].map((doctor)=>{
                <li key={doctor.doctor_id}>{doctor.full_name}</li>
            })}
        </ul>
    </div>
)
}
export default StaticPage;