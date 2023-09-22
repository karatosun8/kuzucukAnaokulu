
//! selectors
const studentSave = document.querySelector(".studentSave")

// Student Data
const studentTc =document.querySelector(".studentTc")
const studentName =document.querySelector(".studentName")
const studentBorn =document.querySelector(".studentBorn")
const studentVasi =document.querySelector(".studentVasi")
const studentSınıf =document.querySelector(".studentSınıf")
const studentKayıt =document.querySelector(".studentKayıt")
const studentAdres =document.querySelector(".studentAdres")


// Mother Data

const motherTc = document.querySelector(".motherTc")
const motherName = document.querySelector(".motherName")
const motherJob = document.querySelector(".motherJob")
const motherTel = document.querySelector(".motherTel")
const motherJobTel = document.querySelector(".motherJobtel")
const motherAdres = document.querySelector(".motherAdres")
const motherEmail = document.querySelector(".motherEmail")

//Father Data
const fatherTc = document.querySelector(".fatherTc")
const fatherName = document.querySelector(".fatherName")
const fatherJob = document.querySelector(".fatherJob")
const fatherTel = document.querySelector(".fatherTel")
const fatherJobTel = document.querySelector(".fatherJobtel")
const fatherAdres = document.querySelector(".fatherAdres")
const fatherEmail = document.querySelector(".fatherEmail")

//Vasi Data
const vasiTc = document.querySelector(".vasiTc")
const vasiName = document.querySelector(".vasiName")
const vasiJob = document.querySelector(".vasiJob")
const vasiTel = document.querySelector(".vasiTel")
const vasiJobTel = document.querySelector(".vasiJobtel")
const vasiAdres = document.querySelector(".vasiAdres")
const vasiEmail = document.querySelector(".vasiEmail")

//Ödeme
const paymentMethod =document.querySelector(".paymentMethod")
const educationFee =document.querySelector(".educationFee")
const paymentDay =document.querySelector(".paymentDay")
const explanation =document.querySelector(".explanation")


//! events

studentSave.addEventListener("click", ()=>{
    //Student 
    console.log(studentTc.value);
    console.log(studentName.value);
    console.log(studentBorn.value);
    console.log(studentVasi.value);
    console.log(studentSınıf.value);
    console.log(studentKayıt.value);
    console.log(studentAdres.value);

    //Mother
    console.log(motherTc.value);
    console.log(motherName.value);
    console.log(motherJob.value);
    console.log(motherTel.value);
    console.log(motherJobTel.value);
    console.log(motherAdres.value);
    console.log(motherEmail.value);

    //Father
    console.log(fatherTc.value);
    console.log(fatherName.value);
    console.log(fatherJob.value);
    console.log(fatherTel.value);
    console.log(fatherJobTel.value);
    console.log(fatherAdres.value);
    console.log(fatherEmail.value);

    //Vasi
    console.log(vasiTc.value);
    console.log(vasiName.value);
    console.log(vasiJob.value);
    console.log(vasiTel.value);
    console.log(vasiJobTel.value);
    console.log(vasiAdres.value);
    console.log(vasiEmail.value);

    //Ödeme
    console.log(paymentMethod.value);
    console.log(educationFee.value);
    console.log(paymentDay.value);
    console.log(explanation.value);
})