import { supabase } from "./authkey.js";

let form = document.getElementById("formtest")

if (form) {
	form.addEventListener("submit", async function (e){
		e.preventDefault();
		let formData = new FormData(form);
		const values = Object.fromEntries(formData);
	
		const { data, error } = await supabase.auth.signInWithPassword({
			email: values.email,
			password: values.password,
		})
	
		let id = data.user.id
		let email = values.email

		localStorage.setItem("id", id);
		localStorage.setItem("user_Email", email);
	
		if (data) {
			window.location.href = "/dist/pages/maindashboard.html"; 
	}})
}

