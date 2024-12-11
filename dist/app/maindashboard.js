
import { supabase } from "./authkey.js";


const id = localStorage.getItem("id");



let btntest = document.getElementById("testbtn");

const {data , error} = await supabase
    .from('auth_users_data')
    .select('name')
    .eq("id",id )

    const email = localStorage.getItem("user_Email");
    const name = data[0].name

    const info_Username = document.querySelector("#info_Username")
    const info_Email = document.querySelector("#info_Email")

    if (info_Username) info_Username.textContent += name
    if (info_Email) info_Email.textContent += email

// btntest.addEventListener("click",function(){
//     console.log("Email:", email);
//     console.log("Email:", [0].name); // Do something with the resolved value
//     });
    

btntest.addEventListener("click",function(){
    console.log(name,email)
})

let signout_btn = document.getElementById("signout_btn");




signout_btn.addEventListener("click", async function(){
    const { error } = await supabase.auth.signOut()
    localStorage.clear()
    window.location.href = "/dist/index.html"; 

})