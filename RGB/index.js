'use strict'

$(function () {
    $('#phone').phonecode({
        preferCo: 'ua'
    });
});

$(".chosen-select").chosen({
    no_results_text: "Ничего не найдено"
})


let sendBtn = document.querySelector('.form__button');
let nameInput = document.querySelector('.form__name');
let surnameInput = document.querySelector('.form__surname');
let emailInput = document.querySelector('.form__email');
let numberInput = document.querySelector('#phone');
let cityInput = document.querySelector('.form__city');
let skillsInput = document.querySelector('.chosen-select');
let messageInput = document.querySelector('.form__about');

sendBtn.onclick = function () {
    if (nameInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else if (messageInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else if (emailInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else if (surnameInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else if (numberInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else if (cityInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else if (skillsInput.value == "") {
        alert(`Заполните форму!`);
        return false;
    }
    else {
        alert(`Спасибо ${nameInput.value} ${surnameInput.value},  подождите пока Вам прийдет смс на Вашу почту`);
        const Sib = require('sib-api-v3-sdk')
        require('dotenv').config()
        const client = Sib.ApiClient.instance
        const apiKey = client.authentications['api-key']
        apiKey.apiKey = process.env.API_KEY
        const tranEmailApi = new Sib.TransactionalEmailsApi()
        const sender = {
            email: `${emailInput.value}`,
            name: `${nameInput} ${surnameInput}`,
        }
        const receivers = [
            {
                email: '<hr@rgb-agency.com.ua>',
            },
        ]
        tranEmailApi
            .sendTransacEmail({
                sender,
                to: receivers,
                subject: 'Заполнение формы',
                textContent: `${messageInput}
                ${skillsInput}
                ${cityInput}
                ${numberInput}`,
                params: {
                    role: 'Frontend',
                },
            })
            .then(console.log)
            .catch(console.log)
    }
}
