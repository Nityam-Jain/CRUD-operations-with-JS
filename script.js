let input1 = document.getElementById("fname")
let input2 = document.getElementById("lname")
let input3 = document.getElementById("ftname")
let input4 = document.getElementById("phoneno")
let input5 = document.getElementById("Emailid")
let input6 = document.getElementById("password")
let input7 = document.getElementById("gender")
let input8 = document.getElementById("checkbox")

let btn = document.getElementById('sumit')
const form = document.getElementById('my_form');
btn.addEventListener('click', function (event) {
  event.preventDefault()
  
  //first name validation
  if (input1.value == "") {
   document.getElementById("fnameerror").innerHTML="First Name is empty"
   return false
   
  }
  else if (input1.value.length < 3) {
    document.getElementById("fnameerror").innerHTML="First Name should be minimum 3 charcter"
    return false
    
  }
  
  else {
    document.getElementById("fnameerror").innerHTML=" "
    
    
    
  }
  
  //last name validation
  if (input2.value == "") {
    document.getElementById("lnameerror").innerHTML="Last Name is Empty"
    return false 
    
  }
  else{

    document.getElementById("lnameerror").innerHTML=" "
    
    
   
  }

  //father name validation

  if (input3.value == "") {
    document.getElementById("ftnameerror").innerHTML=" Father's Name is Empty"
    return false
   
  }
  
  else if(input3.value.length<3){
    document.getElementById("ftnameerror").innerHTML=" Name should be minimum 3 charcter"
    return false
   
  }
  else {
    document.getElementById("ftnameerror").innerHTML=" "
    }

  //phone number validation
  
  if (input4.value == "") {
     document.getElementById("pherror").innerHTML=" Phone number field is empty "
     return false
     
  }
 else if(input4.value.length < 10){
  document.getElementById("pherror").innerHTML="Invalid Phone number "
  return false
  
 }
 else{
    document.getElementById("pherror").innerHTML= " "
  }
// emailid validation
let include =  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
if (input5.value ==  "") {
  document.getElementById("emailerror").innerHTML="Email ID field is Empty"
  return false
  
}
else if(!include.test(input5.value)){
  document.getElementById("emailerror").innerHTML="Email ID is Invalid "
  return false
 
}
else{
  document.getElementById("emailerror").innerHTML=""

}
 //password validation
if (input6 == null || input6.value == '' ) {
    document.getElementById("passError").innerHTML="Password field is Empty"
    return false
    
  
}
else if(input6.value.length<8){
  document.getElementById("passError").innerHTML="Password require minimum 8 character"
  return false
  
}
else{
   document.getElementById("passError").innerHTML=" "
}
//gender validation

let isChecked = false; 
let inputRadios = gender.querySelectorAll('input[type="radio"]');
let data;
for (let i = 0; i < inputRadios.length; i++) {
  if (inputRadios[i].checked === true)  {
    data = inputRadios[i].value
    isChecked=true;
    break;
    
    }
}
if (!isChecked) {
  document.getElementById("genError").innerHTML="Please Select your Gender "
 return false
 
}
else{
  document.getElementById("genError").innerHTML=" "
} 

// subject validation
 
let isChecked1 = false; 
let inputcheckbox = checkbox.querySelectorAll('input[type="checkbox"]');
let data1=[];
for (let i = 0; i < inputcheckbox.length; i++) {
  if (inputcheckbox[i].checked === true) {
    data1 .push (inputcheckbox[i].value)
    isChecked1 = true;
  }
}
if (!isChecked1) {
  document.getElementById("subError").innerHTML="Please Select Minimum 2 Subjects "
 return false;
 
}else{
  document.getElementById("subError").innerHTML=" "
  // console.log(data1)
}
//creating delete button
// let delete = document.createElement("button")
// delete.textContent="Delete" 

let formData = {};

formData["fname"] = input1.value;
formData["lname"] = input2.value;
formData["ftname"] = input3.value;
formData["phoneno"] = input4.value;
formData["emailId"] = input5.value;
formData["password"] = input6.value;
formData["gender"] = data;
formData["checkbox"] = data1;


//this is how we can stringify our data and make it json data
const formDataJSON = JSON.stringify(formData);

// Store the JSON string in Local Storage 
localStorage.setItem("formData", formDataJSON);  //key , value

// // Retrieve the JSON string from Local Storage
let dobj= localStorage.getItem("formData");    //for getting data we only need "key" 
// console.log(dobj);


//we can retrive json data through parse it like that
let dataobj=JSON.parse(dobj)
console.log(dataobj);

//inserting the data into table

let tbody = document.querySelector("#tbl tbody");
let editbtn = document.createElement("button")
editbtn.textContent="Edit"
editbtn.className="edtbtn"
editbtn.addEventListener("click",function(){
});
//delete button
let deletebtn = document.createElement("button")
deletebtn.textContent="Delete"
deletebtn.className="dltbtn"
deletebtn.addEventListener("click",function(){
  newRow.remove()
})
const newRow = document.createElement("tr");
newRow.innerHTML = `
    <td>${dataobj["fname"]}</td>
    <td>${dataobj["lname"]}</td>
    <td>${dataobj["ftname"]}</td> 
    <td>${dataobj["phoneno"]}</td>
    <td>${dataobj["emailId"]}</td>
    <td>${dataobj["password"]}</td>
    <td>${dataobj["gender"]}</td>
    <td>${dataobj["checkbox"]}</td>
    <td>
`;
tbody.appendChild(newRow);         //newRow is the where table td is stored
newRow.appendChild(editbtn)          //edit btn
newRow.appendChild(deletebtn)          //delete btn
form.reset();
})





