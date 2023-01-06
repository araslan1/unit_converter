const convertBtn = document.getElementById("convertBtn")
const lengthconversion = document.getElementById("length")
const volumeconversion = document.getElementById("volume")
const massconversion = document.getElementById("mass")
const inputfield = document.getElementById("input")
let inputvalue
let meters, feet, gallons, liters, pounds, kilos

convertBtn.addEventListener("click", function(){
    inputvalue = inputfield.value
    if (inputvalue != ""){
        meters = (inputvalue * 0.304).toFixed(3)
        feet = (inputvalue * 3.281).toFixed(3)
        gallons = (inputvalue * 0.26417).toFixed(3)
        liters = (inputvalue * 3.785).toFixed(3)
        pounds = (inputvalue * 2.205).toFixed(3)
        kilos = (inputvalue * 0.45359).toFixed(3)
        lengthconversion.textContent = `${inputvalue} meters = ${feet} feet | ${inputvalue} feet = ${meters} meters`
        volumeconversion.textContent = `${inputvalue} liters = ${gallons} gallons | ${inputvalue} gallons = ${liters} liters`
        massconversion.textContent = `${inputvalue} kilos = ${pounds} pounds | ${inputvalue} pounds = ${kilos} kilos`
    }
})
