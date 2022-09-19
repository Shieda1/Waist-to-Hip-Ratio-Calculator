// https://www.omnicalculator.com/health/waist-hip-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const waisthipratioRadio = document.getElementById('waisthipratioRadio');
const waistcircumferenceRadio = document.getElementById('waistcircumferenceRadio');
const hipcircumferenceRadio = document.getElementById('hipcircumferenceRadio');

let waisthipratio;
let waistcircumference = v1;
let hipcircumference = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

waisthipratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist circumference';
  variable2.textContent = 'Hip circumference';
  waistcircumference = v1;
  hipcircumference = v2;
  result.textContent = '';
});

waistcircumferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist-hip ratio';
  variable2.textContent = 'Hip circumference';
  waisthipratio = v1;
  hipcircumference = v2;
  result.textContent = '';
});

hipcircumferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Waist-hip ratio';
  variable2.textContent = 'Waist circumference';
  waisthipratio = v1;
  waistcircumference = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(waisthipratioRadio.checked)
    result.textContent = `Waist-hip ratio = ${computewaisthipratio().toFixed(2)}`;

  else if(waistcircumferenceRadio.checked)
    result.textContent = `Waist circumference = ${computewaistcircumference().toFixed(2)}`;

  else if(hipcircumferenceRadio.checked)
    result.textContent = `Hip circumference = ${computehipcircumference().toFixed(2)}`;
})

// calculation

function computewaisthipratio() {
  return Number(waistcircumference.value) / Number(hipcircumference.value);
}

function computewaistcircumference() {
  return Number(waisthipratio.value) * Number(hipcircumference.value);
}

function computehipcircumference() {
  return Number(waistcircumference.value) / Number(waisthipratio.value);
}