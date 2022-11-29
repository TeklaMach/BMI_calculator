const BMI_HEADS = document.querySelectorAll('.bmi-head');
const BMI_US = document.getElementById('bmi-us');
const BMI_ME = document.getElementById('bmi-me');
const CALC_BTN = document.getElementById('calc-btn');
const CLR_BTN = document.getElementById('clr-btn');
// event listeners
window.addEventListener('DOMContentLoaded', () => {
    BMI_US.classList.add('show-bmi');
    activeForm = "bmi-us";
});
CALC_BTN.addEventListener('click', BMICalc);
CLR_BTN.addEventListener('click', () => {
    let forms = [...document.forms];
    forms.forEach(form => form.reset());
    clearBMIInfo();
});
// clear the Information
function clearBMIInfo(){
    document.getElementById('bmi-value').innerHTML = "";
    document.getElementById('bmi-category').innerHTML = "";
    document.getElementById('bmi-gender').innerHTML = "";
}
// page changer
BMI_HEADS.forEach(bmiHead => {
    bmiHead.addEventListener('click', () => {
        if(bmiHead.id === "bmi-us-head"){
            removeActiveClass();
            clearBMIInfo();
            bmiHead.classList.add('active-head');
            BMI_ME.classList.remove('show-bmi');
            BMI_US.classList.add('show-bmi');
            activeForm = "bmi-us";
        }
        if(bmiHead.id === "bmi-me-head"){
            removeActiveClass();
            clearBMIInfo();
            bmiHead.classList.add('active-head');
            BMI_US.classList.remove('show-bmi');
            BMI_ME.classList.add('show-bmi');
            activeForm = "bmi-me";
        }
    });
});
// remove active class from heads
function removeActiveClass(){
    BMI_HEADS.forEach(bmiHead => {
        bmiHead.classList.remove('active-head');
    });
}
// main bmi calculation function
function BMICalc(){
    let BMIInfo = getUserInput();
    if(BMIInfo) printBMIResult(BMIInfo);
}
// get input values
function getUserInput(){
    let status;
    // get input values from us unit
    if(activeForm === "bmi-us"){
        let age = document.getElementById('age1').value,
        gender = document.querySelector('#bmi-us input[name = "gender"]').value,
        heightFeet = document.getElementById('feet').value,
        heightInches = document.getElementById('inches').value,
        weightPounds = document.getElementById('pounds').value;
        
        status = checkInputStatus([age, heightFeet, heightInches, weightPounds]);

        if(status == true){
            return calculateBMI({
                gender,
                age, 
                height: (heightFeet) * 12 + (heightInches),
                weight: (weightPounds)
            });
        }
    }
    // get input values form metric units
    if(activeForm === "bmi-me"){
        let age = document.getElementById('age2').value,
        gender = document.querySelector('#bmi-me input[name = "gender"]').value,
        heightCm = document.getElementById('cm').value,
        weightKg = document.getElementById('kg').value;
        
        status = checkInputStatus([age, heightCm, weightKg]);

        if(status === true){
            return calculateBMI({
                gender,
                age,
                height: (heightCm) / 100,
                weight: (weightKg)
            });
        }
    }
    document.querySelector('.alert-error').style.display = "block";
    setTimeout(() => {
        document.querySelector('.alert-error').style.display = "none";
    }, 1000);
    return false;
}
function checkInputStatus(inputs){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].trim() === "" || isNaN(inputs[i])) return false;
    }
    return true;
}
// calculate BMI 
function calculateBMI(values){
    let BMI;
    if(activeForm === 'bmi-us'){
        BMI = (703 * (values.weight / Math.pow(values.height, 2))).toFixed(2);
    } else {
        BMI = (values.weight / Math.pow(values.height, 2)).toFixed(2);
    }
    return {gender: values.gender, BMI};
}
//result output
function printBMIResult(BMIInfo){
    document.getElementById('bmi-value').innerHTML = `${BMIInfo.BMI}`;
    let bmiCategory;
    if(BMIInfo.BMI < 18.5){
        bmiCategory = "Underweight";
    } else if(BMIInfo.BMI >= 18.5 && BMIInfo.BMI <= 24.9){
        bmiCategory = "Normal Weight";
    } else if(BMIInfo.BMI >= 25 && BMIInfo.BMI <= 29.9){
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }
    document.getElementById('bmi-category').innerHTML = `${bmiCategory}`;
}