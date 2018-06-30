const maxMedicijnenRecept = '56';
const maxMedicijnenOTC = '07';
const maxMedisch = '55';
const maxDuikongevallen = '07';
const maxJaar = '2001';
const minJaar = '1920';
const jaarRegEx = new RegExp('[1][9][2-9][0-9]|2000');
const minGewicht = '30';
const maxGewicht = '200';
const gewichtRegEx = new RegExp('[3-9][0-9]{1,2}');
const minLengte = '30';
const maxLengte = '200';
const lengteRegEx = new RegExp('[3-9][0-9]{1,2}');
const regexTekst = new RegExp('[a-zA-Z|\s]{1,15},?');

var geslacht = '';
var gebJaar = '';
var gewicht = '';
var lengte = '';
var alcohol = '';
var sigaretten = '';
var duikervaring = '';
var diploma = '';
var duikenVorigJaar = '';
var totaalDuiken = '';
var maxDiepte = '';
var medischActueel = [];
var medischDoorgemaakt = [];
var medicijnenRecept = [];
var medicijnenOTC = [];

//var firebaseRef = firebase.database().ref();

const date = String(new Date().getTime());
//const diver = firebaseRef.child('diver' + date);

function validateTestForm(){
    var validForm = true;
    window.alert(duikongevallenDoc);
    //date = String(new Date().getTime());
    //diver = firebaseRef.child('diver' + date);
    if(!checkInputNumeriek('gebJaar', jaarRegEx, minJaar, maxJaar) || !checkInputRadio('geslacht') || !checkInputCheckbox('medicijnenRecept', maxMedicijnenRecept)){
        validForm = false;
    }
    else{
        checkboxToDb(diver, 'medicijnenRecept', maxMedicijnenRecept);
        numberToDb(diver, 'gebJaar');
        radioToDb(diver, 'geslacht');
        openPagina(test2Doc);
        //document.getElementById('doc').innerHTML = test2Doc;
    }
    return validForm;
}

function validateTest2Form(){
    var validForm = true;
    if(!checkInputCheckbox('duikOngevallen', maxDuikongevallen)){
        validForm = false;
    }
    else{
        checkboxToDb(diver, 'duikOngevallen', maxMedicijnenRecept);
        openPagina(testDoc);
    }
    return validForm;
}

function validatePersoonsgegevensForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputRadio('geslacht') 
            || !checkInputNumeriek('gebJaar', jaarRegEx, minJaar, maxJaar) 
            || !checkInputNumeriek('gewicht', gewichtRegEx, minGewicht, maxGewicht) 
            || !checkInputNumeriek('lengte', lengteRegEx, minLengte, maxLengte)
            || !checkInputRadio('alcohol')
            || !checkInputRadio('sigaretten')){
        validForm = false;
    }
    else{
        geslacht = radioToVar('geslacht');
        gebJaar = numberToVar('gebJaar');
        gewicht = numberToVar('gewicht');
        lengte = numberToVar('lengte');
        alcohol = radioToVar('alcohol');
        sigaretten = radioToVar('sigaretten');
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(duikgeschiedenisDoc);
    }
    return validForm;
}

function validateDuikgeschiedenisForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputRadio('duikervaring')
            || !checkInputRadio('diploma')
            || !checkInputRadio('duikenVorigJaar')
            || !checkInputRadio('totaalDuiken')
            || !checkInputRadio('maxDiepte')){
        validForm = false;
    }
    else{
        duikervaring = radioToVar('duikervaring');
        diploma = radioToVar('diploma');
        duikenVorigJaar = radioToVar('duikenVorigJaar');
        totaalDuiken = radioToVar('totaalDuiken');
        maxDiepte = radioToVar('maxDiepte');
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(duikongevallenDoc);
    }
    return validForm;
}

function validateDuikongevallenForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputCheckbox('duikongevallen', maxDuikongevallen)){
        validForm = false;
    }
    else{
        aandoeningenActueel = checkboxToVar('medischDuikongevallen', maxDuikongevallen);
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(medischActueelDoc);
    }
    return validForm;
}

function validateMedischActueelForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputCheckbox('medischActueel', maxMedisch)){
        validForm = false;
    }
    else{
        medischActueel = checkboxToVar('medischActueel', maxMedisch);
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(medischDoorgemaaktDoc);
    }
    return validForm;
}

function validateMedischDoorgemaaktForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputCheckbox('medischDoorgemaakt', maxMedisch)){
        validForm = false;
    }
    else{
        medischDoorgemaakt = checkboxToVar('medischDoorgemaakt', maxMedisch);
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(medicijnenReceptDoc);
    }
    return validForm;
}

function validateMedicijnenReceptForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputCheckbox('medicijnenRecept', maxMedicijnenRecept)){
        validForm = false;
    }
    else{
        aandoeningenActueel = checkboxToVar('medicijnenRecept', maxMedicijnenRecept);
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(medicijnenOTCDoc);
    }
    return validForm;
}

function validateMedicijnenOTCForm(){
    var validForm = true;
    window.alert('in validateForm');
    if(!checkInputCheckbox('medicijnenOTC', maxMedicijnenOTC)){
        validForm = false;
    }
    else{
        aandoeningenActueel = checkboxToVar('medicijnenOTC', maxMedicijnenOTC);
        window.alert(geslacht + gebJaar + gewicht + lengte + alcohol + sigaretten);
        openPagina(overzichtDoc);
    }
    return validForm;
}

