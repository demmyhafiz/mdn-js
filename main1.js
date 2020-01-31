// (function() {
//   console.log(myvar); // undefined
//   var myvar = 'local value';
// })();

// console.log(x === undefined); // true
// var x = 3;
// console.log(x);

/* Function declaration */

// foo(); // "bar"

// function foo() {
//   console.log('bar');
// }


// /* Function expression */

// baz(); // TypeError: baz is not a function

// var baz = function() {
//   console.log('bar2');
// };

// document.querySelector('html').onclick = function() {
//   alert('Hi');
// };

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//   let myName = prompt('Please enter your name.');
//   if(!myName || myName === null) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = 'Mozilla is cool, ' + myName;
//   }
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'Mozilla is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// }

// Wait for the page to finish loading
// document.addEventListener('DOMContentLoaded', function () {
//   // Attach `change` event listener to checkbox
//   document.getElementById('billing-checkbox').onchange = toggleBilling;
// }, false);

// function toggleBilling() {
//   // Select the billing text fields
//   var billingItems = document.querySelectorAll('#billing input[type="text"]');

//   // Toggle the billing text fields
//   for (var i = 0; i < billingItems.length; i++) {
//     billingItems[i].disabled = !billingItems[i].disabled;
//   }
// }

document.getElementsById("checkbox1").indeterminate = true;
