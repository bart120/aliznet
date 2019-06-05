"use strict"

let calculateMonthlyPayment = function (principal, years, rate = 2) {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));

    return { monthlyPayment, monthlyRate };
};

let obj = calculateMonthlyPayment(200000, 25, 2);
// console.log(obj);
document.getElementById("monthlyPayment").innerHTML = obj.monthlyPayment.toFixed(2);
document.getElementById("monthlyRate").innerHTML = (obj.monthlyRate * 100).toFixed(2);