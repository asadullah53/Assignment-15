// Question 1
function maxNmbr() {
  var x = document.getElementById("fnumber").value;
  var y = document.getElementById("snumber").value;
  var maxresult;
  if (x > y) {
    maxresult = x;
  } else {
    maxresult = y;
  }
  document.getElementById(
    "maxresult"
  ).innerHTML = `Maximum Number is ${maxresult}`;
}

// Question 2
function maxNmbr3() {
  var x = document.getElementById("fnumber1").value;
  var y = document.getElementById("snumber2").value;
  var z = document.getElementById("tnumber3").value;
  var maxresult3;
  if (x > y) {
    maxresult3 = x;
  } else if (y > z) {
    maxresult3 = y;
  } else {
    maxresult3 = z;
  }
  document.getElementById(
    "maxresult3"
  ).innerHTML = `Maximum Number is ${maxresult3}`;
}

// Question 3
function numberType() {
  var x = document.getElementById("nmbrtype").value;
  var nmbrtyperesult;
  if (x > 0) {
    nmbrtyperesult = "Positive";
  } else if (x < 0) {
    nmbrtyperesult = "Negative";
  } else {
    nmbrtyperesult = "Zero";
  }
  document.getElementById(
    "nmbrtyperesult"
  ).innerHTML = `Number Type is ${nmbrtyperesult}`;
}

// Question 4
function numberDivis() {
  var x = document.getElementById("nmbrdiv").value;
  var nmbrdivisible;
  if (x % 5 === 0 && x % 11 === 0) {
    nmbrdivisible = "Divisible by 5 and 11";
  } else {
    nmbrdivisible = "Not Divisible by 5 and 11";
  }
  document.getElementById(
    "nmbrdivisible"
  ).innerHTML = `Number is ${nmbrdivisible}`;
}

// Question 5
function numberReminder() {
  var x = document.getElementById("nmbrrem").value;
  var nmbrrmndr;
  var reminderResult = 2;
  if (x % reminderResult === 0) {
    nmbrrmndr = "Even";
  } else {
    nmbrrmndr = "Odd";
  }
  document.getElementById("nmbrrmndr").innerHTML = `Number is ${nmbrrmndr}`;
}

// Question 6 | "Ye Question Google pr search tha"
function leapYear() {
  var x = document.getElementById("lyear").value;
  var lyearresult;
  if ((0 == x % 4 && 0 != x % 100) || 0 == x % 400) {
    lyearresult = "a Leap Year";
  } else {
    lyearresult = "Not a Leap Year";
  }
  document.getElementById(
    "lyearresult"
  ).innerHTML = `This year is ${lyearresult}`;
}

// Question 7 | /[A-Za-z]/ Search From Google
function charType() {
  var x = document.getElementById("chrtype").value;
  var chtyperesult;
  var alphabet = /[A-Za-z]/;
  if (x.match(alphabet)) {
    chtyperesult = "Alphabet";
  } else {
    chtyperesult = "Not Alphabet";
  }
  document.getElementById(
    "chtyperesult"
  ).innerHTML = `Character is ${chtyperesult}`;
}

// Question 8
function vowelWords() {
  var x = document.getElementById("voweltxt").value;
  var vowelresult;
  var word = /[v,e,i,o,u]/;
  if (x.match(word)) {
    vowelresult = "Vowel";
  } else {
    vowelresult = "Not Vowel";
  }
  document.getElementById("vowelresult").innerHTML = `Word is ${vowelresult}`;
}

// Question 9
function wordType() {
  var x = document.getElementById("wrdtype").value;
  var wrdtyperesult;
  var word = /[A-Za-z]/;
  var digits = /[0-9]/;
  if (x.match(word)) {
    wrdtyperesult = "Alphabet";
  } else if (x.match(digits)) {
    wrdtyperesult = "Digit";
  } else {
    wrdtyperesult = "Special Character";
  }
  document.getElementById(
    "wrdtyperesult"
  ).innerHTML = `This character is ${wrdtyperesult}`;
}

// Question 10
function stringLength() {
  var x = document.getElementById("strlength").value;
  var strlengthresult = x.length;
  document.getElementById(
    "strlengthresult"
  ).innerHTML = `The Length of this String is  ${strlengthresult}`;
}

// Question 11
function copyString() {
  var x = document.getElementById("copystr").value;
  var copystrresult = x;
  var str = "Pakistan"
  var str2 = str + " " + x;
  document.getElementById(
    "copystrresult"
  ).innerHTML = `String 1 is  ${copystrresult}`;
  document.getElementById("str2").innerHTML = `String 2 is  ${str2}`;
}

