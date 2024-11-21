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
let resBox = document.getElementsByClassName("section__div--res");

const calculate = ()=> {
    let modExp, final, finalLarge;
    let poolOfMonth = ((pool / timeAmortize) / 12);
    let moneyOfMonth = revenueMin + taxes + bills + insurance + rent + others + poolOfMonth;
    let valueOfPRoductionLarge = moneyOfMonth / productions;
    let valueOfPRoduction = valueOfPRoductionLarge.toFixed(2);
    if (lvl === 1){
        modExp = "- 20%";
        finalLarge = valueOfPRoduction * 0.8;
    } else if (lvl == 2){
        modExp = "- 10%";
        finalLarge = valueOfPRoduction * 0.9;
    }  else if (lvl == 3){
        modExp = false;
        finalLarge = valueOfPRoduction * 1;//algo extraño pasa al quitar el *1
    } else if (lvl == 4){
        modExp = "+ 10%";
        finalLarge = valueOfPRoduction * 1.1;
    } else if (lvl == 5){
        modExp = "+ 20%";
        finalLarge = valueOfPRoduction * 1.2;
    }
    final = finalLarge.toFixed(2);
    return [valueOfPRoduction, final, modExp];
}

const printRes = (valueOfPRoduction, final, modExp)=>{
    let text = `Por su nivel de expertice y equipamento puede buscar estar en un ${modExp} del valor medio del mercado.`;
    let detail = modExp === false ? "" : text;
    let bonusText = `Se sugiere aumentar a un piso de $${final}`
    let bonus = final > valueOfPRoduction ? bonusText : "";
    let resText =
        `El valor por su producción es de <b>$${valueOfPRoduction}.</b><br>
        ${detail}<br>
        <b>${bonus}</b>`;
    resBox[0].innerHTML = resText;
    resBox[0].style.setProperty("display", "block");
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
    let [valueOfPRoduction, final, modExp] = calculate();
    printRes(valueOfPRoduction, final, modExp);
});




