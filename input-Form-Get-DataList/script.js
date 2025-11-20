let studentName = document.getElementById('student-name');
let studentEmail = document.getElementById('student-email');
let studentPhone = document.getElementById('phone');
let studentCourse = document.getElementById('cource');
let studentImage = document.getElementById('student-image');
let btn = document.getElementById('submitBtn');

let upDateBnt = document.getElementById('upDate-btn');

let result = document.getElementById('student-data-list');

let editIndex = null;

// let studentData = JSON.parse(localStorage.setItem('keys')) || [];
let studentData = JSON.parse(localStorage.getItem('keys')) || [];
// let studentData = [];

studentData.forEach((items) => {
    showStudentInfo(items);
})

btn.addEventListener('click', () => {
    if (studentName.value === "" || studentEmail.value === "" || studentPhone.value === "" || studentCourse.value === "") {
        alert("All input Feal");
        return;
    }
    // else {
    //     console.log(studentName.value);
    //     console.log(studentEmail.value);
    //     console.log(studentPhone.value);
    //     console.log(studentCourse.value);
    // }
    let reader = new FileReader();
    reader.onload = function (event) {

        let stdObj = {
            stdName: studentName.value,
            stdEmail: studentEmail.value,
            stdPhone: parseInt(studentPhone.value),
            stdCourse: studentCourse.value,
            stdImage: event.target.result,
        }
        studentData.push(stdObj);
        localStorage.setItem('keys', JSON.stringify(studentData));
        // console.log(studentData);

        showStudentInfo();
        clearInput();
    };
    reader.readAsDataURL(studentImage.files[0]);
});


function showStudentInfo() {

    result.innerHTML = "";
    studentData.forEach((elem, index) => {

        let row = `
        <tr>
            <td>${elem.stdName}</td>
            <td>${elem.stdEmail}</td>
            <td>${elem.stdPhone}</td>
            <td>${elem.stdCourse}</td>
            <td><img src="${elem.stdImage}" alt="Student Image" width="50" height="50"/></td>
            <td>
            <button class='btn btn-danger btn-sm' onclick='deleteData(${index})'>Delete</button>
            <button class='btn btn-success btn-sm' onclick='editData(${index})'>Edit</button>
            </td>
            </tr>
            
            `;
        result.innerHTML += row;
    });

};

function clearInput() {
    studentName.value = "";
    studentEmail.value = "";
    studentPhone.value = "";
    studentCourse.value = "";
};

function deleteData(index) {
    studentData.splice(index, 1);

    localStorage.setItem('keys', JSON.stringify(studentData));

    showStudentInfo();
}

function editData(index) {
    editIndex = index;
    // console.log(editIndex);

    studentName.value = studentData[editIndex].stdName;
    studentEmail.value = studentData[editIndex].stdEmail;
    studentPhone.value = studentData[editIndex].stdPhone;
    studentCourse.value = studentData[editIndex].stdCourse;
    upDateBnt.style.display = "block";
    btn.style.display = "none";
}
upDateBnt.addEventListener('click', () => {
    if (studentImage.files[0]) {
        let reader = new FileReader();
        reader.onload = function (event) {

            studentData[editIndex] = {
                stdName: studentName.value,
                stdEmail: studentEmail.value,
                stdPhone: studentPhone.value,
                stdCourse: studentCourse.value,
                stdImage: event.target.result,
            };

            localStorage.setItem('keys', JSON.stringify(studentData));


            upDateBnt.style.display = "none";
            btn.style.display = "block";

            showStudentInfo();
            clearInput();
        }
        reader.readAsDataURL(studentImage.files[0]);
    } else {
        // keep old image if user did not choose new one
        studentData[editIndex] = {
            stdImage: studentData[editIndex].stdImage,
            stdName: studentName.value,
            stdEmail: studentEmail.value,
            stdPhone: studentPhone.value,
            stdCourse: studentCourse.value
        }
        localStorage.setItem('keys', JSON.stringify(studentData));
        showStudentInfo();
        clearInput();
        upDateBnt.style.display = "none";
        btn.style.display = "block";
    }
})