'use server';
import { redirect } from "next/navigation";
import { db } from "../../../../config/db";

  //with this all functions which we define here will be for server actions.

export const contactAction = async (previousState, formData)=>{
  try{
    const fullName = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    redirect('/');
    // return {
    //   success:true, message:"form submitted successfully"
    // }
  }
  catch(error){
    if(error.message === "NEXT_REDIRECT") throw error;
    console.log("error", error.message);
    
  }

    //const {fullName, email, message} = Object.fromEntries(formData.entries());

    //await db.execute(`insert into contact(full_name, email, message) values (?,?,?)`,[fullName, email, message]);
}