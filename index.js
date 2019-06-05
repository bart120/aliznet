"use strict"

let calculateMonthlyPayment = function (principal, years, rate = 2) {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));

    return { monthlyPayment, monthlyRate };
};

let calculateAmortization = (principal, years, rate) => {
    let { monthlyPayment, monthlyRate } = calculateMonthlyPayment(200000, 25, 2);
    let balance = principal;
    let amortization = new Array(); // []
    /* for(let a of amortization){
        ...
    }
    amortization.forEach(a => {
        ...
    });*/
    for (let y = 0; y < years; y++) {
        let interestY = 0;
        let principalY = 0;
        for (let m = 0; m < 12; m++) {
            let interestM = balance * monthlyRate;
            let principalM = monthlyPayment - interestM;
            interestY += interestM;
            principalY += principalM;
            balance -= principalM;
        }
        amortization.push({ principalY, interestY, balance });
    }
    return { monthlyPayment, monthlyRate, amortization };
};

let obj = calculateAmortization(200000, 25, 2);
console.log(obj);
document.getElementById("monthlyPayment").innerHTML = obj.monthlyPayment.toFixed(2);
document.getElementById("monthlyRate").innerHTML = (obj.monthlyRate * 100).toFixed(2);