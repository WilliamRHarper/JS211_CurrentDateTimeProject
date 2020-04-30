// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  // console.log(currentDate);

 document.getElementById("display-element").innerHTML = currentDate; 
}

//  let num = document.getElementById("numToString").value

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
 const element = document.getElementById("display-numString");
 const numString = "\"" + document.getElementById("numForString").value.toString() + "\"";
 document.getElementById("numForString").value = "";
 element.innerHTML = numString;
}





// Write a JavaScript program to convert a string to the number.
const stringToNum = () => {
document.getElementById("display-stringNum").innerHTML = "";
let numString = document.getElementById("stringForNum").value;
// let numParsed = parseInt(numString);
numString = parseInt(numString);
document.getElementById("display-stringNum").innerHTML = numString;
document.getElementById("stringForNum").value = "";
if (numString === "NaN"){
   document.getElementById("stringForNum").value = "";  
}
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const dataType = () => {
  const data = document.getElementById("dataEntry").value;
    if (data === "null") {
      document.getElementById("display-type").innerHTML = "null";
      document.getElementById("dataEntry").value = "";
    }
     else if (data === "true") {
      document.getElementById("display-type").innerHTML = "boolean";
      document.getElementById("dataEntry").value = "";
    }
    else if (data === "false") {
      document.getElementById("display-type").innerHTML = "boolean";
      document.getElementById("dataEntry").value = "";
    }
    else if (data === ""){
      document.getElementById("display-type").innerHTML = "undefined";
      document.getElementById("dataEntry").value = "";
    }
    else if (data <= Number.MAX_VALUE){
      document.getElementById("display-type").innerHTML = "number";
      document.getElementById("dataEntry").value = "";
    }else {
      document.getElementById("display-type").innerHTML = "NaN, " + typeof data;
      document.getElementById("dataEntry").value = "";
    }
  }

                   

  
// Write a JavaScript program that adds 2 numbers together.
// const add = (num1, num2) => {
//   return num1 + num2;
// }

// add(2,4);
const add = () => {
  let num1 = document.getElementById("add1").value;
  let num2 = document.getElementById("add2").value;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  let sum = num1 + num2;
  document.getElementById("display-add").innerHTML = sum;
  document.getElementById("add1").value = "";
  document.getElementById("add2").value = "";
}



// Write a JavaScript program that runs only when 2 things are true.
// const bothTrue = (x ,y) => {
//   if (x && y) {
//     return true;
//   }
// }

// bothTrue(0, 4);
// bothTrue(2, 4);
const bothTrue = () => {
  document.getElementById("both").innerHTML = "";
  const firstInput = document.getElementById("true1").value;
  const secondInput = document.getElementById("true2").value;
  const thirdInput = document.getElementById("true3").value;
  const fourthInput = document.getElementById("true4").value;
  if (firstInput === secondInput && thirdInput === fourthInput){
    document.getElementById("both").innerHTML = "BOTH are True!!!";
    document.getElementById("true1").value = "";
    document.getElementById("true2").value = "";
    document.getElementById("true3").value = "";
    document.getElementById("true4").value = "";
  }else {
    document.getElementById("true1").value = "";
    document.getElementById("true2").value = "";
    document.getElementById("true3").value = "";
    document.getElementById("true4").value = "";
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.
// const oneTrue = (x ,y) => {
//   if (x || y) {
//     return true;
//   }
// }

// oneTrue(0,4);
// oneTrue(0,0);
const oneTrue = () => {
  document.getElementById("either").innerHTML = "";
  const firstInput = document.getElementById("either1").value;
  const secondInput = document.getElementById("either2").value;
  const thirdInput = document.getElementById("either3").value;
  const fourthInput = document.getElementById("either4").value;
  if (firstInput === secondInput && thirdInput === fourthInput) {
    document.getElementById("either").innerHTML = "";
    document.getElementById("either1").value = "";
    document.getElementById("either2").value = "";
    document.getElementById("either3").value = "";
    document.getElementById("either4").value = "";
  }
  else if (firstInput === secondInput || thirdInput === fourthInput){
    document.getElementById("either").innerHTML = "ONE is True!!!";
    document.getElementById("either1").value = "";
    document.getElementById("either2").value = "";
    document.getElementById("either3").value = "";
    document.getElementById("either4").value = "";  
  }else{
    document.getElementById("either1").value = "";
    document.getElementById("either2").value = "";
    document.getElementById("either3").value = "";
    document.getElementById("either4").value = "";
  }
}


// Write a JavaScript program that runs when both things are not true.
// const notTrue = (x, y) => {
//   if (!x && !y) {
//     return false;
//   }
// }

// notTrue(0, 0);
// notTrue(0, 4);
const notTrue = () => {
  document.getElementById("not").innerHTML = "";
  const firstInput = document.getElementById("not1").value;
  const secondInput = document.getElementById("not2").value;
  const thirdInput = document.getElementById("not3").value;
  const fourthInput = document.getElementById("not4").value;
  if (firstInput !== secondInput && thirdInput !== fourthInput) {
    document.getElementById("not").innerHTML = "LIAR!! LIAR!! pants on FIRE!!!";
    document.getElementById("not1").value = "";
    document.getElementById("not2").value = "";
    document.getElementById("not3").value = "";
    document.getElementById("not4").value = "";
  }else {
    document.getElementById("not1").value = "";
    document.getElementById("not2").value = "";
    document.getElementById("not3").value = "";
    document.getElementById("not4").value = "";
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
