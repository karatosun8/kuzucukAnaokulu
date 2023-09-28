//! selectors
const studentSave = document.querySelector(".studentSave");
const create = document.querySelector(".create");




// Student Data
const studentTc = document.querySelector(".studentTc");
const studentName = document.querySelector(".studentName");
const studentBorn = document.querySelector(".studentBorn");
const studentVeli = document.querySelector(".studentVeli");
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



let studentList = []
let getStudentList;
let nameStudentListDOM = document.querySelector("#nameStudentList");

Read()

function Read (){
    nameStudentListDOM.innerHTML ="";
    getStudentList = JSON.parse(localStorage.getItem("studentList"));
    if(studentList =! null) {
        if(getStudentList.length === 0){
            nameStudentListDOM.innerHTML = "Kayıtlı Öğrenci Bulunmamaktadır !!"
        } else {
            for(let i =0;i < getStudentList.length;i++){
                // console.log(getStudentList[i].student.studentSınıf);
                // nameStudentListDOM.innerHTML += 
                newCreateStudent = document.createElement("div");
  
                newCreateStudent.classList.add("card");
                newCreateStudent.classList.add("text-center");
                newCreateStudent.setAttribute("style", "width:18rem");
                newCreateStudent.innerHTML += `
                
                        <div class="cardDelete card-body">
                          <div>
                            <h5 class="card-title">ÖĞRENCİ ADI</h5>
                            <p>${getStudentList[i].student.studentName}</p>
                          </div>
                          <div>
                            <h5 class="card-title">SINIFI</h5>
                            <p>${getStudentList[i].student.studentSınıf}</p>
                          </div>
                          <h5 class="card-title">AÇIKLAMA</h5>
                          <p class="card-text">
                          ${getStudentList[i].payment.explanation}
                          </p>        
                          <button class="detayShowbutton btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onclick="Detay(${i})">Detay</button>           
                          
                        </div>
            
            
                        <div class="offcanvas offcanvas-top " style="height: 800px" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header ">
                      <h2 class="offcanvas-title " id="offcanvasTopLabel"></h2>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="studentData offcanvas-body">
            
                    
                     <!-- Öğrenci Bilgileri Detaylı -->
            
                    <div class="container d-flex gap-2 justify-content-center ">
                    <div class="row detayEkle">
                    
            
                   
                          
            
                    </div>
                  </div>
                
              
                  `;
            
                  create.appendChild(newCreateStudent);
            }
        }
    }
}

