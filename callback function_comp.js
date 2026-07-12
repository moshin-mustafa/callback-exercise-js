
// first call back function
function greet() {
    console.log("Hello");
}

function execute(fn) {
    fn();
    console.log(fn,"this is the fn")
}

execute(greet);

// The call back mini calulator
function addition(a,b){
    let addd=a+b
    console.log(addd)
}
function multiplay(a,b){
    let mul=a*b
    console.log(mul)
}
function sub(a,b) {
 let minus=a-b
 console.log(minus,"thi is for minus")   
}
 function operation(callback,a,b){
 callback(a,b)


}
operation(addition,5,4)
operation(multiplay,5,4)
operation(sub,6,5)



// calback exercise 2
function addtion1(a,b){
    console.log(a+b)
}
function caluaton1(cc,dd,oop){
cc(dd,oop)
}
function calutaion2(md,a,b){
    md(5,4)
}
calutaion2(addtion1)

// call back and sqaure exercise three
function multiplication(a,b){
    console.log(a*b)
}
function sqaure(a,b) {
    let square=a**b
    console.log(square)
    
}
function operation2(a,b,mult) {
    mult(a,b)
    
}

operation2(5,8,multiplication)
operation2(5,8,sqaure)
//  using return  to call 
// exercise 3 part 2


function addition2(a,b) {

    return a+b;

 
}

function operation3(a,b,c){
let re= c(a,b)
return re
 
}
let t=addition2
// console.log(t)
let y=operation3(4,3,t)
console.log(y)


// More exerceise of callback 
// Exercise 1
function multiplyy(a,b){
    return a*b;
}

function operationn(a,b,c){
let r=c(a,b)
return r
}
let yy=multiplyy
let oo=operationn(5,6,yy)
console.log(oo)




// loops and call back











/// //// code with harry  part
// console.log("i am mohsin")
// console.log("i am mustafa")
// setTimeout(() => {
//     console.log("i am insde the set time out")
// }, 2000);
// setTimeout(() => {
//     console.log("i am insde the set time out 2 but i will be excecuted first")
// }, 1000);
// console.log("im outside the set time out")





// const callback=(arg)=>{
//     console.log(arg)
// }
// const loadscript=(src, callback ) =>  {
//     let sc= document.createElement("script")
//     sc.src=src
//     sc.onload=callback("mohsin")
//     document.head.append(sc)
// }
// // loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-apacheconf.min.js",callback)
// loadscript("dom.js",callback)
////////////////////////////////////////////////////////////////////