
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


document.querySelector('#deptos').addEventListener("change", function(){
    document.getElementById("munis").options.length = 0;
    let optMunis = document.getElementById('munis').options;
    var opt;
        munis.forEach(option => {
            opt = option.value.toString();
            if(opt.substring(0,2) == document.getElementById('deptos').value.toString()){
                optMunis.add(
                new Option(option.text, option.value))
            }
        }
    );
});


function oldeptos(){
    let optDeptos = document.getElementById('deptos').options;

    deptos.forEach(option =>
        optDeptos.add(
        new Option(option.text, option.value)
    )
    );
    
    let optMunis = document.getElementById('munis').options;
    var opt;
        munis.forEach(option => {
            opt = option.value.toString();
            if(opt.substring(0,2) == document.getElementById('deptos').value.toString()){
                optMunis.add(
                new Option(option.text, option.value))
            }
        }
    );
}


function fechaValida(){
    var b = document.getElementById("fnac");
    b.setAttribute("max", getHoy());
}


function getHoy(){
    var today = new Date();
    var mes, dia, hoy;

    if(today.getMonth() < 9){
        mes = "0" + (today.getMonth()+1);
    }
    else{
        mes = today.getMonth()+1;
    }

    if(today.getDate < 10){
        dia = "0" + today.getDate();
    }
    else{
        dia = today.getDate();
    }

    hoy = today.getFullYear()+'-'+mes+'-'+dia;
    console.log(hoy);

    return hoy;
}


function updateValue(e) {
    var fing = document.getElementById('fing');
    var fsal = document.getElementById("fsal");

    fsal.setAttribute("min", fing.value);
  }

function iniHotel(){

    document.getElementById("fing").addEventListener("input", updateValue); 
    var fing = document.getElementById('fing');
    var fsal = document.getElementById("fsal");
    
    fing.setAttribute("min", getHoy());
    fsal.setAttribute("min", getHoy());
}  



function CUIValido(cui) {
    var lcui = document.getElementById('cui');
    var cui = lcui.value;
    var cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

    if (!cuiRegExp.test(cui)) {
        console.log("CUI con formato inv??lido");
        return false;
    }

    cui = cui.replace(/\s/, '');
    var depto = parseInt(cui.substring(9, 11), 10);
    var muni = parseInt(cui.substring(11, 13));
    var numero = cui.substring(0, 8);
    var verificador = parseInt(cui.substring(8, 9));

    var munisPorDepto = [17,8,16,16,13,14,19,8,24,21,9,30,32,21,8,17,14,5,11,11,7,17]; 
    
    if (depto === 0 || muni === 0)
    {
        console.log("CUI con c??digo de municipio o departamento inv??lido.");
        return false;
    }
    
    if (depto > munisPorDepto.length)
    {
        console.log("CUI con c??digo de departamento inv??lido.");
        return false;
    }
    
    if (muni > munisPorDepto[depto -1])
    {
        console.log("CUI con c??digo de municipio inv??lido.");
        return false;
    }
    
    // Se verifica el correlativo con base 
    // en el algoritmo del complemento 11.
    var total = 0;
    
    for (var i = 0; i < numero.length; i++)
    {
        total += numero[i] * (i + 2);
    }
    
    var modulo = (total % 11);
    
    return modulo === verificador;
}

document.querySelector('#cui').addEventListener("change", function(){
    if(CUIValido()){
        document.getElementById('cui').setAttribute("class", "form-control is-valid");
    }else{
        document.getElementById('cui').setAttribute("class", "form-control is-invalid");
    }
});






const deptos = [{"value":"01","text":"Guatemala"},{"value":"02","text":"El Progreso"},{"value":"03","text":"Sacatep??quez"},{"value":"04","text":"Chimaltenango"},{"value":"05","text":"Escuintla"},{"value":"06","text":"Santa Rosa"},{"value":"07","text":"Solol??"},{"value":"08","text":"Totonicap??n"},{"value":"09","text":"Quetzaltenango"},{"value":"1","text":"Suchitep??quez"},{"value":"11","text":"Retalhuleu"},{"value":"12","text":"San Marcos"},{"value":"13","text":"Huehuetenango"},{"value":"14","text":"Quich??"},{"value":"15","text":"Baja Verapaz"},{"value":"16","text":"Alta Verapaz"},{"value":"17","text":"Pet??n"},{"value":"18","text":"Izabal"},{"value":"19","text":"Zacapa"},{"value":"20","text":"Chiquimula"},{"value":"21","text":"Jalapa"},{"value":"22","text":"Jutiapa"}];




