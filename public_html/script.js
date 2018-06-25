//var geslacht = document.querySelector('input[name=gender]:checked').value;
//var gebJaar = document.getElementById('gebJaar').value;
//var gewicht = document.getElementById('gewicht').value;
//var lengte = document.getElementById('lengte').value;
//var alcohol = document.querySelector('input[name=alcohol]:checked').value;
//var sigaretten = document.querySelector('input[name=sigaretten]:checked').value;
var firebaseRef = firebase.database().ref();
function btnTest() {
    
    radioToDb(firebaseRef, 'gender');
    textToDb(firebaseRef, 'gebJaar');
    arrayToDb(firebaseRef, )
}

function textToDb(dbRef, veldNaam){
    var value = document.getElementById(veldNaam).value;
    dbRef.child(veldNaam).set(value);
    
}

function radioToDb(dbRef, radioNaam){
    var value = document.querySelector('input[name=' + radioNaam + ']:checked').value;
    dbRef.child(radioNaam).set(value);
}

function checkboxToDb(dbRef, checkboxClass){
    var array = getCheckedValuesArray(checkboxClass);
    dbRef.child(checkboxClass).set(array);
}

function getCheckedValuesArray(checkboxClass){
    var checkedValues = []; 
    var inputElements = document.getElementsByClassName(checkboxClass);
    for(var i=0; i < inputElements.length; ++i){
          if(inputElements[i].checked){
               checkedValues.push(inputElements[i].value);
          }
    }
    return checkedValues;
}