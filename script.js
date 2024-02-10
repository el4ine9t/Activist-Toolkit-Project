var factList = [
  "Families arrange marriages thinking that it will protect their daughters from strangers."
  ,/*0*/
  "The COVID-19 pandemic made gender-based violence worse.",/*1*/
  "17 million girls go through forced pregancies as a result of child marriage.",/*2*/
  "Child brides are less likely to go to school."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
//    window.alert("count: "+ count+ "length: "+factList.length);
//  window.alert("count: "+ count+ "length: "+factList.length);
  if (count == factList.length) {
    count = 0;
  } else {
    count++;
  }
}