function validateForms(){
    let a = document.forms["chat"]["fname"].value;
    let b = document.forms["chat"]["email"].value;
    let c = document.forms["chat"]["textarea"].value;
    if (a=="" ||b=="" ||c=="" ){
        alert("Please, fill out before submit.")
        return false;
    }
};