import { Rate } from './rate';

const rate = new Rate('./rates.json');
console.log('call getrates')

rate.getRates().then(data => {
    let html = '';
    data.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
    document.getElementById("rates").innerHTML = html;
});


console.log('après getrates')
