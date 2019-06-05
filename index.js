"use strict"
// let mortgage = require('./mortgage');(2)
import { calculateAmortization } from './mortgage'; //(1)

document.getElementById("btnCal").addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let obj = calculateAmortization(principal, years, rate);
    // console.log(obj);
    document.getElementById("monthlyPayment").innerHTML = obj.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (obj.monthlyRate * 100).toFixed(2);
    obj.amortization.forEach(x => {
        console.log(x.principalY);
    });
});

