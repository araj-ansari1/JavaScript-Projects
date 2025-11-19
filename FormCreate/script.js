let studentName = document.getElementById('student-name');
let studentEmail = document.getElementById('student-email');
let studentPhone = document.getElementById('phone');
let studentCourse = document.getElementById('cource');
let submitBtn = document.getElementById('submitBtn');

let errorName = document.getElementById('name-error');
let errorEmail = document.getElementById('email-error');
let errorPhone = document.getElementById('phone-error');
let errorCourse = document.getElementById('course-error');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let flag = true;
    if (studentName.value === "") {
        errorName.textContent = "Name is required...!";
        flag = false;
    } else {
        errorName.textContent = "";
    }
    if (studentEmail.value === "") {
        errorEmail.textContent = "Email is required...!";
        flag = false;
    } else {
        errorEmail.textContent = "";
    }
    if (studentPhone.value === "") {
        errorPhone.textContent = "Phone is required...!";
        flag = false;
    } else {
        errorPhone.textContent = "";
    }
    if (studentCourse.value === "") {
        errorCourse.textContent = "Course is required...!!";
        flag = false;
    } else {
        errorCourse.textContent = "";
    }
    if (flag) {
        alert("All inputs are valid. You can submit the form or save data.");
        clearInput();
    }

});

function clearInput() {
    studentName.value = "";
    studentEmail.value = "";
    studentPhone.value = "";
    studentCourse.value = "";
}