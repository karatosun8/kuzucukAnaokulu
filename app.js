//! selectors
const studentSave = document.querySelector(".studentSave");
const create = document.querySelector(".create");
const search = document.querySelector(".search input")





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
let getStudentList ;
let nameStudentListDOM = document.querySelector("#nameStudentList");




//Veri kaydettikten sonra aktifleştir
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
                
                        <div class="cardDelete card-body" style="max-height: 300px; overflow-y:auto">
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
studentVeli.value = "";

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
            
            
                     
            
            
                    <div class="container d-flex gap-2 justify-content-center " >
                    <div class="row">
                    <h1> Ödeme Bilgileri</h1>
                    <div class="col-12 ">
            
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
                          <td class="studentExplanation table-active" style="max-width: 600px;">${getStudentList[i].payment.explanation}</td>
                          </tr>                     
            
                          </tbody>
                     </table>
            
                     </div>
            
            
                     </div>
                     </div>
            
                     
            
                     <div class="grid d-md-block">
                        <button class="btn btn-success m-5" type="button" onClick="Edit(${i})">Güncelle</button>
                        <button class="delete btn btn-danger m-5" type="button" onClick="Delete(${i})">Öğrenci Sil</button>
                    </div>
    
    
    `
    
}

function Edit(item){
    
    let  editStudentList = JSON.parse(localStorage.getItem("studentList"));
    const detayEkle =document.querySelector(".detayEkle")
    for (let i =0;i <editStudentList.length; i++){
        if(i == item ){
           
            
    console.log(editStudentList[i].student.studentName);

    detayEkle.innerHTML = `
    <div class="modal-dialog " style="margin: auto">
    <div
      class="modal-content d-flex justify-content-start "
      style="width: 1000px"
    >
      <div>
        <div class="modal-header text-center bg-body-secondary">
          <h1 class="modal-title fs-5 justify-content-center" id="">ÖĞRENCİ VERİ GÜNCELLEME</h1>
          
        </div>
        <div class="modal-body bg-body-secondary">
          <!-- Öğrenci Kayıt Bilgileri Start -->
          <form class="d-flex gap-4 ">
            <div class="mb-3 form-control ">
              <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
                ÖĞRENCİ BİLGİLERİ
              </h1>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="studentTc form-control w-100"
                  id="editStudentTc"
                  placeholder="T.C. Kimlik No"
                  value="${editStudentList[i].student.studentTc}"
                />
                <label for="floatingInput">T.C. Kimlik No</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="studentName form-control w-100"
                  id="editStudentName"
                  placeholder="Adı ve Soyadı"
                  value="${editStudentList[i].student.studentName}"
                />
                <label for="floatingInput">Adı ve Soyadı</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="studentBorn form-control w-100"
                  id="editStudentBorn"
                  placeholder="Doğum Tarihi"
                  value="${editStudentList[i].student.studentBorn}"
                />
                <label for="floatingInput">Doğum Tarihi</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="studentVeli form-control w-100"
                  id="editStudentVeli"
                  placeholder="Veli/Vasi Adı ve Soyadı"
                  value="${editStudentList[i].student.studentVeli}"
                />
                <label for="floatingInput">Veli/Vasi Adı ve Soyadı</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="studentSınıf form-control w-100"
                  id="editStudentSınıf"
                  placeholder="Sınıfı"
                  value="${editStudentList[i].student.studentSınıf}"
                />
                <label for="floatingInput">Sınıfı</label>
              </div>
              <div class="form-floating mb-3 w-100">
                <input
                  type="date"
                  class="studentKayıt form-control"
                  id="editStudentKayıt"
                  placeholder="Okula kayıt/nakil tarihi"
                  value="${editStudentList[i].student.studentKayıt}"
                />
                <label for="floatingInput"
                  >Okula kayıt/nakil tarihi</label
                >
              </div>
              <div class="form-floating mb-3 w-100">
                <input
                  type="text"
                  class="studentAdres form-control"
                  id="editStudentAdres"
                  placeholder="Ev Adresi"
                  value="${editStudentList[i].student.studentAdres}"
                />
                <label for="floatingInput">Ev Adresi</label>
              </div>
            </div>
            <!-- Öğrenci Kayıt Bilgileri End -->

            <!-- Öğrencinin Anne Bilgileri Start -->
            <div class="mb-3 w-100 form-control">
              <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
                ÖĞRENCİNİN ANNE BİLGİLERİ
              </h1>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="motherTc form-control"
                  id="editMotherTc"
                  placeholder="T.C. Kimlik No"
                  value="${editStudentList[i].mother.motherTc}"
                />
                <label for="floatingInput">T.C. Kimlik No</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="motherName form-control"
                  id="editMotherName"
                  placeholder="Adı ve Soyadı"
                  value="${editStudentList[i].mother.motherName}"
                />
                <label for="floatingInput">Adı ve Soyadı</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="motherJob form-control"
                  id="editMotherJob"
                  placeholder="Mesleği"
                  value="${editStudentList[i].mother.motherJob}"
                />
                <label for="floatingInput">Mesleği</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="motherTel form-control"
                  id="editMotherTel"
                  placeholder="Cep Telefonu"
                  value="${editStudentList[i].mother.motherTel}"
                />
                <label for="floatingInput">Cep Telefonu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="motherJobtel form-control"
                  id="editMotherJobTel"
                  placeholder="İş Telefonu"
                  value="${editStudentList[i].mother.motherJobTel}"
                />
                <label for="floatingInput">İs Telefonu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="motherAdres form-control"
                  id="editMotherAdres"
                  placeholder="Ev Adresi"
                  value="${editStudentList[i].mother.motherAdres}"
                />
                <label for="floatingInput">Ev Adresi</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="motherEmail form-control"
                  id="editMotherEmail"
                  placeholder="e-posta"
                  value="${editStudentList[i].mother.motherEmail}"
                />
                <label for="floatingInput">e-posta</label>
              </div>
            </div>

            <!-- Öğrencinin Anne Bilgileri End -->

            <!-- Öğrencinin Baba Bilgileri Start -->

            <div class="mb-3 w-100 form-control">
              <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
                ÖĞRENCİNİN BABA BİLGİLERİ
              </h1>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="fatherTc form-control"
                  id="editFatherTc"
                  placeholder="T.C. Kimlik No"
                  value="${editStudentList[i].father.fatherTc}"
                />
                <label for="floatingInput">T.C. Kimlik No</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="fatherName form-control"
                  id="editFatherName"
                  placeholder="Adı ve Soyadı"
                  value="${editStudentList[i].father.fatherName}"
                />
                <label for="floatingInput">Adı ve Soyadı</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="fatherJob form-control"
                  id="editFatherJob"
                  placeholder="Mesleği"
                  value="${editStudentList[i].father.fatherJob}"
                />
                <label for="floatingInput">Mesleği</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="fatherTel form-control"
                  id="editFatherTel"
                  placeholder="Cep Telefonu"
                  value="${editStudentList[i].father.fatherTel}"
                />
                <label for="floatingInput">Cep Telefonu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="fatherJobtel form-control"
                  id="editFatherJobTel"
                  placeholder="İş Telefonu"
                  value="${editStudentList[i].father.fatherJobTel}"
                />
                <label for="floatingInput">İs Telefonu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="fatherAdres form-control"
                  id="editFatherAdres"
                  placeholder="Ev Adresi"
                  value="${editStudentList[i].father.fatherAdres}"
                />
                <label for="floatingInput">Ev Adresi</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="fatherEmail form-control"
                  id="editFatherEmail"
                  placeholder="e-posta"
                  value="${editStudentList[i].father.fatherEmail}"
                />
                <label for="floatingInput">e-posta</label>
              </div>
            </div>

            <!-- Öğrencinin Baba Bilgileri End -->

            <!-- Öğrencinin Vasi Bilgileri Start -->

            <div class="mb-3 w-100 form-control">
              <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
                ÖĞRENCİNİN VASİ BİLGİLERİ (VARSA)
              </h1>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="vasiTc form-control"
                  id="editVasiTc"
                  placeholder="T.C. Kimlik No"
                  value="${editStudentList[i].vasi.vasiTc}"
                />
                <label for="floatingInput">T.C. Kimlik No</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="vasiName form-control"
                  id="editVasiName"
                  placeholder="Adı ve Soyadı"
                  value="${editStudentList[i].vasi.vasiName}"
                />
                <label for="floatingInput">Adı ve Soyadı</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="vasiJob form-control"
                  id="editVasiJob"
                  placeholder="Mesleği"
                  value="${editStudentList[i].vasi.vasiJob}"
                />
                <label for="floatingInput">Mesleği</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="vasiTel form-control"
                  id="editVasiTel"
                  placeholder="Cep Telefonu"
                  value="${editStudentList[i].vasi.vasiTel}"
                />
                <label for="floatingInput">Cep Telefonu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="vasiJobtel form-control"
                  id="editVasiJobTel"
                  placeholder="İş Telefonu"
                  value="${editStudentList[i].vasi.vasiJobTel}"
                />
                <label for="floatingInput">İs Telefonu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="vasiAdres form-control"
                  id="editVasiAdres"
                  placeholder="Ev Adresi"
                  value="${editStudentList[i].vasi.vasiAdres}"
                />
                <label for="floatingInput">Ev Adresi</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="vasiEmail form-control"
                  id="editVasiEmail"
                  placeholder="e-posta"
                  value="${editStudentList[i].vasi.vasiEmail}"
                />
                <label for="floatingInput">e-posta</label>
              </div>
            </div>

            <!-- Öğrencinin Vasi Bilgileri End -->

            <!--  Ödeme Bilgileri Start -->
            <div class="mb-3 w-100 form-control">
              <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
                ÖDEME BİLGİLERİ
              </h1>

              <div class="form-control mb-3">
                <label class="text-start justify-content-around mb-2"
                  >Ödeme Şekli</label
                >

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="paymentMethod form-control"
                    id="editPaymentMethod"
                    placeholder="Peşin Taksit"
                    value="${editStudentList[i].payment.paymentMethod}"
                  />
                  <label for="floatingInput">Peşin/Taksit</label>
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="educationFee form-control"
                  id="editPaymentEducationFee"
                  placeholder="Eğitim Ücreti"
                  value="${editStudentList[i].payment.educationFee}"
                />
                <label for="floatingInput">Eğitim Ücreti</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="paymentDay form-control"
                  id="editPaymentDay"
                  placeholder="Ödeme Günü"
                  value="${editStudentList[i].payment.paymentDay}"
                />
                <label for="floatingInput">Ödeme Günü</label>
              </div>
              <div class="form-floating">
                <textarea
                  class="explanation form-control"
                  placeholder="Leave a comment here"
                  id="editExplanation"
                  style="height: 300px"
                >${editStudentList[i].payment.explanation}</textarea>
                <label for="floatingTextarea2">Açıklama</label>
              </div>
            </div>

            <!-- Ödeme Bilgiler End -->
          </form>
          <button
            type="submit"
            class=" btn btn-success w-100 text-center"
            data-bs-dismiss="modal"
            onclick="Update(${i})"
          >
            Güncellemeyi Kaydet
          </button>
        </div>
      </div>
    </div>
  </div>
          
    `

        }

        
        
        
    }
 

}


function Update(item){
 
  
  const updateStudentsData = JSON.parse(localStorage.getItem("studentList"));
  console.log(updateStudentsData);
  updateStudentsData[item]= {
    
          student: {
            studentTc: document.getElementById("editStudentTc").value,
            studentName: document.getElementById("editStudentName").value,
            studentBorn: document.getElementById("editStudentBorn").value,
            studentVeli: document.getElementById("editStudentVeli").value,
            studentSınıf: document.getElementById("editStudentSınıf").value,
            studentKayıt: document.getElementById("editStudentKayıt").value,
            studentAdres: document.getElementById("editStudentAdres").value
          },
          mother: {
            motherTc: document.getElementById("editMotherTc").value,
            motherName: document.getElementById("editMotherName").value,
            motherJob: document.getElementById("editMotherJob").value,
            motherTel: document.getElementById("editMotherTel").value,
            motherJobTel: document.getElementById("editMotherJobTel").value,
            motherAdres: document.getElementById("editMotherAdres").value,
            motherEmail: document.getElementById("editMotherEmail").value
          },
          father: {
            fatherTc: document.getElementById("editFatherTc").value,
            fatherName: document.getElementById("editFatherName").value,
            fatherJob: document.getElementById("editFatherJob").value,
            fatherTel: document.getElementById("editFatherTel").value,
            fatherJobTel: document.getElementById("editFatherJobTel").value,
            fatherAdres: document.getElementById("editFatherAdres").value,
            fatherEmail: document.getElementById("editFatherEmail").value
          },
          vasi: {
            vasiTc: document.getElementById("editVasiTc").value,
            vasiName: document.getElementById("editVasiName").value,
            vasiJob: document.getElementById("editVasiJob").value,
            vasiTel: document.getElementById("editVasiTel").value,
            vasiJobTel: document.getElementById("editVasiJobTel").value,
            vasiAdres: document.getElementById("editVasiAdres").value,
            vasiEmail: document.getElementById("editVasiEmail").value
          },
          payment: {
            paymentMethod: document.getElementById("editPaymentMethod").value,
            educationFee: document.getElementById("editPaymentEducationFee").value,
            paymentDay: document.getElementById("editPaymentDay").value,
            explanation: document.getElementById("editExplanation").value,
          }
  }

  
  localStorage.setItem("studentList",JSON.stringify(updateStudentsData))

 
  Read()


}

//Search......



search.addEventListener("keyup",()=>{
  const filterStudentListData = JSON.parse(localStorage.getItem("studentList"))
  const searchInput =search.value.trim().toLowerCase();
  const filteredData =filterStudentListData.filter(item => item.student.studentName.toLowerCase().includes(searchInput));
  
  
  if(searchInput.length >= 1){
    
    create.innerHTML=""
    console.log(filteredData.length);
    console.log("eşleşti");

    for(let i =0;i<filteredData.length;i++){

      console.log(filteredData);
    newCreateStudent = document.createElement("div");
  
                    newCreateStudent.classList.add("card");
                    newCreateStudent.classList.add("text-center");
                    newCreateStudent.setAttribute("style", "width:18rem");
                    newCreateStudent.innerHTML += `
                    
                    
                          <div class="cardDelete card-body " style="max-height: 300px; overflow-y:auto">
                              <div>
                                <h5 class="card-title">ÖĞRENCİ ADI</h5>
                                <p>${filteredData[i].student.studentName}</p>
                              </div>
                            <div>
                                <h5 class="card-title">SINIFI</h5>
                                <p>${filteredData[i].student.studentSınıf}</p>
                            </div>
                              <h5 class="card-title">AÇIKLAMA</h5>
                              <p class="card-text">
                              ${filteredData[i].payment.explanation}
                              </p>        
                              <button class="detayShowbutton btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick="DetaySearch(${i})">Detay</button>           
                              
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
                        <h1 class="headerStudentdata">${filteredData[i].student.studentName}</h1>
                        <div class="col-6 ">
                
                       
                
                        <table class="table" >               
                             <tbody>
                
                             <tr class="table-active">
                             <th scope="row">T.C. Kimlik No    :</th>
                             <td class="studentDatatc table-active">${filteredData[i].student.studentTc}</td>
                             </tr> 
                
                             <tr class="table-active">
                             <th scope="row">Veli/Vasi Adı    :</th>
                             <td class="studentDataVeliname table-active">${filteredData[i].student.studentVeli}</td>
                             </tr>                                                                         
                                                     
                              <tr class="table-active">
                              <th scope="row">Sınıfı    :</th>
                              <td class="studentDatasınıf table-active">${filteredData[i].student.studentSınıf}</td>
                              </tr>   
                
                              </tbody>
                         </table>
                
                         </div>
                
                
                        <div class="col-6 ">
                        <table class="table" >
                            <tbody class="">
                
                            <tr class="table-active">
                            <th scope="row">Doğum Tarihi    :</th>
                            <td class="studentDataborn table-active">${filteredData[i].student.studentBorn}</td>
                            </tr>       
                
                            <tr class="table-active">
                            <th scope="row">Adres   :</th>
                            <td class="studentDataadres table-active">${filteredData[i].student.studentAdres}</td>
                            </tr> 
                
                            <tr class="table-active">                     
                            <th scope="row">Kayıt Tarihi    :</th>
                            <td class="studentDatakayıt table-active">${filteredData[i].student.studentKayıt}</td>                        
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
             <td class="studentMothertc table-active">${filteredData[i].mother.motherTc}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Adı Soyadı    :</th>
             <td class="studentMothername table-active">${filteredData[i].mother.motherName}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Mesleği    :</th>
              <td class="studentMotherjob table-active">${filteredData[i].mother.motherJob}</td>
              </tr>   

              <tr class="table-active">
              <th scope="row">Cep Telefonu    :</th>
              <td class="studentMothertel table-active">${filteredData[i].mother.motherTel}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">İş Telefonu    :</th>
            <td class="studentMotherjobtel table-active">${filteredData[i].mother.motherJobTel}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentMotheradres table-active">${filteredData[i].mother.motherAdres}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Email    :</th>
            <td class="studentMotheremail table-active">${filteredData[i].mother.motherEmail}</td>                        
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
             <td class="studentFathertc table-active">${filteredData[i].father.fatherTc}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Adı Soyadı    :</th>
             <td class="studentFathername table-active">${filteredData[i].father.fatherName}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Mesleği    :</th>
              <td class="studentFatherjob table-active">${filteredData[i].father.fatherJob}</td>
              </tr>   

              <tr class="table-active">
              <th scope="row">Cep Telefonu    :</th>
              <td class="studentFathertel table-active">${filteredData[i].father.fatherTel}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">İş Telefonu    :</th>
            <td class="studentFatherjobtel table-active">${filteredData[i].father.fatherJobTel}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentFatheradres table-active">${filteredData[i].father.fatherAdres}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Email    :</th>
            <td class="studentFatheremail table-active">${filteredData[i].father.fatherEmail}</td>                        
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
             <td class="studentVasitc table-active">${filteredData[i].vasi.vasiTc}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Adı Soyadı    :</th>
             <td class="studentVasiname table-active">${filteredData[i].vasi.vasiName}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Mesleği    :</th>
              <td class="studentVasijob table-active">${filteredData[i].vasi.vasiJob}</td>
              </tr>   

              <tr class="table-active">
              <th scope="row">Cep Telefonu    :</th>
              <td class="studentVasitel table-active">${filteredData[i].vasi.vasiTel}</td>
              </tr>   

              </tbody>
         </table>

         </div>


        <div class="col-6 ">
        <table class="table" >
            <tbody class="">

            <tr class="table-active">
            <th scope="row">İş Telefonu    :</th>
            <td class="studentVasijobtel table-active">${filteredData[i].vasi.vasiJobTel}</td>
            </tr>       

            <tr class="table-active">
            <th scope="row">Adres   :</th>
            <td class="studentVasiadres table-active">${filteredData[i].vasi.vasiAdres}</td>
            </tr> 

            <tr class="table-active">                     
            <th scope="row">Email    :</th>
            <td class="studentVasiemail table-active">${filteredData[i].vasi.vasiEmail}</td>                        
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
             <td class="studentPaymentmethod table-active">${filteredData[i].payment.paymentMethod}</td>
             </tr> 

             <tr class="table-active">
             <th scope="row">Eğitim Ücreti    :</th>
             <td class="studentEducationfee table-active">${filteredData[i].payment.educationFee}</td>
             </tr>       
             
             
             <tr class="table-active">
             <th scope="row">Ödeme Tarihi    :</th>
             <td class="studentPaymentday table-active">${filteredData[i].payment.paymentDay}</td>
             </tr>                                                                         
                                     
              <tr class="table-active">
              <th scope="row">Açıklama    :</th>
              <td class="studentExplanation table-active">${filteredData[i].payment.explanation}</td>
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




                
                      `;
                      create.appendChild(newCreateStudent);
                      
                                
  }
  

} else {
    // create.innerHTML = ""

    if(searchInput.value == []){
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
              <button class="detayShowbutton btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onclick="DetaySearch">Detay</button>           
              
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

    
  }
  Read()
}

})


function DetaySearch(i){
  console.log(i);
  

  const detayEkle =document.querySelector(".studentData")

  const filterStudentListData = JSON.parse(localStorage.getItem("studentList"))
  const searchInput =search.value.trim().toLowerCase();
  const filteredData =filterStudentListData.filter(item => item.student.studentName.toLowerCase().includes(searchInput));



  detayEkle.innerHTML = `

  <div class="container">
  <div class="row">
  
  <h1 class="headerStudentdata">${filteredData[i].student.studentName}</h1>
                  <div class="col-6 ">
                  
          
                 
          
                  <table class="table" >               
                       <tbody>
          
                       <tr class="table-active">
                       <th scope="row">T.C. Kimlik No    :</th>
                       <td class="studentDatatc table-active">${filteredData[i].student.studentTc}</td>
                       </tr> 
          
                       <tr class="table-active">
                       <th scope="row">Veli/Vasi Adı    :</th>
                       <td class="studentDataVeliname table-active">${filteredData[i].student.studentVeli}</td>
                       </tr>                                                                         
                                               
                        <tr class="table-active">
                        <th scope="row">Sınıfı    :</th>
                        <td class="studentDatasınıf table-active">${filteredData[i].student.studentSınıf}</td>
                        </tr>   
          
                        </tbody>
                   </table>
          
                   </div>
          
          
                  <div class="col-6 ">
                  <table class="table" >
                      <tbody class="">
          
                      <tr class="table-active">
                      <th scope="row">Doğum Tarihi    :</th>
                      <td class="studentDataborn table-active">${filteredData[i].student.studentBorn}</td>
                      </tr>       
          
                      <tr class="table-active">
                      <th scope="row">Adres   :</th>
                      <td class="studentDataadres table-active">${filteredData[i].student.studentAdres}</td>
                      </tr> 
          
                      <tr class="table-active">                     
                      <th scope="row">Kayıt Tarihi    :</th>
                      <td class="studentDatakayıt table-active">${filteredData[i].student.studentKayıt}</td>                        
                      </tr>  
          
                      </tbody>
                   </table>
          
                   </div>
                  
                  
                   </div>
                   </div>
          
          
                    
          
          
                  <div class="container d-flex gap-2 justify-content-center">
                  <div class="row">
                  <h1> Annesinin Bilgileri</h1>
                  <div class="col-6 ">
          
                  <table class="table" >               
                       <tbody>
          
                       <tr class="table-active">
                       <th scope="row">T.C. Kimlik No    :</th>
                       <td class="studentMothertc table-active">${filteredData[i].mother.motherTc}</td>
                       </tr> 
          
                       <tr class="table-active">
                       <th scope="row">Adı Soyadı    :</th>
                       <td class="studentMothername table-active">${filteredData[i].mother.motherName}</td>
                       </tr>                                                                         
                                               
                        <tr class="table-active">
                        <th scope="row">Mesleği    :</th>
                        <td class="studentMotherjob table-active">${filteredData[i].mother.motherJob}</td>
                        </tr>   
          
                        <tr class="table-active">
                        <th scope="row">Cep Telefonu    :</th>
                        <td class="studentMothertel table-active">${filteredData[i].mother.motherTel}</td>
                        </tr>   
          
                        </tbody>
                   </table>
          
                   </div>
          
          
                  <div class="col-6 ">
                  <table class="table" >
                      <tbody class="">
          
                      <tr class="table-active">
                      <th scope="row">İş Telefonu    :</th>
                      <td class="studentMotherjobtel table-active">${filteredData[i].mother.motherJobTel}</td>
                      </tr>       
          
                      <tr class="table-active">
                      <th scope="row">Adres   :</th>
                      <td class="studentMotheradres table-active">${filteredData[i].mother.motherAdres}</td>
                      </tr> 
          
                      <tr class="table-active">                     
                      <th scope="row">Email    :</th>
                      <td class="studentMotheremail table-active">${filteredData[i].mother.motherEmail}</td>                        
                      </tr>  
          
                      </tbody>
                   </table>
          
                   </div>
                  
                  
                   </div>
                   </div>
          
          
                    
          
                  <div class="container d-flex gap-2 justify-content-center">
                  <div class="row">
                  <h1> Babasının Bilgileri</h1>
                  <div class="col-6 ">
          
                  <table class="table" >               
                       <tbody>
          
                       <tr class="table-active">
                       <th scope="row">T.C. Kimlik No    :</th>
                       <td class="studentFathertc table-active">${filteredData[i].father.fatherTc}</td>
                       </tr> 
          
                       <tr class="table-active">
                       <th scope="row">Adı Soyadı    :</th>
                       <td class="studentFathername table-active">${filteredData[i].father.fatherName}</td>
                       </tr>                                                                         
                                               
                        <tr class="table-active">
                        <th scope="row">Mesleği    :</th>
                        <td class="studentFatherjob table-active">${filteredData[i].father.fatherJob}</td>
                        </tr>   
          
                        <tr class="table-active">
                        <th scope="row">Cep Telefonu    :</th>
                        <td class="studentFathertel table-active">${filteredData[i].father.fatherTel}</td>
                        </tr>   
          
                        </tbody>
                   </table>
          
                   </div>
          
          
                  <div class="col-6 ">
                  <table class="table" >
                      <tbody class="">
          
                      <tr class="table-active">
                      <th scope="row">İş Telefonu    :</th>
                      <td class="studentFatherjobtel table-active">${filteredData[i].father.fatherJobTel}</td>
                      </tr>       
          
                      <tr class="table-active">
                      <th scope="row">Adres   :</th>
                      <td class="studentFatheradres table-active">${filteredData[i].father.fatherAdres}</td>
                      </tr> 
          
                      <tr class="table-active">                     
                      <th scope="row">Email    :</th>
                      <td class="studentFatheremail table-active">${filteredData[i].father.fatherEmail}</td>                        
                      </tr>  
          
                      </tbody>
                   </table>
          
                   </div>
                  
                  
                   </div>
                   </div>
          
          
                   
          
          
                  <div class="container d-flex gap-2 justify-content-center">
                  <div class="row">
                  <h1> Öğrencinin Vasi Bilgileri</h1>
                  <div class="col-6 ">
          
                  <table class="table" >               
                       <tbody>
          
                       <tr class="table-active">
                       <th scope="row">T.C. Kimlik No    :</th>
                       <td class="studentVasitc table-active">${filteredData[i].vasi.vasiTc}</td>
                       </tr> 
          
                       <tr class="table-active">
                       <th scope="row">Adı Soyadı    :</th>
                       <td class="studentVasiname table-active">${filteredData[i].vasi.vasiName}</td>
                       </tr>                                                                         
                                               
                        <tr class="table-active">
                        <th scope="row">Mesleği    :</th>
                        <td class="studentVasijob table-active">${filteredData[i].vasi.vasiJob}</td>
                        </tr>   
          
                        <tr class="table-active">
                        <th scope="row">Cep Telefonu    :</th>
                        <td class="studentVasitel table-active">${filteredData[i].vasi.vasiTel}</td>
                        </tr>   
          
                        </tbody>
                   </table>
          
                   </div>
          
          
                  <div class="col-6 ">
                  <table class="table" >
                      <tbody class="">
          
                      <tr class="table-active">
                      <th scope="row">İş Telefonu    :</th>
                      <td class="studentVasijobtel table-active">${filteredData[i].vasi.vasiJobTel}</td>
                      </tr>       
          
                      <tr class="table-active">
                      <th scope="row">Adres   :</th>
                      <td class="studentVasiadres table-active">${filteredData[i].vasi.vasiAdres}</td>
                      </tr> 
          
                      <tr class="table-active">                     
                      <th scope="row">Email    :</th>
                      <td class="studentVasiemail table-active">${filteredData[i].vasi.vasiEmail}</td>                        
                      </tr>  
          
                      </tbody>
                   </table>
          
                   </div>    
                  
          
                   </div>
                   </div>
          
          
                   
          
          
                  <div class="container d-flex gap-2 justify-content-center " >
                  <div class="row">
                  <h1> Ödeme Bilgileri</h1>
                  <div class="col-12 ">
          
                  <table class="table card-title" >               
                       <tbody>
          
                       <tr class="table-active">
                       <th scope="row">Ödeme Şekli    :</th>
                       <td class="studentPaymentmethod table-active">${filteredData[i].payment.paymentMethod}</td>
                       </tr> 
          
                       <tr class="table-active">
                       <th scope="row">Eğitim Ücreti    :</th>
                       <td class="studentEducationfee table-active">${filteredData[i].payment.educationFee}</td>
                       </tr>       
                       
                       
                       <tr class="table-active">
                       <th scope="row">Ödeme Tarihi    :</th>
                       <td class="studentPaymentday table-active">${filteredData[i].payment.paymentDay}</td>
                       </tr>                                                                         
                                               
                        <tr class="table-active">
                        <th scope="row">Açıklama    :</th>
                        <td class="studentExplanation table-active" style="max-width: 600px;">${filteredData[i].payment.explanation}</td>
                        </tr>                     
          
                        </tbody>
                   </table>
          
                   </div>
          
          
                   </div>
                   </div>
          
                   
          
                   <div class="grid d-md-block">
                      <button class="btn btn-success m-5" type="button" onClick="searchEdit(${i})">Güncelle</button>
                      <button class="delete btn btn-danger m-5" type="button" onClick="Delete(${i})">Öğrenci Sil</button>
                  </div>
  
  
  `
  
}


function searchEdit(i){


  const filterStudentListData = JSON.parse(localStorage.getItem("studentList"))
  const searchInput =search.value.trim().toLowerCase();
  const filteredData =filterStudentListData.filter(item => item.student.studentName.toLowerCase().includes(searchInput));
  


  
  const detayEkle =document.querySelector(".studentData")
  
         
          
  console.log(filteredData[i].student.studentName);

  detayEkle.innerHTML = `
  <div class="modal-dialog " style="margin: auto">
  <div
    class="modal-content d-flex justify-content-start "
    style="width: 1000px"
  >
    <div>
      <div class="modal-header text-center bg-body-secondary">
        <h1 class="modal-title fs-5 justify-content-center" id="">ÖĞRENCİ VERİ GÜNCELLEME</h1>
        
      </div>
      <div class="modal-body bg-body-secondary">
        <!-- Öğrenci Kayıt Bilgileri Start -->
        <form class="d-flex gap-4 ">
          <div class="mb-3 form-control ">
            <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
              ÖĞRENCİ BİLGİLERİ
            </h1>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="studentTc form-control w-100"
                id="editStudentTc"
                placeholder="T.C. Kimlik No"
                value="${filteredData[i].student.studentTc}"
              />
              <label for="floatingInput">T.C. Kimlik No</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="studentName form-control w-100"
                id="editStudentName"
                placeholder="Adı ve Soyadı"
                value="${filteredData[i].student.studentName}"
              />
              <label for="floatingInput">Adı ve Soyadı</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="date"
                class="studentBorn form-control w-100"
                id="editStudentBorn"
                placeholder="Doğum Tarihi"
                value="${filteredData[i].student.studentBorn}"
              />
              <label for="floatingInput">Doğum Tarihi</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="studentVeli form-control w-100"
                id="editStudentVeli"
                placeholder="Veli/Vasi Adı ve Soyadı"
                value="${filteredData[i].student.studentVeli}"
              />
              <label for="floatingInput">Veli/Vasi Adı ve Soyadı</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="studentSınıf form-control w-100"
                id="editStudentSınıf"
                placeholder="Sınıfı"
                value="${filteredData[i].student.studentSınıf}"
              />
              <label for="floatingInput">Sınıfı</label>
            </div>
            <div class="form-floating mb-3 w-100">
              <input
                type="date"
                class="studentKayıt form-control"
                id="editStudentKayıt"
                placeholder="Okula kayıt/nakil tarihi"
                value="${filteredData[i].student.studentKayıt}"
              />
              <label for="floatingInput"
                >Okula kayıt/nakil tarihi</label
              >
            </div>
            <div class="form-floating mb-3 w-100">
              <input
                type="text"
                class="studentAdres form-control"
                id="editStudentAdres"
                placeholder="Ev Adresi"
                value="${filteredData[i].student.studentAdres}"
              />
              <label for="floatingInput">Ev Adresi</label>
            </div>
          </div>
          <!-- Öğrenci Kayıt Bilgileri End -->

          <!-- Öğrencinin Anne Bilgileri Start -->
          <div class="mb-3 w-100 form-control">
            <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
              ÖĞRENCİNİN ANNE BİLGİLERİ
            </h1>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="motherTc form-control"
                id="editMotherTc"
                placeholder="T.C. Kimlik No"
                value="${filteredData[i].mother.motherTc}"
              />
              <label for="floatingInput">T.C. Kimlik No</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="motherName form-control"
                id="editMotherName"
                placeholder="Adı ve Soyadı"
                value="${filteredData[i].mother.motherName}"
              />
              <label for="floatingInput">Adı ve Soyadı</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="motherJob form-control"
                id="editMotherJob"
                placeholder="Mesleği"
                value="${filteredData[i].mother.motherJob}"
              />
              <label for="floatingInput">Mesleği</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="motherTel form-control"
                id="editMotherTel"
                placeholder="Cep Telefonu"
                value="${filteredData[i].mother.motherTel}"
              />
              <label for="floatingInput">Cep Telefonu</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="motherJobtel form-control"
                id="editMotherJobTel"
                placeholder="İş Telefonu"
                value="${filteredData[i].mother.motherJobTel}"
              />
              <label for="floatingInput">İs Telefonu</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="motherAdres form-control"
                id="editMotherAdres"
                placeholder="Ev Adresi"
                value="${filteredData[i].mother.motherAdres}"
              />
              <label for="floatingInput">Ev Adresi</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="motherEmail form-control"
                id="editMotherEmail"
                placeholder="e-posta"
                value="${filteredData[i].mother.motherEmail}"
              />
              <label for="floatingInput">e-posta</label>
            </div>
          </div>

          <!-- Öğrencinin Anne Bilgileri End -->

          <!-- Öğrencinin Baba Bilgileri Start -->

          <div class="mb-3 w-100 form-control">
            <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
              ÖĞRENCİNİN BABA BİLGİLERİ
            </h1>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="fatherTc form-control"
                id="editFatherTc"
                placeholder="T.C. Kimlik No"
                value="${filteredData[i].father.fatherTc}"
              />
              <label for="floatingInput">T.C. Kimlik No</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="fatherName form-control"
                id="editFatherName"
                placeholder="Adı ve Soyadı"
                value="${filteredData[i].father.fatherName}"
              />
              <label for="floatingInput">Adı ve Soyadı</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="fatherJob form-control"
                id="editFatherJob"
                placeholder="Mesleği"
                value="${filteredData[i].father.fatherJob}"
              />
              <label for="floatingInput">Mesleği</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="fatherTel form-control"
                id="editFatherTel"
                placeholder="Cep Telefonu"
                value="${filteredData[i].father.fatherTel}"
              />
              <label for="floatingInput">Cep Telefonu</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="fatherJobtel form-control"
                id="editFatherJobTel"
                placeholder="İş Telefonu"
                value="${filteredData[i].father.fatherJobTel}"
              />
              <label for="floatingInput">İs Telefonu</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="fatherAdres form-control"
                id="editFatherAdres"
                placeholder="Ev Adresi"
                value="${filteredData[i].father.fatherAdres}"
              />
              <label for="floatingInput">Ev Adresi</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="fatherEmail form-control"
                id="editFatherEmail"
                placeholder="e-posta"
                value="${filteredData[i].father.fatherEmail}"
              />
              <label for="floatingInput">e-posta</label>
            </div>
          </div>

          <!-- Öğrencinin Baba Bilgileri End -->

          <!-- Öğrencinin Vasi Bilgileri Start -->

          <div class="mb-3 w-100 form-control">
            <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
              ÖĞRENCİNİN VASİ BİLGİLERİ (VARSA)
            </h1>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="vasiTc form-control"
                id="editVasiTc"
                placeholder="T.C. Kimlik No"
                value="${filteredData[i].vasi.vasiTc}"
              />
              <label for="floatingInput">T.C. Kimlik No</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="vasiName form-control"
                id="editVasiName"
                placeholder="Adı ve Soyadı"
                value="${filteredData[i].vasi.vasiName}"
              />
              <label for="floatingInput">Adı ve Soyadı</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="vasiJob form-control"
                id="editVasiJob"
                placeholder="Mesleği"
                value="${filteredData[i].vasi.vasiJob}"
              />
              <label for="floatingInput">Mesleği</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="vasiTel form-control"
                id="editVasiTel"
                placeholder="Cep Telefonu"
                value="${filteredData[i].vasi.vasiTel}"
              />
              <label for="floatingInput">Cep Telefonu</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="vasiJobtel form-control"
                id="editVasiJobTel"
                placeholder="İş Telefonu"
                value="${filteredData[i].vasi.vasiJobTel}"
              />
              <label for="floatingInput">İs Telefonu</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="vasiAdres form-control"
                id="editVasiAdres"
                placeholder="Ev Adresi"
                value="${filteredData[i].vasi.vasiAdres}"
              />
              <label for="floatingInput">Ev Adresi</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="vasiEmail form-control"
                id="editVasiEmail"
                placeholder="e-posta"
                value="${filteredData[i].vasi.vasiEmail}"
              />
              <label for="floatingInput">e-posta</label>
            </div>
          </div>

          <!-- Öğrencinin Vasi Bilgileri End -->

          <!--  Ödeme Bilgileri Start -->
          <div class="mb-3 w-100 form-control">
            <h1 class="modal-title fs-5 m-3" id="exampleModalLabel">
              ÖDEME BİLGİLERİ
            </h1>

            <div class="form-control mb-3">
              <label class="text-start justify-content-around mb-2"
                >Ödeme Şekli</label
              >

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="paymentMethod form-control"
                  id="editPaymentMethod"
                  placeholder="Peşin Taksit"
                  value="${filteredData[i].payment.paymentMethod}"
                />
                <label for="floatingInput">Peşin/Taksit</label>
              </div>
            </div>

            <div class="form-floating mb-3">
              <input
                type="text"
                class="educationFee form-control"
                id="editPaymentEducationFee"
                placeholder="Eğitim Ücreti"
                value="${filteredData[i].payment.educationFee}"
              />
              <label for="floatingInput">Eğitim Ücreti</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="date"
                class="paymentDay form-control"
                id="editPaymentDay"
                placeholder="Ödeme Günü"
                value="${filteredData[i].payment.paymentDay}"
              />
              <label for="floatingInput">Ödeme Günü</label>
            </div>
            <div class="form-floating">
              <textarea
                class="explanation form-control"
                placeholder="Leave a comment here"
                id="editExplanation"
                style="height: 300px"
              >${filteredData[i].payment.explanation}</textarea>
              <label for="floatingTextarea2">Açıklama</label>
            </div>
          </div>

          <!-- Ödeme Bilgiler End -->
        </form>
        <button
          type="submit"
          class=" btn btn-success w-100 text-center"
          data-bs-dismiss="modal"
          onclick="searchUpdate(${i})"
        >
          Güncellemeyi Kaydet
        </button>
      </div>
    </div>
  </div>