// Question 12
function concateString() {
    var x = document.getElementById("constr1").value;
    var y = document.getElementById("constr2").value;
    var constrresult = x + " " + y;
    document.getElementById(
      "constrresult"
    ).innerHTML = `Result is ${constrresult}`;
  }

  // Question 13 | Help From Google
function compareString() {
    var x = document.getElementById("comstr1").value;
    var y = document.getElementById("comstr2").value;
    var comstrresult = x.localeCompare(y);
    document.getElementById(
      "comstrresult"
    ).innerHTML = `Comparison of Both Strings:  ${comstrresult}`;
  }

  // Question 14
function upperString() {
    var x = document.getElementById("lwrstr").value;
    var lwrstrresult = x.toUpperCase();
    document.getElementById(
      "lwrstrresult"
    ).innerHTML = lwrstrresult;
  }

    // Question 15
function lowerString() {
    var x = document.getElementById("upperstr").value;
    var upperstrresult = x.toLowerCase();
    document.getElementById(
      "upperstrresult"
    ).innerHTML = upperstrresult;
  }

      // Question 16 | Doubt hai is mn
function toggleString() {
    var x = document.getElementById("togglestr").value;
    var l1 = x.slice(0,1).toUpperCase();
    var u1 = x.slice(1).toLowerCase();
    var togglestrresult = l1 + u1;
    document.getElementById(
      "togglestrresult"
    ).innerHTML = togglestrresult;
  }

    // Question 17
function totalNumber() {
    var x = document.getElementById("totalnmbr").value;
    var alpa = /[a-z]/gi;
    var nmbr = /[0-9]/gi;
    var spcl = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi;
    var totalalpa = x.match(alpa);
    document.getElementById(
        "totalalpharesult"
      ).innerHTML = `Total Number of Alphabet is ${totalalpa.length}`;
   
    var totalnmbr = x.match(nmbr);
    document.getElementById(
       "totalnmbrresult"
     ).innerHTML = `Total Number of Digits is ${totalnmbr.length}`;

    var totalspcl = x.match(spcl);
    document.getElementById(
     "totalspclresult"
    ).innerHTML = `Total Number of Special Characters is ${totalspcl.length}`;
}

// Question 18
    function totalVowel() {
        var x = document.getElementById("totalvwl").value;
        var vowal = /[a, e, i, o, u]/gi;
        var consonants  = /[B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z, Y]/gi;
        var totalvowal = x.match(vowal);
        document.getElementById(
            "totalvwlresult"
          ).innerHTML = `Total Number of Vowels is ${totalvowal.length}`;
       
        var totalconsonants = x.match(consonants);
        document.getElementById(
           "totalcontresult"
         ).innerHTML = `Total Number of Consonants is ${totalconsonants.length}`;
    
    }

// Question 19
function totalWords() {
    var x = document.getElementById("totalwrds").value;
    var words = x.split(" ");
    document.getElementById(
        "totalwrdsresult"
      ).innerHTML = `Total Number of Words is ${words.length}`;
}

// Question 20 | Help From Google
function reverseString() {
    var x = document.getElementById("reversestr").value;
    var reverse = "";
    for (var i = x.length -1; i >= 0; i--){
        reverse += x[i];
    }    
    document.getElementById(
        "reversestrresult"
      ).innerHTML = `Total Number of Words is ${reverse}`;
}


// Question 21 | Search from Google
function palindromeString() {
  var x = document.getElementById("pldstr").value;
  var pldstrresult = "";
  for (var i = x.length -1; i >= 0; i--){
    pldstrresult += x[i];
  }
  if (x.toLowerCase() === pldstrresult.toLowerCase()) {
    pldstrresult = "Palindrome";
  } else {
    pldstrresult = "Not palindrome";
  }
  document.getElementById(
      "pldstrresult"
    ).innerHTML = `String is ${pldstrresult}`;
}

// Question 22 | Help From Google
function reverseWords() {
  var x = document.getElementById("rvswrd").value;
  var reverse = x.split(" ");
  var reverse1 = reverse.reverse();  
  document.getElementById(
      "rvswrdresult"
    ).innerHTML = `Reverse Words are: ${reverse1}`;
}

// Question 23
function characterFind () {
  var x = document.getElementById("chrfind1").value;
  var y = document.getElementById("chrfind2").value;
  var chrindex = x.indexOf(y);
  document.getElementById("chrfindresult").innerHTML = `The index of ${y} is ${chrindex}`;
}

// Question 24
function lastCharacterFind () {
  var x = document.getElementById("lchrfind1").value;
  var y = document.getElementById("lchrfind2").value;
  var lchrindex = x.lastIndexOf(y);
  document.getElementById("lchrfindresult").innerHTML = `The Last Index of ${y} is ${lchrindex}`;
}

