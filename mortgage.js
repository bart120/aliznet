"use strict"

export class Mortgage {
    constructor(principal, years, rate) {
        this.principal = principal;
        this.years = years;
        this.rate = rate;
    }

    calculateMonthlyPayment() {
        let monthlyRate = 0;
        if (this.rate) {
            monthlyRate = this.rate / 100 / 12;
        }
        let monthlyPayment = this.principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), this.years * 12)));

        return { monthlyPayment, monthlyRate };
    }

    calculateAmortization() { //(1)
        let { monthlyPayment, monthlyRate } = this.calculateMonthlyPayment(200000, 25, 2);
        let balance = this.principal;
        let amortization = new Array(); // []
        /* for(let a of amortization){
            ...
        }
        amortization.forEach(a => {
            ...
        });*/
        for (let y = 0; y < this.years; y++) {
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
    }
}

// module.exports = calculateAmortization;(2)