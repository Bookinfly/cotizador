"use strict";

let lvlBox = document.getElementsByClassName("lvl")[0];
let lvl = lvlBox.value;//valores del 1 al 5
let minBox = document.getElementById("min");
let revenueMin = minBox.value;//ganancia
let productionsBox = document.getElementById("productions");
let productions = productionsBox.value;
let taxesBox = document.getElementById("taxes");
let taxes = taxesBox.value;
let billsBox = document.getElementById("bills");
let bills = billsBox.value;
let insuranceBox = document.getElementById("insurance");
let insurance = insuranceBox.value;
let rentBox = document.getElementById("rent");
let rent = rentBox.value;
let othersBox = document.getElementById("others");
let others = othersBox.value;
let timeAmortizeBox = document.getElementById("amortize");
let timeAmortize = timeAmortizeBox.value;
let poolBox = document.getElementById("pool");
let pool = poolBox.value;

lvlBox.addEventListener("change", ()=> {lvl = lvlBox.value});
minBox.addEventListener("change", ()=> {revenueMin = minBox.value});
productionsBox.addEventListener("change", ()=> {productions = productionsBox.value});
taxesBox.addEventListener("change", ()=>{taxes = taxesBox.value});
billsBox.addEventListener("change", ()=>{bills = billsBox.value});
insuranceBox.addEventListener("change", ()=>{insurance = insuranceBox.value});
rentBox.addEventListener("change", ()=>{rent = rentBox.value});
othersBox.addEventListener("change", ()=>{others = othersBox.value});
timeAmortizeBox.addEventListener("change", ()=>{timeAmortize = timeAmortizeBox.value});
poolBox.addEventListener("change", ()=>{pool = poolBox.value});

