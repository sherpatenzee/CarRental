"use strict";

window.onload = function () {
  const btn = document.getElementById("estimateBtn");
  btn.onclick = totalCost;
};
function totalCost() {
//days

  let numbers = document.getElementById("numberOfDays");
  let days = numbers.value;

  let total = days * 29.99;

  let cost = document.getElementById("car");
  cost.innerHTML = "Car rental: $ " + total;


//options

  let extraPerDay = 0;
  let tollTag = document.getElementById("tollTag").checked;
  if (tollTag) {
    extraPerDay += 3.95;
  }
  let gps = document.getElementById("gps").checked;
  if (gps) {
    extraPerDay += 4.95;
  }
  let roadside = document.getElementById("roadside").checked;
  if (roadside) {
    extraPerDay += 2.95;
  }
  let opt = document.getElementById("opt");
  opt.innerHTML = "Options: $ " + extraPerDay.toFixed(2);


//radio
  let noRadioBtn = document.getElementById("no");
  let yesRadioBtn = document.getElementById("yes");
  let surCharge = 0;

  if (noRadioBtn.checked) {
    surCharge = 0;
  }
  else if (yesRadioBtn.checked) {
    surCharge = 0.30 * total;
  }

  let u25 = document.getElementById("u25");
  u25.innerHTML = "Under 25 surcharge: $" + surCharge;


//total
  let tot = document.getElementById("total");
  let cal = total + surCharge + extraPerDay;
  tot.innerHTML = "Total due: $ " + cal.toFixed(2);

//return function
  return totalCost;

}




