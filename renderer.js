var app = angular.module('myApp', []);

var tempPlain;
var stringLength;
var tempCypher;
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
  $scope.subCypher = function () {
    tempCypher = "";
    tempPlain = $scope.plainText;
    stringLength = tempPlain.length;

    for (var i = 0; i<stringLength; i++) {
      for (var j = 0; j<39; j++) {
        if(tempPlain.charAt(i) == subArray[j][0]) {
          tempCypher += subArray[j][1];
        }
      }
    }

    $scope.cypherText = tempCypher;
  }

  $scope.subDecypher = function () {
    tempCypher = "";
    tempPlain = $scope.plainText;
    stringLength = tempPlain.length;

    for (var i = 0; i<stringLength; i++) {
      for (var j = 0; j<39; j++) {
        if(tempPlain.charAt(i) == subArray[j][1]) {
          tempCypher += subArray[j][0];
        }
      }
    }

    $scope.cypherText = tempCypher;
  }


})
