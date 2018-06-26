//var geslacht = document.querySelector('input[name=gender]:checked').value;
//var gebJaar = document.getElementById('gebJaar').value;
//var gewicht = document.getElementById('gewicht').value;
//var lengte = document.getElementById('lengte').value;
//var alcohol = document.querySelector('input[name=alcohol]:checked').value;
//var sigaretten = document.querySelector('input[name=sigaretten]:checked').value;
const maxMedicijnenRecept = '56';
const maxMedicijnenOTC = '07';
const maxMedisch = '55';
const maxDuikongevallen = '06';
var gebJaarRegEx = new RegExp('19\d\d|2000$');

var firebaseRef = firebase.database().ref();

function btnTest() {    
    radioToDb(firebaseRef, 'geslacht');
    textToDb(firebaseRef, 'gebJaar');
    checkboxToDb(firebaseRef, 'medicijnenRecept', maxMedicijnenRecept);
    //window.open('inleiding.html', '_self');
}

function validateForm(){
    //console.log(checkInputNumeriek(minGebJaar, maxGebJaar, 'gebJaar'));
    console.log(checkInput('gebJaar', gebJaarRegEx));
    checkInput('gebJaar', gebJaarRegEx);
    //return checkInputNumeriek(minGebJaar, maxGebJaar, 'gebJaar');
}

function textToDb(dbRef, veldNaam){    
    var value = document.getElementById(veldNaam).value;
    if(!checkInputNumeriek(minGebJaar, maxGebJaar, value)){
        window.alert(veldNaam + ' moet een waarde zijn tussen ' + minGebJaar + ' en ' + maxGebJaar + '.' +
                '\n Vul een geldige waarde in.');
    }
    else{
        dbRef.child(veldNaam).set(value);  
    }
}

function radioToDb(dbRef, radioNaam){
    var value = document.querySelector('input[name=' + radioNaam + ']:checked').value;
    dbRef.child(radioNaam).set(value);
}

function checkboxToDb(dbRef, checkboxClass, maxWaarde){
    var array = getCheckedValuesArray(checkboxClass, maxWaarde);
    dbRef.child(checkboxClass).set([array]);
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
        var value = document.getElementById(checkboxClass+'Tekst').value;
        checkedValues.pop(checkedValues.length-1);
        checkedValues.push(value);
    }
    return checkedValues;
}

function checkInput(veldNaam, regex){
    var value = document.getElementById(veldNaam).value;
    /*var correctInput = true;
    
    if (!regex.test(value)){
        correctInput = false;
        console.log(regex.test(value));
    }*/
    return regex.test(value);   
}
