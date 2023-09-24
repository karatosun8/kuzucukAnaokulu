//! selectors
const studentSave = document.querySelector(".studentSave");
const create = document.querySelector(".create");
const studentData = document.querySelector(".studentData")

// Student Data
const studentTc = document.querySelector(".studentTc");
const studentName = document.querySelector(".studentName");
const studentBorn = document.querySelector(".studentBorn");
const studentVasi = document.querySelector(".studentVasi");
const studentSınıf = document.querySelector(".studentSınıf");
const studentKayıt = document.querySelector(".studentKayıt");
const studentAdres = document.querySelector(".studentAdres");

// Mother Data

const motherTc = document.querySelector(".motherTc");
const motherName = document.querySelector(".motherName");
const motherJob = document.querySelector(".motherJob");
const motherTel = document.querySelector(".motherTel");
const motherJobTel = document.querySelector(".motherJobtel");
const motherAdres = document.querySelector(".motherAdres");
const motherEmail = document.querySelector(".motherEmail");

//Father Data
const fatherTc = document.querySelector(".fatherTc");
const fatherName = document.querySelector(".fatherName");
const fatherJob = document.querySelector(".fatherJob");
const fatherTel = document.querySelector(".fatherTel");
const fatherJobTel = document.querySelector(".fatherJobtel");
const fatherAdres = document.querySelector(".fatherAdres");
const fatherEmail = document.querySelector(".fatherEmail");

//Vasi Data
const vasiTc = document.querySelector(".vasiTc");
const vasiName = document.querySelector(".vasiName");
const vasiJob = document.querySelector(".vasiJob");
const vasiTel = document.querySelector(".vasiTel");
const vasiJobTel = document.querySelector(".vasiJobtel");
const vasiAdres = document.querySelector(".vasiAdres");
const vasiEmail = document.querySelector(".vasiEmail");

//Ödeme
const paymentMethod = document.querySelector(".paymentMethod");
const educationFee = document.querySelector(".educationFee");
const paymentDay = document.querySelector(".paymentDay");
const explanation = document.querySelector(".explanation");
//Ekrana yazdırma için

const headerStudentdata=document.querySelector(".headerStudentdata")
const studentDatatc=document.querySelector(".studentDatatc")
const studentVasiname=document.querySelector(".studentVasiname")
const studentDatasınıf=document.querySelector(".studentDatasınıf")
const studentDataborn=document.querySelector(".studentDataborn")
const studentDataadres=document.querySelector(".studentDataadres")
const studentDatakayıt=document.querySelector(".studentDatakayıt")
const sstudentMothertc=document.querySelector(".studentMothertc")
const studentMothername=document.querySelector(".studentMothername")
const studentMotherjob=document.querySelector(".studentMotherjob")
const studentMothertel=document.querySelector(".studentMothertel")
const studentMotherjobtel=document.querySelector(".studentMotherjobtel")
const studentMotheradres=document.querySelector(".studentMotheradres")
const studentFathertc=document.querySelector(".studentFathertc")
const studentFathername=document.querySelector(".studentFathername")
const studentFatherjob=document.querySelector(".studentFatherjob")
const studentFathertel=document.querySelector(".studentFathertel")
const studentFatherjobtel=document.querySelector(".studentFatherjobtel")
const studentFatheradres=document.querySelector(".studentFatheradres")
const studentFatheremail=document.querySelector(".studentFatheremail")
const studentVasitc=document.querySelector(".studentVasitc")
const studentVasijob=document.querySelector(".studentVasijob")
const studentVasitel=document.querySelector(".studentVasitel")
const studentVasijobtel=document.querySelector(".studentVasijobtel")
const studentVasiadres=document.querySelector(".studentVasiadres")
const studentVasiemail=document.querySelector(".studentVasiemail")
const studentPaymentmethod=document.querySelector(".studentPaymentmethod")
const studentEducationfee=document.querySelector(".studentEducationfee")
const studentPaymentday=document.querySelector(".studentPaymentday")
const studentExplanation=document.querySelector(".studentExplanation")





//! events



