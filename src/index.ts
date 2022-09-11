function AddUserInfo()
{
    let txtFname = document.getElementById('fname') as HTMLInputElement;
    let txtLname = document.getElementById('lname') as HTMLInputElement;

    let spanFirstName = document.getElementById('fistName') as HTMLSpanElement;
    let spanLastName = document.getElementById('lastName') as HTMLSpanElement;

    spanFirstName.innerHTML = txtFname.value.toUpperCase();
    spanLastName.innerHTML = txtLname.value.toUpperCase();
}