function textToVar(veldNaam){    
    var value = String(document.getElementById(veldNaam).value);
    //dbRef.child(veldNaam).set(value);
    return value;
}

function numberToVar(veldNaam){
    var value = String(document.getElementById(veldNaam).value);
    //dbRef.child(veldNaam).set(value);
    return value;
    //window.alert(variabele)
}

function radioToVar(radioNaam){
    var value = String(document.querySelector('input[name=' + radioNaam + ']:checked').value);
    //dbRef.child(radioNaam).set(value);
    return value;
}

function checkboxToVar(checkboxClass, maxWaarde){
    var array = getCheckedValuesArray(checkboxClass, maxWaarde);
    if(array.length === 0){
        //dbRef.child(checkboxClass).set('-');
        array.push('-');
    }
    //else{
        //dbRef.child(checkboxClass).set(array);
        //variabele = array;
    //}
    return array;
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

function openPagina(paginaNaam){
    document.getElementById('doc').innerHTML = paginaNaam;
}

var testDoc = '<div class="main">' +
              '  <div class="mainbody scroll" id="scrollStyle">' +
        '            <h1>TEST</h1>' +
        '            <h2>Test</h2>' +
        '            Welk van de onderstaande medicijnen die op recept verkrijgbaar is gebruikt u momenteel?' +
        '                <form class="testForm" onsubmit="return validateTestForm()">' +
        '                    <div class="row">' +
        '                        <div class="column">' +
        '                            <span id="titel">Medicijnen voor de longen</span><br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="00"> Luchtweg verwijders<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="01"> Luchtweg ontstekingsremmers<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="02"> Combinatie preparaat<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="03"> Neusspray met ontstekingsremmers<br>' +

        '                            <br><span id="titel">Medicijnen voor het hart</span><br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="10"> Plaspillen<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="11"> B&egrave;tablokkers<br>' +
        '                            <span>Medicijnen om het bloed dun te houden:</span><br>' +
        '                            &emsp;<input type="checkbox" class="medicijnenRecept" value="12"> Aspirine<br>' +
        '                            &emsp;<input type="checkbox" class="medicijnenRecept" value="13"> Acenocoumarol<br>' +
        '                            &emsp;<input type="checkbox" class="medicijnenRecept" value="14"> Nieuwe generatie bloedverdunners<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="15"> cholestorol verlagers <br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="16"> calcium blokkers<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="17"> ACE remmers<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="18"> Nitrobaat spray/ tabletten<br>' +
                            
        '                        </div>' +
        '                        <div class="column">' +
                                    
        '                            <br><span id="titel">Hormonen</span><br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="20"> Anticonceptie <br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="21"> Schildklier<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="22"> Insuline<br>' +

        '                            <br><span id="titel">Medicijnen voor maag/ darmen</span><br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="30"> Maagzuur remmers/ maagbeschermers<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="31"> Ontsteking remmers<br>' +

        '                            <br><span id="titel">Psychisch</span><br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="40"> Medicijnen voor angst en depressie<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="41"> Medicijnen voor ADHD/ ADD<br>' +

        '                            <br><span id="titel">Anders</span><br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="50"> Pijnstillers<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="51"> Antibiotica<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="52"> Medicijnen voor epilepsie<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="53"> Medicijnen ter voorkoming van malaria<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="54"> Medicijnen voor jicht/ reuma<br>          ' +                          
        '                            <input type="checkbox" class="medicijnenRecept" value="55"> Medicijnen tegen suikerziekte<br>' +
        '                            <input type="checkbox" class="medicijnenRecept" value="56"> Anders, namelijk: <input type="text" id="medicijnenReceptTekst"><span id="medicijnenReceptTekstUitleg" class="uitleg"></span>' +
        '                            <br>' +
        '                            <br>' +
        '                            Geboortejaar' +
        '                            <br>' +
        '                            <input type="text" id="gebJaar" class="textInput">' +
        '                            <span id ="gebJaarUitleg" class="uitleg"></span>' +
        '                            <br>' +
        '                            <br>' +
        '                            Geslacht' +
        '                            <br>' +
        '                            <input type="radio" name="geslacht" value="Man"> Man' +
        '                            <input type="radio" name="geslacht" value="Vrouw"> Vrouw<span id="geslachtUitleg" class="uitleg"></span>' +
        '                        </div>' +
        '                    </div>' +
        '                    <br>' +
        '                    <input type ="submit" class="button" value="VOLGENDE">' +
        '                    <br>' +
        '                </form>' +
        '        </div>' +

        '    </div>' +
        '       <div class="menu">'+
        '           <ul>'+
        '               <li><a href="inleiding.html" class="boven" >Inleiding</a></li>'+
        '               <li class="selected"><a href="persoonsgegevens.html">Persoonsgegevens</a></li>'+
        '               <li><a href="duikgeschiedenis.html">Duikgeschiedenis</a></li>'+
        '               <li><a href="duikongevallen.html">Duikgeschiedenis, ongevallen</a></li>'+
        '               <li><a href="medischActueel.html">Medische gegevens, actueel</a></li>'+
        '               <li><a href="medischDoorgemaakt.html">Medische gegevens, doorgemaakt</a></li>'+
        '               <li><a href="medicijnenRecept.html">Medicijnen op recept</a></li>'+
        '               <li><a href="medicijnenOTC.html">Medicijnen zonder recept</a></li>'+
        '               <li><a href="overzicht.html" class="onder">Overzicht</a></li>'+
        '           </ul>'+
        '       </div>';

var test2Doc = '<div class="main">'+
        '           <div class="mainbody scroll" id="scrollStyle">'+
        '               <h1>Test</h1>'+
        '               <h2>Test2HALLO</h2>'+
        '               <p>Wat voor een duikongeval(len) heeft u gehad? U kunt op de (?)s drukken voor meer informatie.</p>'+
        '               <form class="test2Form" onsubmit="return validateTest2Form()" method="post">'+
        '                   Welk van onderstaande duikongevallen heeft u eens ondervonden? '+
        '                   <br>Indien u geen duikongevallen heeft ondervonden, vink &#8217Geen&#8217 aan.<br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="00"> Geen <br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="01"> Longoverdrukletsels<br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="02"> Longoedeem<br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="03"> Onderkoeling<br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="04"> Decompressieziekte<br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="05"> Keel-, neus-, oorproblemen<br>'+
        '                   <input type="checkbox" class="duikOngevallen" value="06"> Verwondingen door giftige of gevaarlijke zeedieren<br>'+
        '                   <input type="submit" class="button" value="VOLGENDE">'+
        '                   <br>'+
        '               </form>'+
        '           </div>'+
        '       </div>'+
        '       <div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li class="selected"><a onclick="openPagina(inleidingDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(inleidingDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';


var inleidingDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '        <h1>Welkom</h1>'+
        '        <p>Beste duikerinstructeur, <br><br>'+
        '            Welkom bij deze vragenlijst. Het doel van deze vragenlijst is om informatie over duikinstructeurs te verzamelen, '+
        '            het betreft hier gegevens over duikervaring en de medische gegevens voor zover relevant in relatie tot het duiken. <br> <br>'+
        '            Deze gegevens zullen worden gebruikt voor wetenschappelijk onderzoek, '+
        '            uitgevoerd onder leiding van prof. dr. R. A. van Hulst in samenwerking met de NOB. <br><br>'+
        '            Doel van het onderzoek is te komen tot een uitgebreide beschrijving van de groep van duikinstructeurs. '+
        '            De gegevens leeftijdsopbouw, duikervaring, gebruik medicijnen, doorgemaakte ziekten en duikaandoeningen. Willen we'+
        '            gebruiken om betere adviezen over duiken te kunnen geven in de toekomst<br>'+
        '            Uiteraard worden deze informatie en de adviezen ter zijner tijd ook bekend gesteld aan de leden en '+
        '            instructeurs van de NOB, bv in de Onderwatersport. <br><br>'+
        '            Werkwijze'+
        '            <ul class="ulInleiding">'+
        '                <li class="liInleiding">De opbouw van de vragenlijst en uw voortgang kunt u in de oranje balk hiernaast zien. Tijdens het invullen kunt u zonder probleem tussen de paginas wisselen. </li>'+
        '                <li class="liInleiding">Het is belangrijk dat u de vragenlijst naar waarheid invult. </li>'+
        '                <li class="liInleiding">Uw gegevens zijn na het invullen niet terug te leiden naar u, <span class="alert">het is dus volledig anoniem.</span> </li>'+
        '                <li class="liInleiding">Zorg dat u tijdens het invullen een overzicht van uw medicijnen bij de hand  heeft zodat u de gegevens hierover zo goed mogelijk in kunt vullen. </li>'+
        '                <li class="liInleiding">Het invullen van de vragenlijst duurt 15-20 minuten. Het is (vanwege de anonimiteit) niet mogelijk om op een ander moment het invullen te hervatten, u zult het dus in &eacute;&eacute;n keer moeten doen. </li>'+
        '                <li class="liInleiding">Indien een vraag onduidelijk is kunt op de toets (?) klikken voor extra informatie.</li>'+
        '            </ul>'+
        '             <br>'+
        '            Wij danken U voor uw bijdrage.'+
        '        </p>'+
        '        <input type ="button" class="button" value="START" onclick="openPagina(persoonsgegevensDoc)">'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li class="selected"><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var persoonsgegevensDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '    <h1>Persoonsgegevens</h1>'+
        '    <p>Hieronder wordt gevraagd naar uw algemene persoonsgegevens.</p>'+
        '    <form class="persoonsgegevensForm" onsubmit="return validatePersoonsgegevensForm()">'+
        '        Geslacht'+
        '        <br>'+
        '        <input type="radio" name="geslacht" value="Man"> Man'+
        '        <input type="radio" name="geslacht" value="Vrouw"> Vrouw'+
        '        <span id="geslachtUitleg" class="uitleg"></span>'+
        '        <br>'+
        '        <br>'+
        '        Geboortejaar'+
        '        <br>'+
        '        <input type="text" id="gebJaar">'+
        '        <span id="gebJaarUitleg" class="uitleg"></span>'+
        '        <br>'+
        '        <br>'+
        '        Gewicht'+
        '        <br>'+
        '        <input type="text" id="gewicht"> kg'+
        '        <span id="gewichtUitleg" class="uitleg"></span>'+
        '        <br>'+
        '        <br>'+
        '        Lengte'+
        '        <br>'+
        '        <input type="text" id="lengte"> cm'+
        '        <span id="lengteUitleg" class="uitleg"></span>'+
        '        <br>'+
        '        <br>'+
        '        Hoeveel eenheden alcohol per week drinkt u gemiddeld?'+
        '        <br>'+
        '        <input type="radio" name="alcohol" value="0"> 0'+
        '        <input type="radio" name="alcohol" value="1"> 1 -5 '+
        '        <input type="radio" name="alcohol" value="2"> 6 -10'+
        '        <input type="radio" name="alcohol" value="3"> 10-15'+
        '        <input type="radio" name="alcohol" value="4"> 16-20'+
        '        <input type="radio" name="alcohol" value="5"> >20'+
        '        <span id="alcoholUitleg" class="uitleg"></span>'+
        '        <br>'+
        '        <br>'+
        '        Hoeveel sigaretten per week rookt u gemiddeld?'+
        '        <br>'+
        '        <input type="radio" name="sigaretten" value="0"> 0'+
        '        <input type="radio" name="sigaretten" value="1"> 1 -10'+
        '        <input type="radio" name="sigaretten" value="2"> 11-20'+
        '        <input type="radio" name="sigaretten" value="3"> 21-20'+
        '        <input type="radio" name="sigaretten" value="4"> 31-40'+
        '        <input type="radio" name="sigaretten" value="5"> >40'+
        '        <span id="sigarettenUitleg" class="uitleg"></span>'+
        '        <br>'+
        '        <br>'+
        '        <input type ="submit" class="button" value="VOLGENDE">'+
        '        <br>'+
        '    </form>'+
        '</div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li class="selected"><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var duikgeschiedenisDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '        <h1>Duikgeschiedenis</h1>'+
        '        <p>Hieronder wordt uw duikervaring uitgevraagd.</p>'+
        '        <form class="duikgeschiedenisForm" onsubmit="return validateDuikgeschiedenisForm()">'+
        '            <br>'+
        '            Hoeveel jaar ervaring heeft u met duiken?'+
        '            <br>'+
        '            <input type="radio" name="duikervaring" value="0"> 0'+
        '            <input type="radio" name="duikervaring" value="1"> 1 -5 '+
        '            <input type="radio" name="duikervaring" value="2"> 6 -10'+
        '            <input type="radio" name="duikervaring" value="3"> 10-15'+
        '            <input type="radio" name="duikervaring" value="4"> 16-20'+
        '            <input type="radio" name="duikervaring" value="5"> >20'+
        '            <span id="duikervaringUitleg" class="uitleg"></span>'+
        '            <br>'+
        '            <br>'+
        '            Hoeveel jaar heeft u uw instructeurs diploma?'+
        '            <br>'+
        '            <input type="radio" name="diploma" value="0"> 0'+
        '            <input type="radio" name="diploma" value="1"> 1 -5 '+
        '            <input type="radio" name="diploma" value="2"> 6 -10'+
        '            <input type="radio" name="diploma" value="3"> 10-15'+
        '            <input type="radio" name="diploma" value="4"> 16-20'+
        '            <input type="radio" name="diploma" value="5"> >20'+
        '            <span id="diplomaUitleg" class="uitleg"></span>'+
        '            <br>'+
        '            <br>'+
        '            Hoe veel duiken heeft u in het afgelopen jaar gemaakt?'+
        '            <br>'+
        '            <input type="radio" name="duikenVorigJaar" value="0"> 0'+
        '            <input type="radio" name="duikenVorigJaar" value="1"> 1  -50 '+
        '            <input type="radio" name="duikenVorigJaar" value="2"> 51 -100'+
        '            <input type="radio" name="duikenVorigJaar" value="3"> >100'+
        '            <span id="duikenVorigJaarUitleg" class="uitleg"></span>'+
        '            <br>'+
        '            <br>'+
        '            Hoe veel duiken heeft u in totaal gemaakt?'+
        '            <br>'+
        '            <input type="radio" name="totaalDuiken" value="0"> <100'+
        '            <input type="radio" name="totaalDuiken" value="1"> 100 -500 '+
        '            <input type="radio" name="totaalDuiken" value="2"> 501 -1000'+
        '            <input type="radio" name="totaalDuiken" value="3"> 1001-2000'+
        '            <input type="radio" name="totaalDuiken" value="4"> >2000'+
        '            <span id="totaalDuikenUitleg" class="uitleg"></span>'+
        '            <br>'+
        '            <br>'+
        '            Wat is de maximale diepte die u ooit gedoken heeft? (in msw)'+
        '            <br>'+
        '            <input type="radio" name="maxDiepte" value="0"> 31 -50'+
        '            <input type="radio" name="maxDiepte" value="1"> 51-100 '+
        '            <input type="radio" name="maxDiepte" value="2"> >100'+
        '            <span id="maxDiepteUitleg" class="uitleg"></span>'+
        '            <br>'+
        '            <br>'+
        '            Welke duikapparatuur gebruikt u?'+
        '            <br>'+
        '            <input type="radio" name="apparatuur" value="0"> Scuba'+
        '            <input type="radio" name="apparatuur" value="1"> Rebreather '+
        '            <input type="radio" name="apparatuur" value="2"> Scuba en rebreather'+
        '            <span id="apparatuurUitleg" class="uitleg"></span>'+
        '            <br>'+
        '            <br>'+
        '            <input type ="submit" class="button" value="VOLGENDE"> '+
        '            <br>'+
        '        </form>'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li class="selected"><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var duikongevallenDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '        <h1>Duikgeschiedenis</h1>'+
        '        <h2>Duikongevallen</h2>'+
        '        <p>Wat voor een duikongeval(len) heeft u gehad? U kunt op de (?)s drukken voor meer informatie.</p>'+
        '        <form class="duikongevallenForm" onsubmit="return validateDuikongevallenForm()">'+
        '            Welk van onderstaande duikongevallen heeft u eens ondervonden? '+
        '            <br>Indien u geen duikongevallen heeft ondervonden, vink Geen aan.<br>'+
        '            <input type="checkbox" class="duikOngevallen" value="00"> Geen <br>'+
        '            <input type="checkbox" class="duikOngevallen" value="01"> Longoverdrukletsels<br>'+
        '            <input type="checkbox" class="duikOngevallen" value="02"> Longoedeem<br>'+
        '            <input type="checkbox" class="duikOngevallen" value="03"> Onderkoeling<br>'+
        '            <input type="checkbox" class="duikOngevallen" value="04"> Decompressieziekte<br>'+
        '            <input type="checkbox" class="duikOngevallen" value="05"> Keel-, neus-, oorproblemen<br>'+
        '            <input type="checkbox" class="duikOngevallen" value="06"> Verwondingen door giftige of gevaarlijke zeedieren<br>'+
        '            <input type ="submit" class="button" value="VOLGENDE"> '+
        '            <br>'+
        '        </form>'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li class="selected"><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var medischActueelDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '    <h1>Medische gegevens</h1>'+
        '    <h2>Actuele aandoeningen</h2>'+
        '    <p>Hieronder kunt u aangeven welke van welke aandoening(en) u momenteel last heeft of in de laatste 12 maanden last heeft gehad. Wanneer uw aandoening niet onder'+
        '        onderstaande categorieÃ«n valt kunt u deze kwijt in de tekstbox onderaan de pagina. Wanneer u hier meerdere aandoeningen in kwijt wilt, kunt u ertussen een comma plaatsen.</p>'+
        '        <form class="medischActueelForm" onsubmit="return validateMedischActueelForm()">'+
        '            <div class="row">'+
        '                <div class="column">'+
        '                    <span id="titel">Luchtwegen</span><br>'+
        '                    <input type="checkbox" class="medischActueel" value="00"> Hooikoorts<br>'+
        '                    <input type="checkbox" class="medischActueel" value="01"> Astma<br>'+
        '                    <input type="checkbox" class="medischActueel" value="02"> COPD (chronische bronchitis)<br>'+
        '                    <input type="checkbox" class="medischActueel" value="03"> Spontane klaplong<br>'+
        '                    <input type="checkbox" class="medischActueel" value="04"> Traumatische klaplong<br>'+
        '                    <input type="checkbox" class="medischActueel" value="05"> Sarcoidose<br>'+
        '                    <input type="checkbox" class="medischActueel" value="06"> Longontsteking<br>'+
        '                    <br><span id="titel">Neurologisch</span><br>'+
        '                    <input type="checkbox" class="medischActueel" value="10"> Terugkerende hoofdpijn<br>'+
        '                    <input type="checkbox" class="medischActueel" value="11"> Migraine<br>'+
        '                    <input type="checkbox" class="medischActueel" value="12"> Hersen- of ruggenmergletsel<br>'+
        '                    <input type="checkbox" class="medischActueel" value="13"> Hersentumor<br>'+
        '                    <input type="checkbox" class="medischActueel" value="14"> Epilepsie<br>'+
        '                    <input type="checkbox" class="medischActueel" value="15"> Hoofdletsel >24uur buiten bewustzijn <br>'+
        '                    <input type="checkbox" class="medischActueel" value="16"> Ziekte van Meni&egrave;re<br>'+
        '                    <input type="checkbox" class="medischActueel" value="17"> TIA<br>'+
        '                    <input type="checkbox" class="medischActueel" value="18"> Aneurysma in de hersenen<br>'+
        '                    <input type="checkbox" class="medischActueel" value="19"> Nek- of rughernia<br>               '+    
        '                    <br><span id="titel">Hart- en vaatziekten</span><br>'+
        '                    <input type="checkbox" class="medischActueel" value="20"> Hoge bloeddruk <br>'+
        '                    <input type="checkbox" class="medischActueel" value="21"> Hartritmestoornis<br>'+
        '                    <input type="checkbox" class="medischActueel" value="22"> Patent foramen ovale (PFO)<br>'+
        '                    <input type="checkbox" class="medischActueel" value="23"> Coronaire hartziekte (kransslagaderen)<br>'+
        '                    <input type="checkbox" class="medischActueel" value="24"> Hartklepafwijking<br>'+
        '                    <input type="checkbox" class="medischActueel" value="25"> Angina pectoris<br>'+
        '                    <input type="checkbox" class="medischActueel" value="26"> Hartinfarct<br>'+
        '                </div>'+
        '                <div class="column">'+
        '                    <span id="titel">Keel-, neus-, oor- en oogproblemen</span><br>'+
        '                    <input type="checkbox" class="medischActueel" value="30"> Klaar problemen oren of sinussen<br>'+
        '                    <input type="checkbox" class="medischActueel" value="31"> Chronische sinusitis<br>'+
        '                    <input type="checkbox" class="medischActueel" value="32"> Chronische middenoor ontsteking<br>'+
        '                    <input type="checkbox" class="medischActueel" value="33"> Trommelvlies perforatie<br>'+
        '                    <input type="checkbox" class="medischActueel" value="34"> Binnenoor operatie<br>'+
        '                    <input type="checkbox" class="medischActueel" value="35"> Ovale of ronde venster letsel<br>'+
        '                    <input type="checkbox" class="medischActueel" value="36"> Oog operatie <12 maanden geleden<br>'+
        '                    <input type="checkbox" class="medischActueel" value="37"> Netvliesloslating<br>'+
        '                    <br><span id="titel">Psychisch</span><br>'+
        '                    <input type="checkbox" class="medischActueel" value="40"> Claustrofobie<br>'+
        '                    <input type="checkbox" class="medischActueel" value="41"> Angststoornis<br>'+
        '                    <input type="checkbox" class="medischActueel" value="42"> Depressie<br>'+
        '                    <input type="checkbox" class="medischActueel" value="43"> Drugs- of alcoholverslaving<br>'+
        '                    <input type="checkbox" class="medischActueel" value="44"> Paniekstoornis<br>'+
        '                    <input type="checkbox" class="medischActueel" value="45"> Schizofrenie<br>'+
        '                    <input type="checkbox" class="medischActueel" value="46"> ADHD/ ADD<br>'+
        '                    <br><span id="titel">Anders</span><br>'+
        '                    <input type="checkbox" class="medischActueel" value="50"> Gewrichtsletsel of operatie aan gewricht<br>'+
        '                    <input type="checkbox" class="medischActueel" value="51"> Diabetes I/ II<br>'+
        '                    <input type="checkbox" class="medischActueel" value="52"> Maagzweer<br>'+
        '                    <input type="checkbox" class="medischActueel" value="53"> Ziekte van Crohn of colitis ulcerosa<br>'+
        '                    <input type="checkbox" class="medischActueel" value="54"> Reuma<br>'+
        '                    <input type="checkbox" class="medischActueel" value="55"> Anders, namelijk: <input type="text" id="medischActueelTekst"><span id="medischActueelTekstUitleg" class="uitleg"></span>'+
        '                </div>'+
        '            </div>'+
        '            <br>'+
        '            <input type ="submit" class="button" value="VOLGENDE">'+
        '            <br>'+
        '        </form>'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li class="selected"><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var medischDoorgemaaktDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '    <h1>Medische gegevens</h1>'+
        '    <h2>Doorgemaakte aandoeningen</h2>'+
        '    <p>Hieronder kunt u aangeven van welke aandoening(en) u langer dan 12 maanden geleden last heeft gehad. Wanneer uw aandoening niet in'+
        '        onderstaande lijst kunt vinden, kunt u deze kwijt in de tekstbox onderaan de pagina. Wanneer u hier meerdere aandoeningen in kwijt wilt, kunt u ertussen een comma plaatsen.</p>'+
        '    <form class="medischDoorgemaaktForm" onsubmit="return validateMedischDoorgemaaktForm()">'+
        '        <div class="row">'+
        '            <div class="column">'+
        '                <span id="titel">Luchtwegen</span><br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="00"> Hooikoorts <br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="01"> Astma<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="02"> COPD<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="03"> Spontane klaplong<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="04"> Traumatische klaplong<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="05"> Sarcoidose<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="06"> Longontsteking<br>'+
        '                <br><span id="titel">Neurologisch</span><br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="10"> Terugkerende hoofdpijn <br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="11"> Migraine<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="12"> Hersen- of ruggenmergletsel<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="13"> Hersentumor<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="14"> Epilepsie<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="15"> Hoofdletsel >24uur buiten bewustzijn <br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="16"> Ziekte van Meni&egrave;re<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="17"> TIA<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="18"> Aneurysma in de hersenen<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="19"> Nek- of rughernia<br>'+
        '                <br><span id="titel">Hart- en vaatziekten</span><br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="20"> Hoge bloeddruk <br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="21"> Hartritmestoornis<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="22"> Patent foramen ovale (PFO)<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="23"> Coronaire hartziekte (kransslagaderen)<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="24"> Hartklepafwijking<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="25"> Angina pectoris<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="26"> Hartinfarct<br>'+
        '            </div>'+
        '            <div class="column">'+
        '                <span id="titel">Keel-, neus-, oor- en oogproblemen</span><br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="30"> Klaar problemen oren of sinussen <br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="31"> Chronische sinusitis<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="32"> Chronische middenoor ontsteking<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="33"> Trommelvlies perforatie<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="34"> Binnenoor operatie<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="35"> Ovale of ronde venster letsel<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="36"> Oog operatie <12 maanden geleden<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="37"> Netvliesloslating<br>'+
        '                <br><span id="titel">Psychisch</span><br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="40"> Claustrofobie<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="41"> Angststoornis<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="42"> Depressie<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="43"> Drugs- of alcoholverslaving<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="44"> Paniekstoornis<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="45"> Schizofrenie<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="46"> ADHD/ ADD<br>'+
        '                <br><span id="titel">Anders</span><br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="50"> Gewrichtsletsel of operatie aan gewricht<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="51"> Diabetes I/II<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="52"> Maagzweer<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="53"> Ziekte van Crohn of colitis<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="54"> Reuma<br>'+
        '                <input type="checkbox" class="medischDoorgemaakt" value="55"> Anders, namelijk: <input type="text" id="medischDoorgemaaktTekst"><span id="medischDoorgemaaktUitleg" class="uitleg"></span>'+   
        '            </div>'+
        '        </div>'+
        '        <br>'+
        '        <input type ="submit" class="button" value="VOLGENDE">'+
        '        <br>'+
        '    </form>'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li class="selected"><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var medicijnenReceptDoc = '<div class="main">'+
        '        <div class="mainbody scroll" id="scrollStyle">'+
        '            <h1>Medicijnen</h1>'+
        '            <h2>Medicijnen op recept</h2>'+
        '            <p>Hieronder kunt u aangeven welke medicijnen u op dit moment gebruikt of in de afgelopen 12 maanden heeft gebruikt. Het gaat hier om medicijnen op recept.'+
        '                We raden u aan om uw medicijnen bij de hand te hebben, zadat u eventueel in de bijsluiter kunt opzoeken onder welke categorie het valt. Wanneer de medicijnen niet onder'+
        '                onderstaande categorieÃ«n valt kunt u deze kwijt in de tekstbox onderaan de pagina. Wanneer u hier meerdere verschillende medicijnen in kwijt wilt, '+
        '                kunt u ertussen een comma plaatsen.</p>'+
        '                <form class="medicijnenReceptForm" onsubmit="return validateMedicijnenReceptForm()">'+
        '                    <div class="row">'+
        '                        <div class="column">'+
        '                            <span id="titel">Medicijnen voor de longen</span><br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="00"> Luchtweg verwijders<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="01"> Luchtweg ontstekingsremmers<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="02"> Combinatie preparaat<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="03"> Neusspray met ontstekingsremmers<br>'+
        '                            <br><span id="titel">Medicijnen voor het hart</span><br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="10"> Plaspillen<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="11"> B&egrave;tablokkers<br>'+
        '                            <span>Medicijnen om het bloed dun te houden:</span><br>'+
        '                            &emsp;<input type="checkbox" class="medicijnenRecept" value="12"> Aspirine<br>'+
        '                            &emsp;<input type="checkbox" class="medicijnenRecept" value="13"> Acenocoumarol<br>'+
        '                            &emsp;<input type="checkbox" class="medicijnenRecept" value="14"> Nieuwe generatie bloedverdunners<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="15"> cholestorol verlagers <br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="16"> calcium blokkers<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="17"> ACE remmers<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="18"> Nitrobaat spray/ tabletten<br>'+
        '                       </div>'+
        '                        <div class="column">'+                      
        '                            <br><span id="titel">Hormonen</span><br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="20"> Anticonceptie <br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="21"> Schildklier<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="22"> Insuline<br>'+
        '                            <br><span id="titel">Medicijnen voor maag/ darmen</span><br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="30"> Maagzuur remmers/ maagbeschermers<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="31"> Ontsteking remmers<br>'+
        '                            <br><span id="titel">Psychisch</span><br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="40"> Medicijnen voor angst en depressie<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="41"> Medicijnen voor ADHD/ ADD<br>'+
        '                            <br><span id="titel">Anders</span><br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="50"> Pijnstillers<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="51"> Antibiotica<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="52"> Medicijnen voor epilepsie<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="53"> Medicijnen ter voorkoming van malaria<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="54"> Medicijnen voor jicht/ reuma<br>'+
        '                            <input type="checkbox" class="medicijnenRecept" value="55"> Anders, namelijk: <input type="text" id="medicijnenReceptTekst"><span id="medicijnenReceptTekstUitleg" class="uitleg"></span>'+
        '                        </div>'+
        '                    </div>'+
        '                    <br>'+
        '                    <input type ="submit" class="button" value="VOLGENDE">'+
        '                    <br>'+
        '                </form>'+
        '        </div>'+
        '    </div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li class="selected"><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var medicijnenOTCDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '    <h1>Medicijnen</h1>'+
        '    <h2>Medicijnen zonder recept</h2>'+
        '    <p>Hieronder kunt u aangeven welke medicijnen u momenteel gebruikt of in de laatste 12 maanden heeft gebruikt. Het gaat hier om medicijnen zonder recept, '+
        '        die u bijvoorbeeld bij de drogist heeft gekocht. Wanneer de medicijnen niet onder onderstaande categorieÃ«n valt kunt u deze kwijt in de tekstbox onderaan'+
        '        de pagina. Wanneer u hier meerdere verschillende medicijnen in kwijt wilt, kunt u ertussen een comma plaatsen.</p>'+
        '        <form class="medicijnenOTCForm" onsubmit="return validateMedicijnenOTCForm()">'+
        '            <div class="row">'+
        '                <div class="column">'+
        '                    <input type="checkbox" class="medicijnenOTC" value="00"> Pijnstillers<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="01"> Neus-/ oordruppels<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="02"> Medicijnen tegen zeeziekte<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="03"> Medicijnen tegen allergieÃ«n, hooikoorst etc<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="04"> Medicijnen tegen misselijkheid<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="05"> Medicijnen tegen diarree<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="06"> Maagzuur remmers/ maagbeschermers<br>'+
        '                    <input type="checkbox" class="medicijnenOTC" value="07"> Anders, namelijk: <input type="text" id="medicijnenOTCTekst"><span id="medicijnenOTCTekstUitleg" class="uitleg"></span>'+
        '                    <br>'+
        '                </div>'+
        '            </div>'+
        '            <input type ="submit" class="button" value="VOLGENDE"> '+
        '            <br>'+
        '        </form>'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a onclick="openPagina(inleidingDoc)"  class="boven" >Inleiding</a></li>'+
        '        <li><a onclick="openPagina(persoonsgegevensDoc)">Persoonsgegevens</a></li>'+
        '        <li><a onclick="openPagina(duikgeschiedenisDoc)">Duikgeschiedenis</a></li>'+
        '        <li><a onclick="openPagina(duikongevallenDoc)">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a onclick="openPagina(medischActueelDoc)">Medische gegevens, actueel</a></li>'+
        '        <li><a onclick="openPagina(medischDoorgemaaktDoc)">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a onclick="openPagina(medicijnenReceptDoc)">Medicijnen op recept</a></li>'+
        '        <li class="selected"><a onclick="openPagina(medicijnenOTCDoc)">Medicijnen zonder recept</a></li>'+
        '        <li><a onclick="openPagina(overzichtDoc)" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';

var overzichtDoc = '<div class="main">'+
        '    <div class="mainbody scroll" id="scrollStyle">'+
        '        <h1>Overzicht</h1>'+
        '        <h3>Persoonsgegevens</h3>'+
        '        <table id="persoonsgegevensTabel">'+
        '            <tr><td>Geslacht:</td><td> geslacht </td></tr>'+
        '            <tr><td>Geboortejaar:</td><td>' + String(gebJaar) + '</td></tr>'+
        '            <tr><td>Gewicht:</td><td>' + String(gewicht) + ' kg</td></tr>'+
        '            <tr><td>Lengte:</td><td>' + String(lengte) + ' cm</td></tr>'+
        '            <tr><td>Aantal eenheden alcohol per week:</td><td>' + String(alcohol) + '</td></tr>'+
        '            <tr><td>Aantal sigaretten per week:</td><td>' + String(sigaretten) + '</td></tr>'+
        '        </table>'+
        '        <h3>Duikgeschiedenis</h3>'+
        '        <table id="duikgeschiedenisTabel">'+
        '            <tr><td>Aantal jaren duikervaring:</td><td>' + String(duikervaring) + '</td></tr>'+
        '            <tr><td>Aantal jaren instructeursdiploma:</td><td>' + String(diploma) + '</td></tr>'+
        '            <tr><td>Aantal duiken afgelopen jaar:</td><td>' + String(duikenVorigJaar) + '</td></tr>'+
        '            <tr><td>Totaal aantal duiken:</td><td>' + String(totaalDuiken) + '</td></tr>'+
        '            <tr><td>Maximaal gedoken diepte:</td><td>' + String(maxDiepte) + ' msw</td></tr>'+
        '        </table>'+
        '        <h3>Medische gegevens (actueel)</h3>'+
        '        <table id="medischActueelTabel">'+
        '            <tr><td>Actuele aandoeningen:</td><td>' + String(medischActueel) + '</td></tr>'+
        '        </table>'+
        '        <h3>Medische gegevens (doorgemaakt)</h3>'+
        '        <table id="medischDoorgemaaktTabel">'+
        '            <tr><td>Doorgemaakte aandoeningen:</td><td>' + String(medischDoorgemaakt) + '</td></tr>'+
        '        </table>'+
        '        <h3>Medicijnen op recept</h3>'+
        '        <table id="medicijnenReceptTabel">'+
        '            <tr><td>Medicijnen op recept: </td><td>' + String(medicijnenRecept) + '</td></tr>'+
        '        </table>'+
        '        <h3>Medicijnen zonder recept</h3>'+
        '        <table id="medicijnenOTCTabel">'+
        '            <tr><td>Medicijnen zonder recept</td><td>' + String(medicijnenOTC) + '</td></tr>'+
        '        </table>'+
        '        <input type ="submit" class="button" value="VERSTUREN">'+
        '        <br>'+
        '    </div>'+
        '</div>'+
        '<div class="menu">'+
        '    <ul>'+
        '        <li><a href="inleiding.html" class="boven" >Inleiding</a></li>'+
        '        <li><a href="persoonsgegevens.html">Persoonsgegevens</a></li>'+
        '        <li><a href="duikgeschiedenis.html">Duikgeschiedenis</a></li>'+
        '        <li><a href="duikongevallen.html">Duikgeschiedenis, ongevallen</a></li>'+
        '        <li><a href="medischActueel.html">Medische gegevens, actueel</a></li>'+
        '        <li><a href="medischDoorgemaakt.html">Medische gegevens, doorgemaakt</a></li>'+
        '        <li><a href="medicijnenRecept.html">Medicijnen op recept</a></li>'+
        '        <li><a href="medicijnenOTC.html">Medicijnen zonder recept</a></li>'+
        '        <li class="selected onder"><a href="overzicht.html" class="onder">Overzicht</a></li>'+
        '    </ul>'+
        '</div>';
