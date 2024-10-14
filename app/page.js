"use client"
import { redirect } from "next/navigation";



export default async function Home() {


  //if(!isLoggedIn) {
     redirect('/api/auth/login')
  // }
   
 
   
    

  return (
    <div>
      
      
    </div>
     
  );
}
