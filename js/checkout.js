


// Exercise 6
function validate(event) {  
	event.preventDefault() 

	var error = 0
	// Get the input fields
	var fName = document.getElementById("fName")
	var fEmail = document.getElementById("fEmail")
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")

	// Get the error elements
	var errorName = document.getElementById("errorName")
	var errorEmail = document.getElementById("errorEmail")  
	var errorAddress = document.getElementById("errorAddress")  
	var errorLastN = document.getElementById("errorLastN")  
	var errorPassword = document.getElementById("errorPassword")  
	var errorPhone = document.getElementById("errorPhone")  	


	
//Validate fName

function checkName(name) {
	return /^[a-zA-Z]+$/.test(name);
}

if (fName.value.length < 3) {
	error++	
	fName.classList.add("is-invalid")
	errorName.style.display = "block"
} else if (!checkName(fName.value)) {
    error++
	fName.classList.add("is-invalid")
    errorName.style.display = "block"
    errorName.textContent = "The field First Name only must contain letters"
} 
else {	
	fName.classList.remove("is-invalid")
	errorName.style.display = ""		
}

// Validate fLastN
if (fLastN.value.length < 3) {
	error++
	fLastN.classList.add("is-invalid")
	errorLastN.style.display = "block"
} else if (!checkName(fLastN.value)) {
    error++
	fLastN.classList.add("is-invalid")
    errorLastN.style.display = "block"
    errorLastN.textContent = "The field Last Name only must contain letters"
} else {
	fLastN.classList.remove("is-invalid")	
	errorLastN.style.display = ""	
}

// Validate fPhone
function checkPhone(fPhone) {    
    return /^[0-9]+$/.test(fPhone)
}

if (fPhone.value.length !==  9) { 
	error++
	fPhone.classList.add("is-invalid")
	errorPhone.style.display = "block"
	
} 
else if (!checkPhone(fPhone.value)) {
    error++
	fPhone.classList.add("is-invalid")
    errorPhone.style.display = "block"    
} else {	
	fPhone.classList.remove("is-invalid")	
	errorPhone.style.display = ""	
}

// Validate email

function checkEmail(fEmail){
	return fEmail.includes("@") && fEmail.includes(".") && fEmail.length >= 3}


if (!checkEmail(fEmail.value)) {
    error++
	fEmail.classList.add("is-invalid")
    errorEmail.style.display = "block"    
} else {	
	fEmail.classList.remove("is-invalid")
	errorEmail.style.display = ""	
}


// Validate contraseña
function containsLettersAndNumbers(fPassword) {
    var hasLetters = /[a-zA-Z]/.test(fPassword)
    var checkPas = /^.{4,8}$/.test(fPassword)
	var hasNumbers = /[0-9]/.test(fPassword)	
 	return hasLetters && hasNumbers && checkPas
}


if (!containsLettersAndNumbers(fPassword.value)) {
    error++
	fPassword.classList.add("is-invalid")
	errorPassword.style.display = "block" 
	errorPassword.textContent = "The password should contain at least 4 characters and numbers and no more than 8."

} else {	
	fPassword.classList.remove("is-invalid")
	errorPassword.style.display = ""	
}
// Validate Address
if (fAddress.value.length < 3) {
	error++
	fAddress.classList.add("is-invalid")
	errorAddress.style.display = "block"	
	errorAddress.textContent = "The field Address  must contain at least 3 letters"

}  else {	
	fAddress.classList.remove("is-invalid")
	errorAddress.style.display = ""		
}


if (error > 0) {
	        alert("Error")
	    } else {
	        alert("OK")
	    }

}