!function(t){var e={};function n(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(r,l,function(e){return t[e]}.bind(null,l));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);class r{constructor(t,e,n){this.principal=t,this.years=e,this.rate=n}calculateMonthlyPayment(){let t=0;return this.rate&&(t=this.rate/100/12),{monthlyPayment:this.principal*t/(1-Math.pow(1/(1+t),12*this.years)),monthlyRate:t}}calculateAmortization(){let{monthlyPayment:t,monthlyRate:e}=this.calculateMonthlyPayment(2e5,25,2),n=this.principal,r=new Array;for(let l=0;l<this.years;l++){let l=0,a=0;for(let r=0;r<12;r++){let r=n*e,i=t-r;l+=r,a+=i,n-=i}r.push({principalY:a,interestY:l,balance:n})}return{monthlyPayment:t,monthlyRate:e,amortization:r}}}document.getElementById("btnCal").addEventListener("click",()=>{let t=document.getElementById("principal").value,e=document.getElementById("years").value,n=document.getElementById("rate").value,l=new r(t,e,n).calculateAmortization();document.getElementById("monthlyPayment").innerHTML=l.monthlyPayment.toFixed(2),document.getElementById("monthlyRate").innerHTML=(100*l.monthlyRate).toFixed(2);let a="";l.amortization.forEach((t,e)=>{a+=`\n            <tr>\n                <td>${e+1}</td>\n                <td class="currency">${Math.round(t.principalY)}</td>\n                <td class="stretch">\n                    <div class="flex">\n                        <div class="bar principal"\n                            style="flex:${t.principalY};-webkit-flex:${t.principalY}">\n                        </div>\n                        <div class="bar interest"\n                            style="flex:${t.interestY};-webkit-flex:${t.interestY}">\n                        </div>\n                    </div>\n                </td>\n                <td class="currency left">${Math.round(t.interestY)}</td>\n                <td class="currency">${Math.round(t.balance)}</td>\n            </tr>\n        `}),document.getElementById("amortization").innerHTML=a})}]);
//# sourceMappingURL=main.bundle.js.map