const maxMedicijnenRecept = 56;
const maxMedicijnenOTC = 07;
const maxMedisch = 55;
const maxDuikongevallen = 07;
const maxJaar = 2001;
const minJaar = 1920;
const jaarRegEx = new RegExp('[1][9][2-9][0-9]|2000');
const minGewicht = 30;
const maxGewicht = 200;
const gewichtRegEx = new RegExp('[3-9][0-9]{1,2}');
const regexTekst = new RegExp('[a-zA-Z|\s]{1,15},?');

var firebaseRef = firebase.database().ref();
var diver = null;
var date = null;

function validateTestForm(){
    var validForm = true;
    date = String(new Date().getTime());
    document.getElementById('duikerId').value = date; 
    diver = firebaseRef.child('divers').child(date);
    if(!checkInputNumeriek('gebJaar', jaarRegEx, minJaar, maxJaar) || !checkInputRadio('geslacht') || !checkInputCheckbox('medicijnenRecept', maxMedicijnenRecept)){
        validForm = false;
    }
    else{
        numberToDb(diver, 'gebJaar');
        radioToDb(diver, 'geslacht');
        checkboxToDb(diver, 'medicijnenRecept', maxMedicijnenRecept);
    }
    window.alert(document.getElementById('duikerId').value);
    return validForm;
}

function validateTest2Form(){
    var validForm = true;    
    window.alert(date);
    window.alert(document.getElementById('duikerId').value);
    date = document.getElementById('duikerId').value;
    window.alert(date);
    diver = firebaseRef.child('divers').child(date);
    if(!checkInputCheckbox('duikOngevallen', maxDuikongevallen)){
        validForm = false;
    }
    else{
        checkboxToDb(diver, 'duikOngevallen', maxMedicijnenRecept);
    }
    return validForm;
}

function textToDb(dbRef, veldNaam){    
    var value = document.getElementById(veldNaam).value;
    checkInputTekst(value);
    dbRef.child(veldNaam).set(value);
}

function numberToDb(dbRef, veldNaam){
    var value = document.getElementById(veldNaam).value;
    dbRef.child(veldNaam).set(value);
}

function radioToDb(dbRef, radioNaam){
    var value = document.querySelector('input[name=' + radioNaam + ']:checked').value;
    dbRef.child(radioNaam).set(value);
}

function checkboxToDb(dbRef, checkboxClass, maxWaarde){
    var array = getCheckedValuesArray(checkboxClass, maxWaarde);
    if(array.length === 0){
        dbRef.child(checkboxClass).set('-');
    }
    else{
        dbRef.child(checkboxClass).set(array);
    }
}

function checkInputCheckbox(checkboxClass, maxWaarde){
    var rightInputCheckbox = true;
    var checkedValues = []; 
    var inputElements = document.getElementsByClassName(checkboxClass);
    for(var i=0; i < inputElements.length; ++i){
          if(inputElements[i].checked){
               checkedValues.push(inputElements[i].value);
          }
    }
    if(checkedValues[checkedValues.length-1] === maxWaarde){
        if(!checkInputTekst(checkboxClass+'Tekst')){
            rightInputCheckbox = false;
        }
    }
    return rightInputCheckbox;
}

function getCheckedValuesArray(checkboxClass, maxWaarde){
    var checkedValues = []; 
    var inputElements = document.getElementsByClassName(checkboxClass);
    for(var i=0; i < inputElements.length; ++i){
          if(inputElements[i].checked){
               checkedValues.push(inputElements[i].value);
          }
    }
    if(checkedValues[checkedValues.length-1] === maxWaarde){
        var value = document.getElementById(checkboxClass+'Tekst').value.split(",");
        checkedValues.pop(checkedValues.length-1);
        for(var i=0; i<value.length;i++){
            checkedValues.push(value[i]);
        }
    }
    return checkedValues;
}

function checkInputNumeriek(veldNaam, regex, min, max){
    var rightInputNumeriek = true;
    var value = document.getElementById(veldNaam).value;
    if(value === ''){
        document.getElementById(veldNaam).style.border = 'solid 2px red';
        document.getElementById(veldNaam+'Uitleg').innerHTML = '<br>Voer hier alstublieft een waarde in.';
        rightInputNumeriek = false;
    }
    else if(!regex.test(value))
    {
        document.getElementById(veldNaam).style.border = 'solid 2px red';
        document.getElementById(veldNaam+'Uitleg').innerHTML = '<br>Voer Hier alstublieft een waarde in tussen ' + min + ' en ' + max + '.';
        rightInputNumeriek = false;
    }
    else{
        document.getElementById(veldNaam).style.border = '';
        document.getElementById(veldNaam+'Uitleg').innerHTML = '';
    }
    return rightInputNumeriek;
}

function checkInputTekst(veldNaam){
    var rightInputTekst = true;
    var value = document.getElementById(veldNaam).value;
    if(value === ''){
        document.getElementById(veldNaam).style.border = 'solid 2px red';
        document.getElementById(veldNaam+'Uitleg').innerHTML = '<br>Voer hier alstublieft een waarde in.';
        rightInputTekst = false;
    }
    else if(!regexTekst.test(value)){
        document.getElementById(veldNaam).style.border = 'solid 2px red';
        document.getElementById(veldNaam+'Uitleg').innerHTML = '<br>Voer hier alstublieft een waarde in met alleen letters uit het alfabet. <br> Indien u hier meerdere waarden in wilt vullen, scheidt deze dan met een komma.';
        rightInputTekst = false;
    }
    else{
        document.getElementById(veldNaam).style.border = '';
        document.getElementById(veldNaam+'Uitleg').innerHTML = '';
    }
    return rightInputTekst;
}

function checkInputRadio(radioNaam){
    var rightInputRadio = true;
    if (document.querySelector('input[name=' + radioNaam + ']:checked') === null){
        document.getElementById(radioNaam+'Uitleg').innerHTML = '<br>Vink hier alstublieft een van de opties aan.';
        rightInputRadio = false;
    }
    else{
        document.getElementById(radioNaam+'Uitleg').innerHTML = '';
    }
    return rightInputRadio;
}
