//!variables and functions
// const name="cs 2023";//const must be intialized 
// let name2="cs 2022";//let can be declared without initiaizing it
// var name3="cs 2024";


// let student;
// student=[1,2,3,4]
// console.log(student)// to display things on the browser
// console.log(name2)

// //arrays
// const arr=[1,2,3,4,5];
// //empty array
// const arr2=[];
// console.log(arr)

// //another array
// const arr3=Array[20];
// console.log(arr3)
// console.log(arr)

// const arr4=["jane",1.2,1,"CS 2023"];//can mix data types
// console.log(arr4)
// arr5[1,2,3,4]
// //loop(for each)
// arr4.forEach(function(element){
// console.log(element)
// });//call back functio or a nested function or function in another function

// // map 
// let arr5=[]
// //to return one value remove the curly brackets
// arr6=arr5.map(function(el){//an arrow function changes the anonymous function
// return el+1
// })
// //an anonymous function is a function without a name

// //function
// function loopArr(){
//  console.log("Hello World")
// }//declared a function
// //arrow function
// const loopArray2=()=>{
//     console.log("Hello cs 50")
// }
// //call
// loopArr()
// console.log(arr6)

// //DOM MANIPULATION
// //first method
// const btn=document.querySelector(".btn")//for the id use #btN
// console.log(btn)//query selector to select an element
// //second method
// const btn2=document.getElementsByTagName("button")
// console.log(btn)
// //method 3
// const btn3=document.getElementById("btn2")
// console.log(btn)
// //click event

// btn.addEventListener("click",()=>{
//     alert("clicked")
// })

//handle form
const error=document.querySelector("small")
const form=document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
 e.preventDefault();
})

//formdata
const formValues=new FormData(form)

const name=formValues.get("name")
const email=formValues.get("email")
const password=formValues.get("password")
const con_password=formValues.get("con_password")

console.log(name.email,password,con_password)

if(password!= con_password){
    error.innerHTML="paswword don't match!!"
}else{
    error.innerHTML=''
}
//send data to the backend
//
fetch("http://localhost:8000/api/v2/login")
//fetch data from an api using the fetch-used to submit the form