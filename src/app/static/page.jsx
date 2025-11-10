import {db} from '../../../config/db'

const StaticPage = async ()=> {
const doctors = await db.execute("select * from doctors");
console.log(doctors);
return(
    <div>Static page is here</div>
)
}
export default StaticPage;