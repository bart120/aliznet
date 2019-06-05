"use strict";

var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years) {
    var rate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

    var monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));

    return { monthlyPayment: monthlyPayment, monthlyRate: monthlyRate };
};

var obj = calculateMonthlyPayment(200000, 25, 2);
console.log(obj);
