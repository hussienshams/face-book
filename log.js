function formValidate() {
    var name = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var error = document.getElementById("error");
    var text = '';




    if (name.indexOf("@") == -1 || name.length < 10) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }

    else if (isNaN(pass) || pass.length != 11) {
        text = "Please Enter Valid password";
        error.innerHTML = text;
        return false;
    }
    else {
        alert("Done")
        return true;
    }

}