</div>
        
  `


}


function searchUpdate(i){

  const studentList = JSON.parse(localStorage.getItem("studentList"))
  const searchInput =search.value.trim().toLowerCase();
  const filteredData =studentList.filter(item => item.student.studentName.toLowerCase().includes(searchInput));
  
  console.log(filteredData[i]);
  const updatedStudentList = studentList.map(item => {

    const filteredItem = filteredData.find(filteredItem =>filteredItem.student.studentTc === item.student.studentTc);
    filteredData[i]= {
    
      student: {
        studentTc: document.getElementById("editStudentTc").value,
        studentName: document.getElementById("editStudentName").value,
        studentBorn: document.getElementById("editStudentBorn").value,
        studentVeli: document.getElementById("editStudentVeli").value,
        studentSınıf: document.getElementById("editStudentSınıf").value,
        studentKayıt: document.getElementById("editStudentKayıt").value,
        studentAdres: document.getElementById("editStudentAdres").value
      },
      mother: {
        motherTc: document.getElementById("editMotherTc").value,
        motherName: document.getElementById("editMotherName").value,
        motherJob: document.getElementById("editMotherJob").value,
        motherTel: document.getElementById("editMotherTel").value,
        motherJobTel: document.getElementById("editMotherJobTel").value,
        motherAdres: document.getElementById("editMotherAdres").value,
        motherEmail: document.getElementById("editMotherEmail").value
      },
      father: {
        fatherTc: document.getElementById("editFatherTc").value,
        fatherName: document.getElementById("editFatherName").value,
        fatherJob: document.getElementById("editFatherJob").value,
        fatherTel: document.getElementById("editFatherTel").value,
        fatherJobTel: document.getElementById("editFatherJobTel").value,
        fatherAdres: document.getElementById("editFatherAdres").value,
        fatherEmail: document.getElementById("editFatherEmail").value
      },
      vasi: {
        vasiTc: document.getElementById("editVasiTc").value,
        vasiName: document.getElementById("editVasiName").value,
        vasiJob: document.getElementById("editVasiJob").value,
        vasiTel: document.getElementById("editVasiTel").value,
        vasiJobTel: document.getElementById("editVasiJobTel").value,
        vasiAdres: document.getElementById("editVasiAdres").value,
        vasiEmail: document.getElementById("editVasiEmail").value
      },
      payment: {
        paymentMethod: document.getElementById("editPaymentMethod").value,
        educationFee: document.getElementById("editPaymentEducationFee").value,
        paymentDay: document.getElementById("editPaymentDay").value,
        explanation: document.getElementById("editExplanation").value,
      }
  }
    return filteredItem ? filteredItem : item;
  })

  console.log(updatedStudentList);
  
 
  
  localStorage.setItem("studentList", JSON.stringify(updatedStudentList))
  
  
  Read()


}

 


