console.log("this is a regex project");
//things we need to validate. we'll check the username, email, phone number if they are given properply
//we'll not validate the address because user can enter anything
let names = document.getElementById("name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("number");
let interests = document.getElementById("interest");
let address=document.getElementById("address")
let alert = document.getElementById("alert");
/*  console.log(name,email,number) */
//validating name
//checking if all the things are valid or not
let nameValid = false;
let emailValid = false;
let phoneValid = false;

 interests.addEventListener("focus",(r)=>{
   r.target.style.background= "#e6fff7"
 })
 interests.addEventListener("blur", (t)=>{
t.target.style.background=""
 })
 address.addEventListener("focus",(u)=>{
  u.target.style.background= "#e6fff7"
 })
 address.addEventListener("blur", (p)=>{
  p.target.style.background=""
 })
  

names.addEventListener("focus", (event) => {
  event.target.style.background =
    "#e6fff7"; /* The target event property returns the element that triggered the event. */
});
names.addEventListener("blur", (e) => {
  console.log("name is blurred");
  e.target.style.background = "";
  let regex = /^[A-Za-z]([0-9a-zA-Z]){1,15}$/; //the first is the limitations and then there is quantity[0 to 15]
  //must start with ^ and end with $
  let str = names.value; //str will take the name input value
  console.log(regex, str);
  if (regex.test(str)) { //test returns true or false
    console.log("matched");
    names.classList.remove("is-invalid");
    nameValid = true;
  } else {
    console.log("no match");
    names.classList.add("is-invalid"); //now 'is-invalid' will execute if wrong input is given
  }
});

//validating email
email.addEventListener("focus", (events) => {
  events.target.style.background = "#e6fff7";
});
email.addEventListener("blur", (f) => {
  console.log("the email is blurred");
  f.target.style.background = "";
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;

  console.log(regex, str);
  if (regex.test(str)) {
    console.log("matched");
    email.classList.remove("is-invalid");
    emailValid = true;
  } else {
    console.log("not matched");
    email.classList.add("is-invalid");
  }
});

//validating phone number
phonenumber.addEventListener("focus", (eventss) => {
  eventss.target.style.background = "#e6fff7";
});
phonenumber.addEventListener("blur", (g) => {
  console.log("the number is blurred");
  g.target.style.background = ""; //the colour will disappear
  let regex = /^([0-9]){10}$/;
  let str = phonenumber.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("matched");
    phonenumber.classList.remove("is-invalid");
    phoneValid = true;
  } else {
    console.log("not matched");
    phonenumber.classList.add("is-invalid");
  }
});
let submit = document.getElementById("submit");
submit.addEventListener("submit", (a) => {
  a.preventDefault();
  console.log("submited");
  if (nameValid && phoneValid && emailValid) {
    console.log("everything is valid.");
    
    alert.classList.add('show');
    
  } else {
    console.log("check! something is invalid.");
    let alert2 = document.getElementById("alert2");
    alert2.classList.add("show");
  }
});
