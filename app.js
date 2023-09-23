//! selectors
const studentSave = document.querySelector(".studentSave");
const create = document.querySelector(".create");

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

//! events

studentSave.addEventListener("click", () => {
  const newCreateStudent = document.createElement("div");

  newCreateStudent.classList.add("card");
  newCreateStudent.classList.add("text-center");
  newCreateStudent.setAttribute("style", "width:18rem");
  newCreateStudent.innerHTML = `
  
          <div class="card-body">
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

            <div class="offcanvas offcanvas-top " style="height: 800px" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
              <div class="offcanvas-header ">
                <h2 class="offcanvas-title " id="offcanvasTopLabel"></h2>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">

              
              // Öğrenci Bilgileri Detaylı

              <div class="container d-flex gap-2 justify-content-center ">
              <div class="row">
              <h1> ${studentName.value}</h1>
              <div class="col-6 ">

              <table class="table" >               
                   <tbody>

                   <tr class="table-active">
                   <th scope="row">T.C. Kimlik No    :</th>
                   <td class="table-active">${studentTc.value}</td>
                   </tr> 

                   <tr class="table-active">
                   <th scope="row">Veli/Vasi Adı    :</th>
                   <td class="table-active">${vasiName.value}</td>
                   </tr>                                                                         
                                           
                    <tr class="table-active">
                    <th scope="row">Sınıfı    :</th>
                    <td class="table-active">${studentSınıf.value}</td>
                    </tr>   

                    </tbody>
               </table>

               </div>


              <div class="col-6 ">
              <table class="table" >
                  <tbody class="">

                  <tr class="table-active">
                  <th scope="row">Doğum Tarihi    :</th>
                  <td class="table-active">${studentBorn.value}</td>
                  </tr>       

                  <tr class="table-active">
                  <th scope="row">Adres   :</th>
                  <td class="table-active">${studentAdres.value}</td>
                  </tr> 

                  <tr class="table-active">                     
                  <th scope="row">Kayıt Tarihi    :</th>
                  <td class="table-active">${studentKayıt.value}</td>                        
                  </tr>  

                  </tbody>
               </table>

               </div>
              
              
               </div>
               </div>


               //Annesinin Bilgiler 


              <div class="container d-flex gap-2 justify-content-center">
              <div class="row">
              <h1> Annesinin Bilgileri</h1>
              <div class="col-6 ">

              <table class="table" >               
                   <tbody>

                   <tr class="table-active">
                   <th scope="row">T.C. Kimlik No    :</th>
                   <td class="table-active">${motherTc.value}</td>
                   </tr> 

                   <tr class="table-active">
                   <th scope="row">Adı Soyadı    :</th>
                   <td class="table-active">${motherName.value}</td>
                   </tr>                                                                         
                                           
                    <tr class="table-active">
                    <th scope="row">Mesleği    :</th>
                    <td class="table-active">${motherJob.value}</td>
                    </tr>   

                    <tr class="table-active">
                    <th scope="row">Cep Telefonu    :</th>
                    <td class="table-active">${motherTel.value}</td>
                    </tr>   

                    </tbody>
               </table>

               </div>


              <div class="col-6 ">
              <table class="table" >
                  <tbody class="">

                  <tr class="table-active">
                  <th scope="row">İş Telefonu    :</th>
                  <td class="table-active">${motherJobTel.value}</td>
                  </tr>       

                  <tr class="table-active">
                  <th scope="row">Adres   :</th>
                  <td class="table-active">${motherAdres.value}</td>
                  </tr> 

                  <tr class="table-active">                     
                  <th scope="row">Email    :</th>
                  <td class="table-active">${motherEmail.value}</td>                        
                  </tr>  

                  </tbody>
               </table>

               </div>
              
              
               </div>
               </div>


               //Babasının Bilgiler 

              <div class="container d-flex gap-2 justify-content-center">
              <div class="row">
              <h1> Babasının Bilgileri</h1>
              <div class="col-6 ">

              <table class="table" >               
                   <tbody>

                   <tr class="table-active">
                   <th scope="row">T.C. Kimlik No    :</th>
                   <td class="table-active">${fatherTc.value}</td>
                   </tr> 

                   <tr class="table-active">
                   <th scope="row">Adı Soyadı    :</th>
                   <td class="table-active">${fatherName.value}</td>
                   </tr>                                                                         
                                           
                    <tr class="table-active">
                    <th scope="row">Mesleği    :</th>
                    <td class="table-active">${fatherJob.value}</td>
                    </tr>   

                    <tr class="table-active">
                    <th scope="row">Cep Telefonu    :</th>
                    <td class="table-active">${fatherTel.value}</td>
                    </tr>   

                    </tbody>
               </table>

               </div>


              <div class="col-6 ">
              <table class="table" >
                  <tbody class="">

                  <tr class="table-active">
                  <th scope="row">İş Telefonu    :</th>
                  <td class="table-active">${fatherJobTel.value}</td>
                  </tr>       

                  <tr class="table-active">
                  <th scope="row">Adres   :</th>
                  <td class="table-active">${fatherAdres.value}</td>
                  </tr> 

                  <tr class="table-active">                     
                  <th scope="row">Email    :</th>
                  <td class="table-active">${fatherEmail.value}</td>                        
                  </tr>  

                  </tbody>
               </table>

               </div>
              
              
               </div>
               </div>


               //Öğrencinin Vasi Bilgileri 


              <div class="container d-flex gap-2 justify-content-center">
              <div class="row">
              <h1> Öğrencinin Vasi Bilgileri</h1>
              <div class="col-6 ">

              <table class="table" >               
                   <tbody>

                   <tr class="table-active">
                   <th scope="row">T.C. Kimlik No    :</th>
                   <td class="table-active">${vasiTc.value}</td>
                   </tr> 

                   <tr class="table-active">
                   <th scope="row">Adı Soyadı    :</th>
                   <td class="table-active">${vasiName.value}</td>
                   </tr>                                                                         
                                           
                    <tr class="table-active">
                    <th scope="row">Mesleği    :</th>
                    <td class="table-active">${vasiJob.value}</td>
                    </tr>   

                    <tr class="table-active">
                    <th scope="row">Cep Telefonu    :</th>
                    <td class="table-active">${vasiTel.value}</td>
                    </tr>   

                    </tbody>
               </table>

               </div>


              <div class="col-6 ">
              <table class="table" >
                  <tbody class="">

                  <tr class="table-active">
                  <th scope="row">İş Telefonu    :</th>
                  <td class="table-active">${vasiJobTel.value}</td>
                  </tr>       

                  <tr class="table-active">
                  <th scope="row">Adres   :</th>
                  <td class="table-active">${vasiAdres.value}</td>
                  </tr> 

                  <tr class="table-active">                     
                  <th scope="row">Email    :</th>
                  <td class="table-active">${vasiEmail.value}</td>                        
                  </tr>  

                  </tbody>
               </table>

               </div>    
              

               </div>
               </div>


               //Ödeme Bilgileri


              <div class="container d-flex gap-2 justify-content-center">
              <div class="row">
              <h1> Ödeme Bilgileri</h1>
              <div class="col-6 ">

              <table class="table" >               
                   <tbody>

                   <tr class="table-active">
                   <th scope="row">Ödeme Şekli    :</th>
                   <td class="table-active">${paymentMethod.value}</td>
                   </tr> 

                   <tr class="table-active">
                   <th scope="row">Eğitim Ücreti    :</th>
                   <td class="table-active">${educationFee.value}</td>
                   </tr>                                                                         
                                           
                    <tr class="table-active">
                    <th scope="row">Açıklama    :</th>
                    <td class="table-active">${explanation.value}</td>
                    </tr>                     

                    </tbody>
               </table>

               </div>


               </div>
               </div>
                    

              </div>
            </div>
            
          </div>

    `;
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
});