// Question 25
function arrayElements () {
  var x = document.getElementById("arrnmbr").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      otpt.push(prmt + " ");
  }
  document.getElementById("arrnmbrresult").innerHTML = `That is Array [${otpt}]`;
};

// Question 26
function arrayNegativeElements () {
  var x = document.getElementById("arrnegnmbr").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      var num1 = parseInt(prmt);
      if (num1 < 0) {
      otpt.push(num1)
      }
  };
  document.getElementById("arrnegnmbrresult").innerHTML = `That is Array of Negative Numbers [${otpt}]`;
};

// Question 27 | Help From Google
function arraySumElements () {
  var x = document.getElementById("arrsumnmbr").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      var num1 = parseInt(prmt);
      otpt.push(num1)
  };
  var sum = otpt.reduce(function(a, b){
          return a + b;
      }, 0);
  document.getElementById("arrsumnmbrresult").innerHTML = `The sum of Array [${otpt}] is = ${sum}`;
};


// Question 28
function arrayMaxMin () {
  var x = document.getElementById("arrmaxmin").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      var num1 = parseInt(prmt);
      otpt.push(num1)
  };
  var max = Math.max(...otpt);
  var min = Math.min(...otpt);
  document.getElementById("arrmaxminresult").innerHTML = `Maximum Number = ${max} and Minimum Number is = ${min}`;
};

// Question 29
function secondNumber () {
  var x = document.getElementById("scndnum").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      var num1 = parseInt(prmt);
      otpt.push(num1)
  };
otpt.sort(function(a,b){
  return b-a;
}
)
  document.getElementById("scndnumresult").innerHTML = `The Second Largest Number in this [${otpt}] is = ${otpt[1]}`;
};

// Question 30
function evenOddNumber () {
  var x = document.getElementById("evnoddnum").value;
  var otpt = [];
  var otpt2 = [];
  var otpt3 = [];
  var rmndrnum = 2;
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      var num1 = parseInt(prmt);
      // otpt.push(num1);
      if (num1 % rmndrnum === 0) {
        otpt2.push(num1);
      }
      if (num1 % rmndrnum !== 0) {
        otpt3.push(num1);
      }
  };
  document.getElementById("evnoddnumresult").innerHTML = `Total Even Numbers are = ${otpt2.length} and Total Odd Numbers are = ${otpt3.length}`;
};

// Question 31
function arrayNegativeElementsCount () {
  var x = document.getElementById("arrnegnmbrcount").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      var num1 = parseInt(prmt);
      if (num1 < 0) {
      otpt.push(num1)
      }
  };
  document.getElementById("arrnegnmbrcountresult").innerHTML = `Total Negative Numbers in this Array [${otpt}] = ${otpt.length}`;
};

// Question 32
function copyArray() {
  var x = document.getElementById("copyarry").value;
  var otpt = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i} for 1st Array`);
      // var num1 = parseInt(prmt);
      otpt.push(prmt + " ")
  };
  var y = document.getElementById("copyarry2").value;
  var otpt1 = [];
  for (var j=1; j<=y; j++){
      var prmt1 = prompt(`Enter Element No. ${j} for 2nd Array`);
      // var num1 = parseInt(prmt);
      otpt1.push(prmt1 + " ")
  };
  var sumarray = otpt.concat(otpt1);

  document.getElementById("copyarryresult").innerHTML = `1st Array [${otpt}]`;
  document.getElementById("copyarryresult1").innerHTML = `2st Array [${otpt1}]`;
  document.getElementById("copyarryresult2").innerHTML = `Copy 1st Array into 2nd Array [${sumarray}]`;
};


// Question 33
function insertElement() {
  var x = document.getElementById("insrtelmnt").value;
  var insrtarray = [];
  for (var i=1; i<=x; i++){
      var prmt = prompt(`Enter Element No. ${i}`);
      insrtarray.push(prmt + " ")
  };
document.getElementById("insrtelmntresult").innerHTML = `${insrtarray}`;
 return insrtarray;
};
var getarray = insertElement();
function newElement() {
  var x = document.getElementById("newelmnt").value;
  var y = document.getElementById("insrtelmntresult").innerHTML;
document.getElementById("newelmntresult").innerHTML = `Array After insert Element = [${y},${x}]`;
};


// Question 34
var x = ["Faisalabad", "Karachi", "Multan", "Islamabad", "Lahore"];
function deleteElement() {
  // x = document.getElementById("dltelmnt").value;
  // var array = x;
  var y = document.getElementById("dltindx").value;
  // console.log(x);
  var z = x.splice(y,1);
  var dltarray = x;
  // console.log(z);

 
document.getElementById("dltelmntresult").innerHTML = `Array = [${dltarray}]`;
};