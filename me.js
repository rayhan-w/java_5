
//console.log("Rayhan Khan"); 

//document.write("Rayhan Khan\n"); 

//window.alert("Rayhan Khan"); 

// var , let , const ; 

// variable (variable name = varaible value / x=1) num1 num_1 

//const a=10; 

//let b=5, c; 

//a=14; 
//c= a%b; 



// let x= rayhan(4,4); 


// function rayhan(a,b){
//     return a+b; 
// }

//   //document.write(x); 

// let C= celcius(98.5);
// function celcius(f){
//             return (f-32)*5/9;
// }

// document.write("celcius scale is",C);

// const person ={
//     firstname: "rayhan", 
//     lastname: "Hayder", 
//     age: 23, 


// };

// console.log(person); 

// console.log(person.age); 

// let cars = ["BMW", "COROLA", "SUZUKI"]; 


// console.log(cars.push("Alion")); 

// let fruits=["Banana","Mango","Apple","orange"];
// console.log(fruits.slice(1,3));



let account = 55; 

if(account>=80 && account<=100){
    document.write("Grade is: A+"); 
}

else if(account>=70 && account<=79)
{
    document.write("Grade is: A"); 
}
else if(account>=60 && account<=69){
    document.write("Grade is A-");
}

else if(account>=50 && account<=59){
    document.write("Grade is B");
}

else if (account>=40 && account<=49){
    document.write("grade is c");
}

else if (account>=33 && account<=39){
    document.write("grade is D");
}


else{
    document.write("Grade is : Fail"); 
}

let agt= 20; 
// write condition with the help of terneary operator 
let voteable = (agt < 21) ? "avilabale": "not avilabale";

console.log(voteable); 

// write a program in js to declare any word is vowel or consonant .
//  write a program in js to define a number is it positive or negeative . 
// write a program in js to define a number of year is lepyear or not . 


// build a simple calculator 

// let x= rayhan(4,4); 


// function rayhan(a,b){
//     return a+b; 
// }


// let y= sub(10,4); 


// function sub(a,b){
//    return a-b; 
// }


// let oper = '-'; 

// switch(oper){
//    case '+': 
//      console.log(x);
// break; 
//   case '-': 
//   console.log(y); 

//   break; 


// }

// for loop simple 1 to 10 execution 
// i++ mean ->  i= i+1 
// let i;


// home work

for(i=0; i<=10; i+=2)
{
    console.log(i);
}



let a;
for(a=1; a<=10; a+=2)
{
    console.log(a);
}

// home work calculator building



let A= total(10,5); 


function total(a,b){
    return a+b; 
}

let B= sub(5,2);
function sub(a,b){
    return a-b ;

}

let C= into(6,3);
function into(a,b){
    return a*b ;
    
}


let D= multipie(18,3);
function multipie(a,b){
    return a/b ;
    
}




let oper= '/';
switch(oper){
    case '+':
      console.log(A);
      break;
       case '-':
        
       console.log(B);
       break;

       case '*':
        console.log(C);

        break;

        case '/':

        console.log(D);
}
