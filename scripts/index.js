"use strict";
  window.onload = function() {
     const btn = document.getElementById("estimateBtn");
     btn.onclick = totalCost;
};
  function totalCost() {
  
    let numbers = document.getElementById("numberOfDays");
    let days = numbers.value;

    let total = days * 29.99;

    let cost = document.getElementById("car");
    cost.innerHTML = "Car rental: $ " + total;

    let extraPerDay = 0;
  let tollTag = document.getElementById("tollTag").checked; 
  if (tollTag ) {
     extraPerDay += 3.95;
  }
  let gps = document.getElementById("gps").checked; 
  if (gps) {
     extraPerDay += 4.95;
  }
  let roadside = document.getElementById("roadside").checked; 
  if (roadside ) {
     extraPerDay += 2.95;
  }
  let opt = document.getElementById("opt");
  opt.innerHTML = "Options: $ " + extraPerDay ;

  let noRadioBtn = document.getElementById("no"); 
let yesRadioBtn = document.getElementById("yes");
let surCharge = 0;

if (noRadioBtn.checked) {
   surCharge= 0;
}
else if (yesRadioBtn.checked) {
   surCharge = 0.30 * 29.99;
}

let u25 = document.getElementById("u25");
 u25.innerHTML = "Under 25 surcharge: $" + surCharge ;
  
 let tot = document.getElementById("total");
  tot.innerHTML = "Total due: $ " + (total + surCharge+ extraPerDay)



  return totalCost;

}




