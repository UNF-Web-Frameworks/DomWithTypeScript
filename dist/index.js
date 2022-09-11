"use strict";
function AddUserInfo() {
    let txtFname = document.getElementById('fname');
    let txtLname = document.getElementById('lname');
    let spanFirstName = document.getElementById('fistName');
    let spanLastName = document.getElementById('lastName');
    spanFirstName.innerHTML = txtFname.value.toUpperCase();
    spanLastName.innerHTML = txtLname.value.toUpperCase();
}
