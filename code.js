"use strict";

let lvlBox = document.getElementsByClassName("lvl")[0];
let lvl = parseInt(lvlBox.value);//valores del 1 al 5
let minBox = document.getElementById("min");
let revenueMin = parseInt(minBox.value);//ganancia
let productionsBox = document.getElementById("productions");
let productions = parseInt(productionsBox.value);
let taxesBox = document.getElementById("taxes");
let taxes = parseInt(taxesBox.value);
let billsBox = document.getElementById("bills");
let bills = parseInt(billsBox.value);
let insuranceBox = document.getElementById("insurance");
let insurance = parseInt(insuranceBox.value);
let rentBox = document.getElementById("rent");
let rent = parseInt(rentBox.value);
let othersBox = document.getElementById("others");
let others = parseInt(othersBox.value);
let timeAmortizeBox = document.getElementById("amortize");
let timeAmortize = parseInt(timeAmortizeBox.value);
let poolBox = document.getElementById("pool");
let pool = parseInt(poolBox.value);
let button = document.getElementsByClassName("section__div__button");

const calculate = ()=> {
    let poolOfMonth = ((pool / timeAmortize) / 12);
    console.log(poolOfMonth)
    let moneyOfMonth = revenueMin + taxes + bills + insurance + rent + others + poolOfMonth;
    console.log(moneyOfMonth)
    let valueOfPRoduction = moneyOfMonth / productions;
    return valueOfPRoduction;
}

lvlBox.addEventListener("change", ()=> {lvl = parseInt(lvlBox.value)});
minBox.addEventListener("change", ()=> {revenueMin = parseInt(minBox.value)});
productionsBox.addEventListener("change", ()=> {productions = parseInt(productionsBox.value)});
taxesBox.addEventListener("change", ()=>{taxes = parseInt(taxesBox.value)});
billsBox.addEventListener("change", ()=>{bills = parseInt(billsBox.value)});
insuranceBox.addEventListener("change", ()=>{insurance = parseInt(insuranceBox.value)});
rentBox.addEventListener("change", ()=>{rent = parseInt(rentBox.value)});
othersBox.addEventListener("change", ()=>{others = parseInt(othersBox.value)});
timeAmortizeBox.addEventListener("change", ()=>{timeAmortize = parseInt(timeAmortizeBox.value)});
poolBox.addEventListener("change", ()=>{pool = parseInt(poolBox.value)});
button[0].addEventListener("click", ()=>{
    let res = calculate();
    console.log(res)
});




