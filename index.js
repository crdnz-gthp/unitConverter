/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//***** DOM elements****/
const inputSection=document.getElementById("input-section")
const inputElement=document.getElementById("input-tag");
let lengthElement=document.getElementById("length-section")
const volumeElement=document.getElementById("volume-section")
const massElement=document.getElementById("mass-section")
const submitBtn=document.getElementById("submit")
// let meterValue;
// let feetValue;
// let literValue;
// let galoonValue;
// *************GETTİNG İNPUT VALUE***********
function convertUnit(){
        //*******length
        meterValue=inputElement.value;
        feetValue=inputElement.value;
        let resultOfMeterConvert=( meterValue*3.281).toFixed(3)
        let resultOfFeetConvert= (meterValue/3.281).toFixed(3)
        let result=`<p>${inputElement.value} meters = ${resultOfMeterConvert} feet | ${inputElement.value} feet= ${resultOfFeetConvert} meters</p>`
        // console.log(result)
        lengthElement.innerHTML+=result;
        //Volume
        literValue=inputElement.value;
        gallonValue=inputElement.value;
        let resultOfLitersConvert=( literValue*0.264).toFixed(3)
        let resultOfGallonConvert= (gallonValue/0.264).toFixed(3)
        let result2=`<p>${inputElement.value} liters = ${resultOfLitersConvert} gallons | ${inputElement.value} gallons= ${resultOfGallonConvert} liters</p>`
        // console.log(result)
        volumeElement.innerHTML+=result2;
        //Mass
        kilogramValue=inputElement.value;
        poundValue=inputElement.value;
        let resultOfkilogramConvert=( kilogramValue*2.204).toFixed(3)
        let resultOfpoundConvert= (kilogramValue/2.204).toFixed(3)
        let result3=`<p>${inputElement.value} kilos = ${resultOfkilogramConvert} pounds | ${inputElement.value} pounds= ${resultOfpoundConvert} kilos</p>`
        massElement.innerHTML+=result3;
}
count=0;
submitBtn.addEventListener("click", function(){
    if(inputElement.value!=0){
        convertUnit();
        count++;
        console.log(count);
        if(count>3){
            location.reload();
        }
    }else{
        alert("Enter the value, Please!")
        // location.reload();        
    }
    
})



