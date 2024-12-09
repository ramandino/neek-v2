
let form = document.querySelector("#formtest")
let emailform = document.querySelector("#email")
let passwordform = document.querySelector("#password")

let loginbutton = document.querySelector("#loginbtn")

let email = emailform.value
let password = passwordform.value


import { createClient } from 'https://esm.sh/@supabase/supabase-js';

  // Initialize the Supabase client
const supabaseUrl = 'https://oijidfrrtisjnwqjicbv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pamlkZnJydGlzam53cWppY2J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0OTU3NDEsImV4cCI6MjA0OTA3MTc0MX0.h4CQrrrHGH_upP1eesNcj5JNI8W3dNX1K-ZmHADCo1U';
const supabase = createClient(supabaseUrl, supabaseKey);

form.addEventListener("submit", async function (e){
    e.preventDefault();
    var formData = new FormData(form);
    const values = Object.fromEntries(formData);

    const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
        })

    console.log("user loged-in,",data )
})