studentSave.addEventListener("click", () => {
  
  const newCreateStudent = document.createElement("div");

  newCreateStudent.classList.add("card");
  newCreateStudent.classList.add("text-center");
  newCreateStudent.setAttribute("style", "width:18rem");
  newCreateStudent.innerHTML = `
  
          <div class="cardDelete card-body">
            <div>
              <h5 class="card-title">ÖĞRENCİ ADI</h5>
              <p>${studentName.value}</p>
            </div>
            <div>
              <h5 class="card-title">SINIFI</h5>
              <p>${studentSınıf.value}</p>
            </div>
            <h5 class="card-title">AÇIKLAMA</h5>
            <p class="card-text">
            ${explanation.value}
            </p>        
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Detay</button>           
            
          </div>

    `;

    headerStudentdata.textContent = `${studentName.value}`
    studentDatatc.textContent=`${studentTc.value}`
    studentVasiname.textContent=`${studentVasi.value}`
    studentDatasınıf.textContent=`${studentSınıf.value}`
    studentDataborn.textContent=`${studentBorn.value}`
    studentDataadres.textContent=`${studentAdres.value}`
    studentDatakayıt.textContent=`${studentKayıt.value}`
    sstudentMothertc.textContent=`${motherTc.value}`
    studentMothername.textContent=`${motherName.value}`
    studentMotherjob.textContent=`${motherJob.value}`
    studentMothertel.textContent=`${motherTel.value}`
    studentMotherjobtel.textContent=`${motherJobTel.value}`
    studentMotheradres.textContent=`${motherAdres.value}`
    studentFathertc.textContent=`${fatherTc.value}`
    studentFathername.textContent=`${fatherName.value}`
    studentFatherjob.textContent=`${fatherJob.value}`
    studentFathertel.textContent=`${fatherTel.value}`
    studentFatherjobtel.textContent=`${fatherJobTel.value}`
    studentFatheradres.textContent=`${fatherAdres.value}`
    studentFatheremail.textContent=`${fatherEmail.value}`
    studentVasitc.textContent=`${vasiTc.value}`
    studentVasiname.textContent=`${vasiName.value}`
    studentVasijob.textContent=`${studentVasijob}`
    studentVasitel.textContent=`${studentVasitel}`
    studentVasijobtel.textContent=`${studentVasijobtel}`
    studentVasiadres.textContent=`${studentVasiadres}`
    studentVasiemail.textContent=`${studentVasiemail}`
    studentPaymentmethod.textContent=`${paymentMethod}`
    studentEducationfee.textContent=`${educationFee}`
    studentPaymentday.textContent=`${paymentDay}`
    studentExplanation.textContent=`${explanation}`
    
    
    
   
    
  {
    /* <div class="card d-flex text-center mb-3" style="width: 18rem"></div> */
  }

  create.appendChild(newCreateStudent);

  //Form inputları boşaltmak için

  studentTc.value = "";
  studentName.value = "";
  studentBorn.value = "";
  studentVasi.value = "";
  studentSınıf.value = "";
  studentKayıt.value = "";
  studentAdres.value = "";

  motherTc.value = "";
  motherName.value = "";
  motherJob.value = "";
  motherTel.value = "";
  motherJobTel.value = "";
  motherAdres.value = "";
  motherEmail.value = "";

  fatherTc.value = "";
  fatherName.value = "";
  fatherJob.value = "";
  fatherTel.value = "";
  fatherJobTel.value = "";
  fatherAdres.value = "";
  fatherEmail.value = "";

  vasiTc.value = "";
  vasiName.value = "";
  vasiJob.value = "";
  vasiTel.value = "";
  vasiJobTel.value = "";
  vasiAdres.value = "";
  vasiEmail.value = "";

  paymentMethod.value = "";
  educationFee.value = "";
  paymentDay.value = "";
  explanation.value = "";

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

  //Delete
  console.log(studentData);
 
});

studentData.addEventListener("click",deleteCheck)

//Listedeki elemanı silmek için
const cardDelete=document.querySelector(".cardDelete")
//!function

function deleteCheck(e){
  const item =e.target;
  
  if(item.classList[0] === "delete"){
    
    const todo =item.parentElement.parentElement;
    todo.remove();
    const offcanvas=document.querySelector(".offcanvas")
    offcanvas.remove()
    //lListeden Detaylı elemanı silmek için
    // create.remove()
  }
  if(item.classList[0] ==="delete"){
    const cardDelete=document.querySelector(".cardDelete")
    cardDelete.parentElement.remove()
  }
  

}