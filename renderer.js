var app = angular.module('myApp', []);

var tempPlain;
var stringLength;
var tempCypher;
var pointerA;
var pointerB;
var endofString;
var subArray = [["a", "b"], ["b", "f"], ["c", "1"], ["d", "k"],
                ["e", "q"], ["f", "g"], ["g", "a"], ["h", "t"],
                ["i", "p"], ["j", "j"], ["k", "6"], ["l", "h"],
                ["m", "y"], ["n", "d"], ["o", "2"], ["p", "x"],
                ["q", "5"], ["r", "m"], ["s", "v"], ["t", "7"],
                ["u", "c"], ["v", "8"], ["w", "4"], ["x", "i"],
                ["y", "9"], ["z", "n"], ["1", "r"], ["2", "e"],
                ["3", "u"], ["4", "3"], ["5", "l"], ["6", "s"],
                ["7", "w"], ["8", ","], ["9", "."], ["0", "o"],
                [".", "z"], [",", "0"], [" ", " "]];


app.controller('personCtrl', function($scope)
{
  $scope.subCypher = function (opt) {
    tempCypher = "";
    tempPlain = $scope.plainText;
    stringLength = tempPlain.length;

    for (var i = 0; i<stringLength; i++) {
      for (var j = 0; j<39; j++) {
        if(tempPlain.charAt(i) == subArray[j][opt]) {
          tempCypher += subArray[j][1-opt];
        }
      }
    }

    $scope.cypherText = tempCypher;
  }

  $scope.blockCypher = function () {

  tempCypher = "";
  tempPlain = $scope.plainText;
  stringLength = tempPlain.length - 1;
  pointerA = 0;
  pointerB = 0;
  endofString = 0;


  collumnNum = Math.ceil(stringLength/4);

  while(endofString <= stringLength){


        if (tempPlain.charAt(pointerA) == " ") {
          tempCypher += "*";
        }
        else {
          tempCypher += tempPlain.charAt(pointerA);
        }



    if (pointerA+4 > stringLength) {
      pointerB += 1;
      pointerA = pointerB;
    }
    else pointerA += 4;

    endofString += 1;
  }

    $scope.cypherText = tempCypher;

  }


  $scope.blockDecypher = function () {

  tempCypher = "";
  tempPlain = $scope.plainText;
  stringLength = tempPlain.length - 1;
  pointerA = 0;
  pointerB = 0;
  endofString = 0;
  fullCollumn = 0;


  collumnNum = Math.ceil((stringLength+1)/4);
  fullCollumn = (stringLength+1)%4;
  dichead =  (Math.ceil((stringLength+1)/4) * fullCollumn)-1;

  if (dichead == 0) dichead = stringLength+1;


  while(endofString <= stringLength){

    if (tempPlain.charAt(pointerA) == "*") {
      tempCypher += " ";
    }
    else {
      tempCypher += tempPlain.charAt(pointerA);
    }

    if ((stringLength + 1)%4 == 0) {
      if (pointerA+collumnNum > stringLength) {
        pointerB += 1;
        pointerA = pointerB;
      }
      else pointerA += collumnNum;
      }
    else { if (pointerA+ (collumnNum -1) <= stringLength && pointerA > dichead) {
      pointerA += (collumnNum - 1);
    }
    else if(pointerA+collumnNum > stringLength) {
      pointerB += 1;
      pointerA = pointerB;
    }
    else {
      pointerA += collumnNum;
    }
    }

    endofString += 1;
  }

    $scope.cypherText = tempCypher;

  }

  var order;
  var ujung;

  $scope.permutationCypher = function() {
  order = [5,1,3,2,4,0];
  tempCypher = "";
  tempPlain = $scope.plainText;
  stringLength = tempPlain.length;
  ujung = stringLength - (stringLength%6);
  console.log(ujung);

    for (var i=0; i<ujung; i+=6){
      for (var j=0; j<6; j++){
        if (tempPlain.charAt(order[j]+i) == " ") {
          tempCypher += "*";
        } else {
          tempCypher += tempPlain.charAt(order[j]+i);
          console.log("eek");
        }

      }
    }


    for (var i=ujung; i<stringLength; i++){
        tempCypher += tempPlain.charAt(i);
    }



    $scope.cypherText = tempCypher;
  }

  $scope.permutationDecypher = function() {
  order = [5,1,3,2,4,0];
  tempCypher = "";
  tempPlain = $scope.plainText;
  stringLength = tempPlain.length;
  ujung = stringLength - (stringLength%6);
  console.log(ujung);

    for (var i=0; i<ujung; i+=6){
      for (var j=0; j<6; j++){
        if (tempPlain.charAt(order[j]+i) == "*") {
          tempCypher += " ";
        } else {
          tempCypher += tempPlain.charAt(order[j]+i);
          console.log("eek");
        }

      }
    }


    for (var i=ujung; i<stringLength; i++){
        tempCypher += tempPlain.charAt(i);
    }



    $scope.cypherText = tempCypher;
  }


  var charTemp;

  $scope.expansionCypher = function() {
  tempCypher = "";
  tempPlain = $scope.plainText;
  stringLength = tempPlain.length;
  pointerA = 0;
  pointerB = 0;

  for (var i=0; i<stringLength; i++) {
    if(i==0){
      charTemp = tempPlain.charAt(i);
    }
    else if(tempPlain.charAt(i) == " "){
        if (charTemp == "a") tempCypher += charTemp + "I ";
        else if (charTemp == "i") tempCypher += charTemp + "I ";
        else if (charTemp == "u") tempCypher += charTemp + "I ";
        else if (charTemp == "e") tempCypher += charTemp + "I ";
        else if (charTemp == "o") tempCypher += charTemp + "I ";
        else if (charTemp == "0") tempCypher += charTemp + "I ";
        else if (charTemp == "2") tempCypher += charTemp + "I ";
        else if (charTemp == "4") tempCypher += charTemp + "I ";
        else if (charTemp == "6") tempCypher += charTemp + "I ";
        else if (charTemp == "8") tempCypher += charTemp + "I ";
        else tempCypher += charTemp + "AN ";
        charTemp = tempPlain.charAt(i+1);
        i += 1;
    }
    else if (i==stringLength-1) {

      if (charTemp == "i") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "u") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "e") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "o") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "0") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "2") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "4") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "6") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else if (charTemp == "8") tempCypher += tempPlain.charAt(i) + charTemp + "I";
      else tempCypher += tempPlain.charAt(i) + charTemp + "AN";
    }
    else {
        tempCypher += tempPlain.charAt(i);
    }

  }

    $scope.cypherText = tempCypher;
  }

  $scope.expansionDecypher = function() {
    // console.log("Terpanggil")
  tempCypher = "";
  tempPlain = $scope.plainText;
  stringLength = tempPlain.length;
  pointerA = 0;
  pointerB = 0;
  var tempWord = "";

  for (var i=0; i<stringLength; i++) {
    if (tempPlain.charAt(i) == "A"){
      tempWord = tempWord.slice(0, -1);
    }
    else if(tempPlain.charAt(i) == "N"){
      charTemp = tempPlain.charAt(i-2);
      tempCypher = tempCypher + " "+ charTemp + tempWord;
      tempWord = "";
      i += 1;
    }
    else if (tempPlain.charAt(i) == "I") {
      tempWord = tempWord.slice(0, -1);
      charTemp = tempPlain.charAt(i-1);
      tempCypher = tempCypher + " "+ charTemp + tempWord;
      tempWord = "";
      i += 1;
    }
    else {
        tempWord += tempPlain.charAt(i);
    }

  }
    $scope.cypherText = tempCypher;
  }


  var tempAppend;

  $scope.compactionCypher = function() {
    tempAppend = "";
    tempCypher = "";
    tempPlain = $scope.plainText;
    stringLength = tempPlain.length;

    for (var i = 0; i < stringLength; i+=3) {
      tempCypher += tempPlain.charAt(i);
      tempCypher += tempPlain.charAt(i+1);
      tempAppend += tempPlain.charAt(i+2);

    }

    tempCypher += "&" + tempAppend;
    $scope.cypherText = tempCypher;

  }

  var amperFind;
  var compactionLength;

  $scope.compactionDecypher = function() {
    tempAppend = "";
    tempCypher = "";
    tempPlain = $scope.plainText;
    stringLength = tempPlain.length;
    compactionLength = 0
    amperFind = false;

    for (var i = 0; i < stringLength; i++) {
      if(amperFind == true) tempAppend += tempPlain.charAt(i);
      if(tempPlain.charAt(i) == "&") {
        amperFind = true;
        compactionLength = i;
      };
    }

    for (var i = 0; i < compactionLength; i+=2) {
      tempCypher += tempPlain.charAt(i);
      tempCypher += tempPlain.charAt(i+1);
      tempCypher += tempAppend.charAt(i/2);

    }

    if (tempCypher.charAt(stringLength-1) == "&") tempCypher = tempCypher.slice(0,-1);
    $scope.cypherText = tempCypher;

  }

})