function Create(){

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
              <button class="detayShowbutton btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Detay</button>           
              
            </div>


            <div class="offcanvas offcanvas-top " style="height: 800px" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header ">
          <h2 class="offcanvas-title " id="offcanvasTopLabel"></h2>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="studentData offcanvas-body">

        
         <!-- Öğrenci Bilgileri Detaylı -->

        <div class="container d-flex gap-2 justify-content-center ">
        <div class="row">
        <h1 class="headerStudentdata">${studentName.value}</h1>
        <div class="col-6 ">

       

        <table class="table" >               
             <tbody>

             <tr class="table-active">
             <th scope="row">T.C. Kimlik No    :</th>
             <td class="studentDatatc table-active">${studentTc.value}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Veli/Vasi Adı    :</th>
             <td class="studentDataVeliname table-active">${studentVeli.value}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Sınıfı    :</th>
              <td class="studentDatasınıf table-active">${studentSınıf.value}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">Doğum Tarihi    :</th>
            <td class="studentDataborn table-active">${studentBorn.value}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentDataadres table-active">${studentAdres.value}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Kayıt Tarihi    :</th>
            <td class="studentDatakayıt table-active">${studentKayıt.value}</td>                        
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
             <td class="studentMothertc table-active">${motherTc.value}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Adı Soyadı    :</th>
             <td class="studentMothername table-active">${motherName.value}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Mesleği    :</th>
              <td class="studentMotherjob table-active">${motherJob.value}</td>
              </tr>   

              <tr class="table-active">
              <th scope="row">Cep Telefonu    :</th>
              <td class="studentMothertel table-active">${motherTel.value}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">İş Telefonu    :</th>
            <td class="studentMotherjobtel table-active">${motherJobTel.value}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentMotheradres table-active">${motherAdres.value}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Email    :</th>
            <td class="studentMotheremail table-active">${motherEmail.value}</td>                        
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
             <td class="studentFathertc table-active">${fatherTc.value}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Adı Soyadı    :</th>
             <td class="studentFathername table-active">${fatherName.value}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Mesleği    :</th>
              <td class="studentFatherjob table-active">${fatherJob.value}</td>
              </tr>   

              <tr class="table-active">
              <th scope="row">Cep Telefonu    :</th>
              <td class="studentFathertel table-active">${fatherTel.value}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">İş Telefonu    :</th>
            <td class="studentFatherjobtel table-active">${fatherJobTel.value}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentFatheradres table-active">${fatherAdres.value}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Email    :</th>
            <td class="studentFatheremail table-active">${fatherEmail.value}</td>                        
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
             <td class="studentVasitc table-active">${vasiTc.value}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Adı Soyadı    :</th>
             <td class="studentVasiname table-active">${vasiName.value}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Mesleği    :</th>
              <td class="studentVasijob table-active">${vasiJob.value}</td>
              </tr>   

              <tr class="table-active">
              <th scope="row">Cep Telefonu    :</th>
              <td class="studentVasitel table-active">${vasiTel.value}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">İş Telefonu    :</th>
            <td class="studentVasijobtel table-active">${vasiJobTel.value}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentVasiadres table-active">${vasiAdres.value}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Email    :</th>
            <td class="studentVasiemail table-active">${vasiEmail.value}</td>                        
            </tr>  

            </tbody>
         </table>

         </div>    
        

         </div>
         </div>


         //Ödeme Bilgileri


        <div class="container d-flex gap-2 justify-content-center " >
        <div class="row">
        <h1> Ödeme Bilgileri</h1>
        <div class="col-6 ">

        <table class="table card-title" >               
             <tbody>

             <tr class="table-active">
             <th scope="row">Ödeme Şekli    :</th>
             <td class="studentPaymentmethod table-active">${paymentMethod.value}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Eğitim Ücreti    :</th>
             <td class="studentEducationfee table-active">${educationFee.value}</td>
             </tr>       
             
             
             <tr class="table-active">
             <th scope="row">Ödeme Tarihi    :</th>
             <td class="studentPaymentday table-active">${paymentDay.value}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Açıklama    :</th>
              <td class="studentExplanation table-active">${explanation.value}</td>
              </tr>                     

              </tbody>
         </table>

         </div>


         </div>
         </div>

         //Buton

         <div class="grid d-md-block">
            <button class="btn btn-success m-5" type="button" onClick="Edit()">Güncelle</button>
            <button class="delete btn btn-danger m-5" type="button" onClick="Delete()">Öğrenci Sil</button>
        </div>

       
              

        </div>
      </div>
    
  
      `;

      create.appendChild(newCreateStudent);




    const storage = JSON.parse(localStorage.getItem("studentList"));
    let newCreateStudentList = {
        student: {
          studentTc: studentTc.value,
          studentName: studentName.value,
          studentBorn: studentBorn.value,
          studentVeli: studentVeli.value,
          studentSınıf: studentSınıf.value,
          studentKayıt: studentKayıt.value,
          studentAdres: studentAdres.value
        },
        mother: {
          motherTc: motherTc.value,
          motherName: motherName.value,
          motherJob: motherJob.value,
          motherTel: motherTel.value,
          motherJobTel: motherJobTel.value,
          motherAdres: motherAdres.value,
          motherEmail: motherEmail.value
        },
        father: {
          fatherTc: fatherTc.value,
          fatherName: fatherName.value,
          fatherJob: fatherJob.value,
          fatherTel: fatherTel.value,
          fatherJobTel: fatherJobTel.value,
          fatherAdres: fatherAdres.value,
          fatherEmail: fatherEmail.value
        },
        vasi: {
          vasiTc: vasiTc.value,
          vasiName: vasiName.value,
          vasiJob: vasiJob.value,
          vasiTel: vasiTel.value,
          vasiJobTel: vasiJobTel.value,
          vasiAdres: vasiAdres.value,
          vasiEmail: vasiEmail.value
        },
        payment: {
          paymentMethod: paymentMethod.value,
          educationFee: educationFee.value,
          paymentDay: paymentDay.value,
          explanation: explanation.value
        }
      };
      
      if(newCreateStudentList ==""){
        alert("Write a student");
      } else {
        if(storage === null){
            studentList.push(newCreateStudentList);
            localStorage.setItem("studentList",JSON.stringify(studentList));
        } else {
            studentList =JSON.parse(localStorage.getItem("studentList"));
            studentList.push(newCreateStudentList);
            localStorage.setItem("studentList",JSON.stringify(studentList))
        }
      }
      
}

studentSave.addEventListener("click",()=>{

  
    Create()

    Read()

    //Form inputları boşaltmak için

studentTc.value = "";
studentName.value = "";
studentBorn.value = "";
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



    
})

function Delete(item){
    let deleteStudentList = JSON.parse(localStorage.getItem("studentList"));
    deleteStudentList.splice(item,1)
    localStorage.setItem("studentList",JSON.stringify(deleteStudentList))
    Read()
}

function Detay(i){
    console.log(i);
    getStudentList = JSON.parse(localStorage.getItem("studentList"));
    const detayEkle =document.querySelector(".detayEkle")
    console.log(getStudentList[i].student.studentName);

    detayEkle.innerHTML = `

    <h1 class="headerStudentdata">${getStudentList[i].student.studentName}</h1>
                    <div class="col-6 ">
                    
            
                   
            
                    <table class="table" >               
                         <tbody>
            
                         <tr class="table-active">
                         <th scope="row">T.C. Kimlik No    :</th>
                         <td class="studentDatatc table-active">${getStudentList[i].student.studentTc}</td>
                         </tr> 
            
                         <tr class="table-active">
                         <th scope="row">Veli/Vasi Adı    :</th>
                         <td class="studentDataVeliname table-active">${getStudentList[i].student.studentVeli}</td>
                         </tr>                                                                         
                                                 
                          <tr class="table-active">
                          <th scope="row">Sınıfı    :</th>
                          <td class="studentDatasınıf table-active">${getStudentList[i].student.studentSınıf}</td>
                          </tr>   
            
                          </tbody>
                     </table>
            
                     </div>
            
            
                    <div class="col-6 ">
                    <table class="table" >
                        <tbody class="">
            
                        <tr class="table-active">
                        <th scope="row">Doğum Tarihi    :</th>
                        <td class="studentDataborn table-active">${getStudentList[i].student.studentBorn}</td>
                        </tr>       
            
                        <tr class="table-active">
                        <th scope="row">Adres   :</th>
                        <td class="studentDataadres table-active">${getStudentList[i].student.studentAdres}</td>
                        </tr> 
            
                        <tr class="table-active">                     
                        <th scope="row">Kayıt Tarihi    :</th>
                        <td class="studentDatakayıt table-active">${getStudentList[i].student.studentKayıt}</td>                        
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
                         <td class="studentMothertc table-active">${getStudentList[i].mother.motherTc}</td>
                         </tr> 
            
                         <tr class="table-active">
                         <th scope="row">Adı Soyadı    :</th>
                         <td class="studentMothername table-active">${getStudentList[i].mother.motherName}</td>
                         </tr>                                                                         
                                                 
                          <tr class="table-active">
                          <th scope="row">Mesleği    :</th>
                          <td class="studentMotherjob table-active">${getStudentList[i].mother.motherJob}</td>
                          </tr>   
            
                          <tr class="table-active">
                          <th scope="row">Cep Telefonu    :</th>
                          <td class="studentMothertel table-active">${getStudentList[i].mother.motherTel}</td>
                          </tr>   
            
                          </tbody>
                     </table>
            
                     </div>
            
            
                    <div class="col-6 ">
                    <table class="table" >
                        <tbody class="">
            
                        <tr class="table-active">
                        <th scope="row">İş Telefonu    :</th>
                        <td class="studentMotherjobtel table-active">${getStudentList[i].mother.motherJobTel}</td>
                        </tr>       
            
                        <tr class="table-active">
                        <th scope="row">Adres   :</th>
                        <td class="studentMotheradres table-active">${getStudentList[i].mother.motherAdres}</td>
                        </tr> 
            
                        <tr class="table-active">                     
                        <th scope="row">Email    :</th>
                        <td class="studentMotheremail table-active">${getStudentList[i].mother.motherEmail}</td>                        
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
                         <td class="studentFathertc table-active">${getStudentList[i].father.fatherTc}</td>
                         </tr> 
            
                         <tr class="table-active">
                         <th scope="row">Adı Soyadı    :</th>
                         <td class="studentFathername table-active">${getStudentList[i].father.fatherName}</td>
                         </tr>                                                                         
                                                 
                          <tr class="table-active">
                          <th scope="row">Mesleği    :</th>
                          <td class="studentFatherjob table-active">${getStudentList[i].father.fatherJob}</td>
                          </tr>   
            
                          <tr class="table-active">
                          <th scope="row">Cep Telefonu    :</th>
                          <td class="studentFathertel table-active">${getStudentList[i].father.fatherTel}</td>
                          </tr>   
            
                          </tbody>
                     </table>
            
                     </div>
            
            
                    <div class="col-6 ">
                    <table class="table" >
                        <tbody class="">
            
                        <tr class="table-active">
                        <th scope="row">İş Telefonu    :</th>
                        <td class="studentFatherjobtel table-active">${getStudentList[i].father.fatherJobTel}</td>
                        </tr>       
            
                        <tr class="table-active">
                        <th scope="row">Adres   :</th>
                        <td class="studentFatheradres table-active">${getStudentList[i].father.fatherAdres}</td>
                        </tr> 
            
                        <tr class="table-active">                     
                        <th scope="row">Email    :</th>
                        <td class="studentFatheremail table-active">${getStudentList[i].father.fatherEmail}</td>                        
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
                         <td class="studentVasitc table-active">${getStudentList[i].vasi.vasiTc}</td>
                         </tr> 
            
                         <tr class="table-active">
                         <th scope="row">Adı Soyadı    :</th>
                         <td class="studentVasiname table-active">${getStudentList[i].vasi.vasiName}</td>
                         </tr>                                                                         
                                                 
                          <tr class="table-active">
                          <th scope="row">Mesleği    :</th>
                          <td class="studentVasijob table-active">${getStudentList[i].vasi.vasiJob}</td>
                          </tr>   
            
                          <tr class="table-active">
                          <th scope="row">Cep Telefonu    :</th>
                          <td class="studentVasitel table-active">${getStudentList[i].vasi.vasiTel}</td>
                          </tr>   
            
                          </tbody>
                     </table>
            
                     </div>
            
            
                    <div class="col-6 ">
                    <table class="table" >
                        <tbody class="">
            
                        <tr class="table-active">
                        <th scope="row">İş Telefonu    :</th>
                        <td class="studentVasijobtel table-active">${getStudentList[i].vasi.vasiJobTel}</td>
                        </tr>       
            
                        <tr class="table-active">
                        <th scope="row">Adres   :</th>
                        <td class="studentVasiadres table-active">${getStudentList[i].vasi.vasiAdres}</td>
                        </tr> 
            
                        <tr class="table-active">                     
                        <th scope="row">Email    :</th>
                        <td class="studentVasiemail table-active">${getStudentList[i].vasi.vasiEmail}</td>                        
                        </tr>  
            
                        </tbody>
                     </table>
            
                     </div>    
                    
            
                     </div>
                     </div>
            
            
                     //Ödeme Bilgileri
            
            
                    <div class="container d-flex gap-2 justify-content-center " >
                    <div class="row">
                    <h1> Ödeme Bilgileri</h1>
                    <div class="col-6 ">
            
                    <table class="table card-title" >               
                         <tbody>
            
                         <tr class="table-active">
                         <th scope="row">Ödeme Şekli    :</th>
                         <td class="studentPaymentmethod table-active">${getStudentList[i].payment.paymentMethod}</td>
                         </tr> 
            
                         <tr class="table-active">
                         <th scope="row">Eğitim Ücreti    :</th>
                         <td class="studentEducationfee table-active">${getStudentList[i].payment.educationFee}</td>
                         </tr>       
                         
                         
                         <tr class="table-active">
                         <th scope="row">Ödeme Tarihi    :</th>
                         <td class="studentPaymentday table-active">${getStudentList[i].payment.paymentDay}</td>
                         </tr>                                                                         
                                                 
                          <tr class="table-active">
                          <th scope="row">Açıklama    :</th>
                          <td class="studentExplanation table-active">${getStudentList[i].payment.explanation}</td>
                          </tr>                     
            
                          </tbody>
                     </table>
            
                     </div>
            
            
                     </div>
                     </div>
            
                     //Buton
            
                     <div class="grid d-md-block">
                        <button class="btn btn-success m-5" type="button" onClick="Edit(${i})">Güncelle</button>
                        <button class="delete btn btn-danger m-5" type="button" onClick="Delete(${i})">Öğrenci Sil</button>
                    </div>
    
    
    `
    
}

// function Edit(item){
//     let editStudentList = JSON.parse(localStorage.getItem("studentList"));
//     nameStudentListDOM.innerHTML ="";
//     for (let i =0;i <editStudentList.length; i++){
//         if(i == item ){
//             console.log(i);
//             nameStudentListDOM.innerHTML +=`
               
//             `
//         }
//     }

// }



