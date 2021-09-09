const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResult(m, n){
    const body = document.getElementsByTagName('body')[0]
    const newText = document.createElement('h3')
    newText.innerText = m
    const resu = document.createElement('p')
    resu.innerText = n
    body.append(newText, resu)
}

function kata1() {
    let result = [];
    for(let i = 1; i <= 25; i++){
         result.push (i);
    }
    return result;
    
}
showResult("katas1", kata1());


function kata2() {
    let result = [];
    for(let i = 25; i > 0; i--){
        result.push (i);
    }
    return result;
}
showResult("katas2", kata2());


function kata3() {
    let result = [];
    for(let i = -1; i >= -25; i--){
        result.push (i);
    }
    return result;
}
showResult("katas3", kata3());

function kata4() {
    let result = [];
    for(let i = -25; i < 0; i++){
        result.push (i);
    }
    return result;
}
showResult("katas4", kata4());


function kata5() {
    let result = [];
    for(let i = 25; i >= -25; i--){
        if(i % 2 != 0){
            result.push (i);
        }
    }
    return result;
}
showResult("katas5", kata5());


function kata6() {
    let result = [];
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            result.push (i);
        }
    }
    return result;
    
}
showResult("katas6", kata6());

function kata7() {
    let result = [];
    for(let i = 1; i <= 100; i++){
        if(i % 7 === 0){
            result.push (i);
        }
    }
    return result;
    
}
showResult("katas7", kata7());

function kata8() {
    let result = [];
    for(let i = 100; i >= 1; i--){
        if(i % 7 === 0 || i % 3 === 0){
            result.push (i);
        }
    }
    return result;
    
}
showResult("katas8", kata8());

function kata9() {
    let result = [];
    for(let i = 1; i <= 100; i++){
        if(i % 5 === 0 & i % 2 != 0){
            result.push (i);
        }
    }
    return result;
    
}
showResult("katas9", kata9());

function kata10() {
    let result = sampleArray
    return result;
    
}
showResult("katas10", kata10());

function kata11() {
    let result = [];
    for(i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0){
            result.push (sampleArray[i])
        }
    }
    return result;
    
}
showResult("katas11", kata11());

function kata12() {
    let result = [];
    for(i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 != 0){
            result.push (sampleArray[i])
        }
    }
    return result;
    
}
showResult("katas12", kata12());

function kata13() {
    let result = [];
    for(i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 === 0){
            result.push (sampleArray[i]);
        }
    }
    return result;
    
}
showResult("katas13", kata13());


function kata14() {
    let result = [];
    for(i = 0; i < sampleArray.length; i++){
        result.push(sampleArray[i] * sampleArray[i])
    }
    return result;
    
}
showResult("katas14", kata14());


function kata15() {
    let result = 0;
    for(i = 1; i <= 20; i++){
        result = result + i
    }
    return result;
    
}
showResult("katas15", kata15());

function kata16() {
    let result = 0;
    for(i = 0; i < sampleArray.length; i++){
        result = result + sampleArray[i];
    }
    return result;
    
}
showResult("katas16", kata16());

function kata17() {
    let result = sampleArray[0];
    for(i = 1; i < sampleArray.length; i++){
        if(sampleArray[i] < result) result = sampleArray[i];
    }
    return result;
    
}
showResult("katas17", kata17());

function kata18() {
    let result = sampleArray[0];
    for(i = 1; i < sampleArray.length; i++){
        if(sampleArray[i] > result) result = sampleArray[i];
    }
    return result;
    
}
showResult("katas18", kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