const munis = [{"value":"0101","text":"Guatemala"},{"value":"0102","text":"Santa Catarina Pinula"},{"value":"0103","text":"San Jos?? Pinula"},{"value":"0104","text":"San Jos?? del Golfo"},{"value":"0105","text":"Palencia"},{"value":"0106","text":"Chinautla"},{"value":"0107","text":"San Pedro Ayampuc"},{"value":"0108","text":"Mixco"},{"value":"0109","text":"San Pedro Sacatep??quez"},{"value":"0110","text":"San Juan Sacatep??quez"},{"value":"0111","text":"San Raymundo"},{"value":"0112","text":"Chuarrancho"},{"value":"0113","text":"Fraijanes"},{"value":"0114","text":"Amatitl??n"},{"value":"0115","text":"Villa Nueva"},{"value":"0116","text":"Villa Canales"},{"value":"0117","text":"Petapa"},{"value":"0201","text":"Guastatoya"},{"value":"0202","text":"Moraz??n"},{"value":"0203","text":"San Agust??n Acasaguastl??n"},{"value":"0204","text":"San Crist??bal Acasaguastl??n"},{"value":"0205","text":"El J??caro"},{"value":"0206","text":"Sansare"},{"value":"0207","text":"Sanarate"},{"value":"0208","text":"San Antonio la Paz"},{"value":"0301","text":"Antigua Guatemala"},{"value":"0302","text":"Jocotenango"},{"value":"0303","text":"Pastores"},{"value":"0304","text":"Sumpango"},{"value":"0305","text":"Santo Domingo Xenacoj"},{"value":"0306","text":"Santiago Sacatep??quez"},{"value":"0307","text":"San Bartolom?? Milpas Altas"},{"value":"0308","text":"San Lucas Sacatep??quez"},{"value":"0309","text":"Santa Luc??a Milpas Altas"},{"value":"0310","text":"Magdalena Milpas Altas"},{"value":"0311","text":"Santa Mar??a de Jes??s"},{"value":"0312","text":"Ciudad Vieja"},{"value":"0313","text":"San Miguel Due??as"},{"value":"0314","text":"Alotenango"},{"value":"0315","text":"San Antonio Aguas Calientes"},{"value":"0316","text":"Santa Catarina Barahona"},{"value":"0401","text":"Chimaltenango"},{"value":"0402","text":"San Jos?? Poaquil"},{"value":"0403","text":"San Mart??n Jilotepeque"},{"value":"0404","text":"Comalapa"},{"value":"0405","text":"Santa Apolonia"},{"value":"0406","text":"Tecp??n Guatemala"},{"value":"0407","text":"Patz??n"},{"value":"0408","text":"Pochuta"},{"value":"0409","text":"Patzic??a"},{"value":"0410","text":"Santa Cruz Balany??"},{"value":"0411","text":"Acatenango"},{"value":"0412","text":"Yepocapa"},{"value":"0413","text":"San Andr??s Itzapa"},{"value":"0414","text":"Parramos"},{"value":"0415","text":"Zaragoza"},{"value":"0416","text":"El Tejar"},{"value":"0501","text":"Escuintla"},{"value":"0502","text":"Santa Luc??a Cotzumalguapa"},{"value":"0503","text":"La Democracia"},{"value":"0504","text":"Siquinal??"},{"value":"0505","text":"Masagua"},{"value":"0506","text":"Tiquisate"},{"value":"0507","text":"La Gomera"},{"value":"0508","text":"Guanagazapa"},{"value":"0509","text":"San Jos??"},{"value":"0510","text":"Iztapa"},{"value":"0511","text":"Pal??n"},{"value":"0512","text":"San Vicente Pacaya"},{"value":"0513","text":"Nueva Concepci??n"},{"value":"0601","text":"Cuilapa"},{"value":"0602","text":"Barberena"},{"value":"0603","text":"Santa Rosa de Lima"},{"value":"0604","text":"Casillas"},{"value":"0605","text":"San Rafael las Flores"},{"value":"0606","text":"Oratorio"},{"value":"0607","text":"San Juan Tecuaco"},{"value":"0608","text":"Chiquimulilla"},{"value":"0609","text":"Taxisco"},{"value":"0610","text":"Santa Mar??a Ixhuat??n"},{"value":"0611","text":"Guazacap??n"},{"value":"0612","text":"Santa Cruz Naranjo"},{"value":"0613","text":"Pueblo Nuevo Vi??as"},{"value":"0614","text":"Nueva Santa Rosa"},{"value":"0701","text":"Solol??"},{"value":"0702","text":"San Jos?? Chacay??"},{"value":"0703","text":"Santa Mar??a Visitaci??n"},{"value":"0704","text":"Santa Luc??a Utatl??n"},{"value":"0705","text":"Nahual??"},{"value":"0706","text":"Santa Catarina Ixtahuac??n"},{"value":"0707","text":"Santa Clara la Laguna"},{"value":"0708","text":"Concepci??n"},{"value":"0709","text":"San Andr??s Semetabaj"},{"value":"0710","text":"Panajachel"},{"value":"0711","text":"Santa Catarina Palop??"},{"value":"0712","text":"San Antonio Palop??"},{"value":"0713","text":"San Lucas Tolim??n"},{"value":"0714","text":"Santa Cruz la Laguna"},{"value":"0715","text":"San Pablo la Laguna"},{"value":"0716","text":"San Marcos la Laguna"},{"value":"0717","text":"San Juan la Laguna"},{"value":"0718","text":"San Pedro la Laguna"},{"value":"0719","text":"Santiago Atitl??n"},{"value":"0801","text":"Totonicap??n"},{"value":"0802","text":"San Crist??bal Totonicap??n"},{"value":"0803","text":"San Francisco el Alto"},{"value":"0804","text":"San Andr??s Xecul"},{"value":"0805","text":"Momostenango"},{"value":"0806","text":"Santa Mar??a Chiquimula"},{"value":"0807","text":"Santa Luc??a la Reforma"},{"value":"0808","text":"San Bartolo"},{"value":"0901","text":"Quetzaltenango"},{"value":"0902","text":"Salcaj??"},{"value":"0903","text":"Olintepeque"},{"value":"0904","text":"San Carlos Sija"},{"value":"0905","text":"Sibilia"},{"value":"0906","text":"Cabric??n"},{"value":"0907","text":"Cajol??"},{"value":"0908","text":"San Miguel Siguil??"},{"value":"0909","text":"Ostuncalco"},{"value":"0910","text":"San Mateo"},{"value":"0911","text":"Concepci??n Chiquirichapa"},{"value":"0912","text":"San Mart??n Sacatep??quez"},{"value":"0913","text":"Almolonga"},{"value":"0914","text":"Cantel"},{"value":"0915","text":"Huit??n"},{"value":"0916","text":"Zunil"},{"value":"0917","text":"Colomba"},{"value":"0918","text":"San Francisco la Uni??n"},{"value":"0919","text":"El Palmar"},{"value":"0920","text":"Coatepeque"},{"value":"0921","text":"G??nova"},{"value":"0922","text":"Flores Costa Cuca"},{"value":"0923","text":"La Esperanza"},{"value":"0924","text":"Palestina de los Altos"},{"value":1001,"text":"Mazatenango"},{"value":1002,"text":"Cuyotenango"},{"value":1003,"text":"San Francisco Zapotitl??n"},{"value":1004,"text":"San Bernardino"},{"value":1005,"text":"San Jos?? el Idolo"},{"value":1006,"text":"Santo Domingo Suchitep??quez"},{"value":1007,"text":"San Lorenzo"},{"value":1008,"text":"Samayac"},{"value":1009,"text":"San Pablo Jocopilas"},{"value":1010,"text":"San Antonio Suchitep??quez"},{"value":1011,"text":"San Miguel Pan??n"},{"value":1012,"text":"San Gabriel"},{"value":1013,"text":"Chicacao"},{"value":1014,"text":"Patulul"},{"value":1015,"text":"Santa B??rbara"},{"value":1016,"text":"San Juan Bautista"},{"value":1017,"text":"Santo Tom??s la Uni??n"},{"value":1018,"text":"Zunilito"},{"value":1019,"text":"Pueblo Nuevo"},{"value":1020,"text":"R??o Bravo"},{"value":1021,"text":"San Jos?? La M??quina"},{"value":1101,"text":"Retalhuleu"},{"value":1102,"text":"San Sebasti??n"},{"value":1103,"text":"Santa Cruz Mulu??"},{"value":1104,"text":"San Mart??n Zapotitl??n"},{"value":1105,"text":"San Felipe"},{"value":1106,"text":"San Andr??s Villa Seca"},{"value":1107,"text":"Champerico"},{"value":1108,"text":"Nuevo San Carlos"},{"value":1109,"text":"El Asintal"},{"value":1201,"text":"San Marcos"},{"value":1202,"text":"San Pedro Sacatep??quez"},{"value":1203,"text":"San Antonio Sacatep??quez"},{"value":1204,"text":"Comitancillo"},{"value":1205,"text":"San Miguel Ixtahuac??n"},{"value":1206,"text":"Concepci??n Tutuapa"},{"value":1207,"text":"Tacan??"},{"value":1208,"text":"Sibinal"},{"value":1209,"text":"Tajumulco"},{"value":1210,"text":"Tejutla"},{"value":1211,"text":"San Rafael Pi?? de la Cuesta"},{"value":1212,"text":"Nuevo Progreso"},{"value":1213,"text":"El Tumbador"},{"value":1214,"text":"El Rodeo"},{"value":1215,"text":"Malacat??n"},{"value":1216,"text":"Catarina"},{"value":1217,"text":"Ayutla"},{"value":1218,"text":"Oc??s"},{"value":1219,"text":"San Pablo"},{"value":1220,"text":"El Quetzal"},{"value":1221,"text":"La Reforma"},{"value":1222,"text":"Pajapita"},{"value":1223,"text":"Ixchigu??n"},{"value":1224,"text":"San Jos?? Ojeten??n"},{"value":1225,"text":"San Crist??bal Cucho"},{"value":1226,"text":"Sipacapa"},{"value":1227,"text":"Esquipulas Palo Gordo"},{"value":1228,"text":"R??o Blanco"},{"value":1229,"text":"San Lorenzo"},{"value":1230,"text":"La Blanca"},{"value":1301,"text":"Huehuetenango"},{"value":1302,"text":"Chiantla"},{"value":1303,"text":"Malacatancito"},{"value":1304,"text":"Cuilco"},{"value":1305,"text":"Nent??n"},{"value":1306,"text":"San Pedro Necta"},{"value":1307,"text":"Jacaltenango"},{"value":1308,"text":"Soloma"},{"value":1309,"text":"Ixtahuac??n"},{"value":1310,"text":"Santa B??rbara"},{"value":1311,"text":"La Libertad"},{"value":1312,"text":"La Democracia"},{"value":1313,"text":"San Miguel Acat??n"},{"value":1314,"text":"San Rafael la Independencia"},{"value":1315,"text":"Todos Santos Cuchumat??n"},{"value":1316,"text":"San Juan Atit??n"},{"value":1317,"text":"Santa Eulalia"},{"value":1318,"text":"San Mateo Ixtat??n"},{"value":1319,"text":"Colotenango"},{"value":1320,"text":"San Sebasti??n Huehuetenango"},{"value":1321,"text":"Tectit??n"},{"value":1322,"text":"Concepci??n Huista"},{"value":1323,"text":"San Juan Ixcoy"},{"value":1324,"text":"San Antonio Huista"},{"value":1325,"text":"San Sebasti??n Coat??n"},{"value":1326,"text":"Barillas"},{"value":1327,"text":"Aguacat??n"},{"value":1328,"text":"San Rafael Petzal"},{"value":1329,"text":"San Gaspar Ixchil"},{"value":1330,"text":"Santiago Chimaltenango"},{"value":1331,"text":"Santa Ana Huista"},{"value":1332,"text":"Uni??n Cantinil"},{"value":1401,"text":"Santa Cruz del Quich??"},{"value":1402,"text":"Chich??"},{"value":1403,"text":"Chinique"},{"value":1404,"text":"Zacualpa"},{"value":1405,"text":"Chajul"},{"value":1406,"text":"Chichicastenango"},{"value":1407,"text":"Patzit??"},{"value":1408,"text":"San Antonio Ilotenango"},{"value":1409,"text":"San Pedro Jocopilas"},{"value":1410,"text":"Cun??n"},{"value":1411,"text":"San Juan Cotzal"},{"value":1412,"text":"Joyabaj"},{"value":1413,"text":"Nebaj"},{"value":1414,"text":"San Andr??s Sajcabaj??"},{"value":1415,"text":"Uspant??n"},{"value":1416,"text":"Sacapulas"},{"value":1417,"text":"San Bartolom?? Jocotenango"},{"value":1418,"text":"Canill??"},{"value":1419,"text":"Chicam??n"},{"value":1420,"text":"Ixc??n"},{"value":1421,"text":"Pachalum"},{"value":1501,"text":"Salam??"},{"value":1502,"text":"San Miguel Chicaj"},{"value":1503,"text":"Rabinal"},{"value":1504,"text":"Cubulco"},{"value":1505,"text":"Granados"},{"value":1506,"text":"El Chol"},{"value":1507,"text":"San Jer??nimo"},{"value":1508,"text":"Purulh??"},{"value":1601,"text":"Cob??n"},{"value":1602,"text":"Santa Cruz Verapaz"},{"value":1603,"text":"San Crist??bal Verapaz"},{"value":1604,"text":"Tactic"},{"value":1605,"text":"Tamah??"},{"value":1606,"text":"Tucur??"},{"value":1607,"text":"Panz??s"},{"value":1608,"text":"Senah??"},{"value":1609,"text":"San Pedro Carch??"},{"value":1610,"text":"San Juan Chamelco"},{"value":1611,"text":"Lanqu??n"},{"value":1612,"text":"Cahab??n"},{"value":1613,"text":"Chisec"},{"value":1614,"text":"Chahal"},{"value":1615,"text":"Fray Bartolom?? de las Casas"},{"value":1616,"text":"Santa Catalina la Tinta"},{"value":1617,"text":"Raxruh??"},{"value":1701,"text":"Flores"},{"value":1702,"text":"San Jos??"},{"value":1703,"text":"San Benito"},{"value":1704,"text":"San Andr??s"},{"value":1705,"text":"La Libertad"},{"value":1706,"text":"San Francisco"},{"value":1707,"text":"Santa Ana"},{"value":1708,"text":"Dolores"},{"value":1709,"text":"San Luis"},{"value":1710,"text":"Sayaxch??"},{"value":1711,"text":"Melchor de Mencos"},{"value":1712,"text":"Popt??n"},{"value":1713,"text":"Las Cruces"},{"value":1714,"text":"El Chal"},{"value":1801,"text":"Puerto Barrios"},{"value":1802,"text":"Livingston"},{"value":1803,"text":"El Estor"},{"value":1804,"text":"Morales"},{"value":1805,"text":"Los Amates"},{"value":1901,"text":"Zacapa"},{"value":1902,"text":"Estanzuela"},{"value":1903,"text":"R??o Hondo"},{"value":1904,"text":"Gual??n"},{"value":1905,"text":"Teculut??n"},{"value":1906,"text":"Usumatl??n"},{"value":1907,"text":"Caba??as"},{"value":1908,"text":"San Diego"},{"value":1909,"text":"La Uni??n"},{"value":1910,"text":"Huit??"},{"value":1911,"text":"San Jorge"},{"value":2001,"text":"Chiquimula"},{"value":2002,"text":"San Jos?? La Arada"},{"value":2003,"text":"San Juan Ermita"},{"value":2004,"text":"Jocot??n"},{"value":2005,"text":"Camot??n"},{"value":2006,"text":"Olopa"},{"value":2007,"text":"Esquipulas"},{"value":2008,"text":"Concepci??n Las Minas"},{"value":2009,"text":"Quetzaltepeque"},{"value":2010,"text":"San Jacinto"},{"value":2011,"text":"Ipala"},{"value":2101,"text":"Jalapa"},{"value":2102,"text":"San Pedro Pinula"},{"value":2103,"text":"San Luis Jilotepeque"},{"value":2104,"text":"San Manuel Chaparr??n"},{"value":2105,"text":"San Carlos Alzatate"},{"value":2106,"text":"Monjas"},{"value":2107,"text":"Mataquescuintla"},{"value":2201,"text":"Jutiapa"},{"value":2202,"text":"El Progreso"},{"value":2203,"text":"Santa Catarina Mita"},{"value":2204,"text":"Agua Blanca"},{"value":2205,"text":"Asunci??n Mita"},{"value":2206,"text":"Yupiltepeque"},{"value":2207,"text":"Atescatempa"},{"value":2208,"text":"Jerez"},{"value":2209,"text":"El Adelanto"},{"value":2210,"text":"Zapotitl??n"},{"value":2211,"text":"Comapa"},{"value":2212,"text":"Jalpatagua"},{"value":2213,"text":"Conguaco"},{"value":2214,"text":"Moyuta"},{"value":2215,"text":"Pasaco"},{"value":2216,"text":"San Jos?? Acatempa"},{"value":2217,"text":"Quesada"}];
