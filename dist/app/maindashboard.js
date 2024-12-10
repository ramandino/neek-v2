
import { supabase } from "./authkey.js";


const id = localStorage.getItem("id");
const email = localStorage.getItem("user_Email");


let btntest = document.getElementById("testbtn");

const {data , error} = await supabase
    .from('auth_users_data')
    .select('name')
    .eq("id",id )


btntest.addEventListener("click",function(){
    console.log("Email:", email);
    console.log("Email:", data[0].name); // Do something with the resolved value
    });
    




