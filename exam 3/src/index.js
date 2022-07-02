import _ from 'lodash';
import $ from 'jquery';
import 'slick-carousel';
import './style.scss';

'use strict';

$(document).ready(function () {
    $('.meatteam__slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    swipeToSlide: true,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    swipeToSlide: true,
                }
            }
        ]
    });
});

let scrollDown = document.querySelector('.content__button');
let proj = document.querySelector('.contact');
scrollDown.addEventListener('click', e => {
    e.preventDefault()
    proj.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth'
    })
})

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("li");
window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

let btnMore = document.querySelector('.portfolio__button');
let port = document.querySelector('.portfolio__hidden');
let btnClose = document.querySelector('.hidden__close')

btnMore.onclick = function () {
    port.style.display = 'flex';
}
btnClose.onclick = function () {
    port.style.display = 'none';
}


function initMap() {
    const palaceMarrin = { lat: 37.550381, lng: 126.9796451 };
    const map = new google.maps.Map(document.querySelector("#map"), {
        zoom: 14,
        center: palaceMarrin,
    });
    const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const beachMarker = new google.maps.Marker({
        position: { lat: 37.550381, lng: 126.9796451 },
        map,
        icon: image,
    });
}
window.initMap = initMap;

let allBtn = document.querySelector('.all');
let webBtn = document.querySelector('.web');
let appsBtn = document.querySelector('.apps');
let iconsBtn = document.querySelector('.icons');
let allBlock = document.querySelector('#all');
let webBlock = document.querySelector('#web');
let appsBlock = document.querySelector('#apps');
let iconsBlock = document.querySelector('#icons');

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('all')) {
        e.target.classList.add('active');
        webBtn.classList.remove('active');
        appsBtn.classList.remove('active');
        iconsBtn.classList.remove('active');
        allBlock.style.display = 'flex';
        webBlock.style.display = 'none';
        appsBlock.style.display = 'none';
        iconsBlock.style.display = 'none';
    }
    if (e.target.classList.contains('web')) {
        e.target.classList.add('active');
        allBtn.classList.remove('active');
        appsBtn.classList.remove('active');
        iconsBtn.classList.remove('active');
        allBlock.style.display = 'none';
        webBlock.style.display = 'flex';
        appsBlock.style.display = 'none';
        iconsBlock.style.display = 'none';
    }
    if (e.target.classList.contains('apps')) {
        e.target.classList.add('active');
        webBtn.classList.remove('active');
        allBtn.classList.remove('active');
        iconsBtn.classList.remove('active');
        allBlock.style.display = 'none';
        webBlock.style.display = 'none';
        appsBlock.style.display = 'flex';
        iconsBlock.style.display = 'none';
    }
    if (e.target.classList.contains('icons')) {
        e.target.classList.add('active')
        webBtn.classList.remove('active');
        appsBtn.classList.remove('active');
        allBtn.classList.remove('active');
        allBlock.style.display = 'none';
        webBlock.style.display = 'none';
        appsBlock.style.display = 'none';
        iconsBlock.style.display = 'flex';
    }
})

let sendBtn = document.querySelector('.contact__button');
let nameInput = document.querySelector('.box__name');
let emailInput = document.querySelector('.box__email');
let messageInput = document.querySelector('.form__text');

sendBtn.onclick = function () {
    if (nameInput.value == "") {
        alert(`Complete the form please!`);
        return false;
    }
    else if (messageInput.value == "") {
        alert(`Complete the form please!`);
        return false;
    }
    else if (emailInput.value == "") {
        alert(`Complete the form please!`);
        return false;
    }
    else {
        alert(`Thanks ${nameInput.value},  please wait and check your e-mail`);
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "alinasikorinska@gmail.com",
            Password: "736B2314788690E8A4537ACA84E188212C63",
            To: `${emailInput.value}`,
            From: "alinasikorinska@gmail.com",
            Subject: `Hi there, ${nameInput.value}! Thanks for your message!`,
            Body: `${messageInput.value}`
        }).then(
            message => alert(message)
        );
    }
}


