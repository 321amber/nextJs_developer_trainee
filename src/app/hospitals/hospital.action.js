'use server';
import { revalidatePath } from "next/cache";
import { db } from "../../../config/db";

  //with this all functions which we define here will be for server actions.

export const hospitalAction = async (previousState, formData)=>{
    const hospitalName = formData.get("name");
    const city = formData.get("city");
    const state = formData.get("state");
    const type = formData.get("type");
    const year = formData.get("year");
    // return {
    //   success:true, message:"form submitted successfully"
    // }

    revalidatePath("/hospitals");

    //const {fullName, email, message} = Object.fromEntries(formData.entries());

    await db.execute(`insert into hospitals(name, city, state, type, origin_year) values (?,?,?,?,?)`,[hospitalName, city, state, type, year]);
}