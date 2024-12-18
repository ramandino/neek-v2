
import { supabase } from "./authkey.js";

// esto agrega info del user al user icon

const id = localStorage.getItem("id");
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
    
   
// sign out y close session
let signout_btn = document.getElementById("signout_btn");
signout_btn.addEventListener("click", async function(){
    const { error } = await supabase.auth.signOut()
    localStorage.clear()
    window.location.href = "/dist/index.html"; 
})


// test para ocultar las tabs y demas
let testtab = document.getElementById("tab_inversionistas");
let reportes = document.getElementById("reportes");
let inversionistas = document.getElementById("inversionistas");

reportes.addEventListener("click", function(){
    testtab.classList.add("hidden")
})

inversionistas.addEventListener("click", function(){
    testtab.classList.remove("hidden")
})


// Agregar inversionistas a base de datos
let agregar_inversionistaform = document.getElementById("agregarinversionista")

if (agregar_inversionistaform) {
    agregar_inversionistaform.addEventListener("submit", async function (e) {
        e.preventDefault()
        let formData = new FormData(agregar_inversionistaform)
        const values = Object.fromEntries(formData)

        const {error} = await supabase
        .from("inversionistas")
        .insert(values)
        
        if (error){
            console.log(error,"no sos mark")
        }
        agregar_inversionistaform.reset();
    })
}

// AGREGAR INVERSIONISTA A LA TABLA
async function fetchinversionistas (){
    const { data, error } = await supabase
    .from('inversionistas')
    .select()
    return data
}

const agregarinversionista = new Promise((resolve,reject)=>{
    resolve(fetchinversionistas())
})

// let inversionistas_table = document.getElementById("inversionistas_table")
// agregarinversionista

//     .then(data =>{
//         let evenodd = ""
//         let  valores = data
//         valores.forEach(((valores,index) => {
//             if (index % 2 == 0) {
//                 evenodd = "even"
//             }else{
//                 evenodd = "odd"
//         }
//             inversionistas_table.innerHTML += 
//                 `<tr class="tabletrstyle ${evenodd}"> <th scope="row" class="tableheadstyle"> ${valores.investor_name}</th> 
//                     <td class="${evenodd} px-6 py-4">${valores.investor_email}</td>
//                     <td class="${evenodd} px-6 py-4">${valores.investor_rol}</td>
//                     <td class="${evenodd} px-6 py-4">${valores.investment}</td>
//                 </tr>`
//         }));
//     })

//     .catch(error =>{
//         console.log(error)
//     })


// DEAL TAB
let div_Option_container = document.getElementById("div_option_container")
let agregar_Deal_option = document.getElementById("agregardealoption")
let optiondeal = 1



document.getElementById('defaultModalButton').addEventListener('click', function() {
    const modal = document.getElementById('defaultModal');
    modal.classList.remove('hidden'); // Show the modal
})

agregar_Deal_option.addEventListener("click", function() {
    let nuevodeal = document.createElement("input")
    nuevodeal.name = `opcion ${optiondeal}`
    nuevodeal.type = "text"
    div_Option_container.appendChild(nuevodeal) 
    optiondeal++
})

document.getElementById("agregarportolio").addEventListener("submit",function(e){
    form = document.getElementById("formportolfio")
    e.preventDefault()
        let formData = new FormData(form)
        const values = Object.fromEntries(formData)
        form.reset();

})




