//form field entry validation
function validateForm() {
    var x = document.forms["contact"]["name"].value;
    if (x == "") {
        alert("Please enter your name.");
        return false;
    }
}
function validateForm() {
    var x = document.forms["contact"]["email"].value;
    if (x == "") {
        alert("You must enter an email address.");
        return false;
    }
}
function validateForm() {
    var x = document.forms["contact"]["message"].value;
    if (x == "") {
        alert("Please summarize your request or project in 1,000 characters or less and try again.");
        return false;
    }
}