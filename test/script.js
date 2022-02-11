'use strict'
let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let xhr = new XMLHttpRequest();
let objResp;
let currentDollar = document.querySelector('.header__dollar');
let currentEuro = document.querySelector('.header__euro');
let currentZloti = document.querySelector('.header__zloti');
let currentCrona = document.querySelector('.header__crona');

let inputNumber = document.querySelector('.main__input1');
let inputResult = document.querySelector('.main__input2')

let sel1 = document.querySelector('.main__select1');
let sel2 = document.querySelector('.main__select2');

xhr.open('GET', url);
xhr.send();
xhr.onload = function () {

    objResp = JSON.parse(xhr.response);
    console.log(objResp);
    let dollar = objResp[26].rate;
    currentDollar.append(dollar);
    let euro = objResp[32].rate;
    currentEuro.append(euro);
    let zloti = objResp[33].rate;
    currentZloti.append(zloti);
    let crona = objResp[4].rate;
    currentCrona.append(crona);
    let c = { 'USD': dollar, 'EUR': euro, 'PLN': zloti, 'CZK': crona, 'UAH': '1' }


    function summ1() {
        let z = 0;;
        if (sel1.value === sel2.value) {
            inputResult.value = inputNumber.value;
        } else {
            if (sel1.value != 'UAH') {
                z = inputNumber.value * c[sel1.value];
                inputResult.value = Math.ceil((z / c[sel2.value]) * 100) / 100;
            } else {
                inputResult.value = Math.ceil((inputNumber.value / c[sel2.value]) * 100) / 100;
            }
        }
        return z;
    }
    function summ2() {

        inputNumber.value = inputResult.value * c[sel2.value];

    }
    inputNumber.oninput = function () {
        summ1();
    };
    sel1.onchange = function () {
        summ1();
    };
    inputResult.oninput = function () {
        summ2();
    };
    sel2.onchange = function () {
        summ2();
    }
}

