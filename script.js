function validateForms() {
    let a = document.forms["chat"]["fname"].value.trim();
    let b = document.forms["chat"]["email"].value.trim();
    let c = document.forms["chat"]["textarea"].value.trim();

    if (a === "" || b === "" || c === "") {
        alert("Please fill out all fields before submitting.");
        return false;
    }

    return true;
}