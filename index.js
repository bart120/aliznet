"use strict"
// let mortgage = require('./mortgage');(2)
import { Mortgage } from './mortgage'; //(1)

document.getElementById("btnCal").addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;

    let mortgage = new Mortgage(principal, years, rate);
    let obj = mortgage.calculateAmortization();
    // console.log(obj);
    document.getElementById("monthlyPayment").innerHTML = obj.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (obj.monthlyRate * 100).toFixed(2);

    let html = '';
    obj.amortization.forEach((x, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td class="currency">${Math.round(x.principalY)}</td>
                <td class="stretch">
                    <div class="flex">
                        <div class="bar principal"
                            style="flex:${x.principalY};-webkit-flex:${x.principalY}">
                        </div>
                        <div class="bar interest"
                            style="flex:${x.interestY};-webkit-flex:${x.interestY}">
                        </div>
                    </div>
                </td>
                <td class="currency left">${Math.round(x.interestY)}</td>
                <td class="currency">${Math.round(x.balance)}</td>
            </tr>
        `});
    document.getElementById('amortization').innerHTML = html;
});

