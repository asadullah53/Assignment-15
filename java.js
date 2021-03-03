// Question 1
function maxNmbr() {
  var x1 = document.getElementById("fnumber").value;
  var y1 = document.getElementById("snumber").value;
  var maxresult1;
  if (x1 > y1) {
    maxresult1 = x1;
  } else {
    maxresult1 = y1;
  };
  document.getElementById(
    "maxresult"
  ).innerHTML = `Maximum Number is ${maxresult1}`;
};  

// Question 2
function maxNmbr3() {
  var x2 = document.getElementById("fnumber1").value;
  var y2 = document.getElementById("snumber2").value;
  var z2 = document.getElementById("tnumber3").value;
  var maxresult2;
  if (x2 > y2) {
    maxresult2 = x2;
  } else if (y2 > z2) {
    maxresult2 = y2;
  } else {
    maxresult2 = z2;
  }
  document.getElementById(
    "maxresult3"
  ).innerHTML = `Maximum Number is ${maxresult2}`;
}

// Question 3
function numberType() {
  var x3 = document.getElementById("nmbrtype").value;
  var nmbrtyperesult;
  if (x3 > 0) {
    nmbrtyperesult = "Positive";
  } else if (x3 < 0) {
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
  var x4 = document.getElementById("nmbrdiv").value;
  var nmbrdivisible;
  if (x4 % 5 === 0 && x4 % 11 === 0) {
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
  var x5 = document.getElementById("nmbrrem").value;
  var nmbrrmndr;
  var reminderResult = 2;
  if (x5 % reminderResult === 0) {
    nmbrrmndr = "Even";
  } else {
    nmbrrmndr = "Odd";
  }
  document.getElementById("nmbrrmndr").innerHTML = `Number is ${nmbrrmndr}`;
}

// Question 6 | "Ye Question Google pr search tha"
function leapYear() {
  var x6 = document.getElementById("lyear").value;
  var lyearresult;
  if ((0 == x6 % 4 && 0 != x6 % 100) || 0 == x6 % 400) {
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
  var x7 = document.getElementById("chrtype").value;
  var chtyperesult;
  var alphabet = /[A-Za-z]/;
  if (x7.match(alphabet)) {
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
  var x8 = document.getElementById("voweltxt").value;
  var vowelresult;
  var word = /[v,e,i,o,u]/;
  if (x8.match(word)) {
    vowelresult = "Vowel";
  } else {
    vowelresult = "Not Vowel";
  }
  document.getElementById("vowelresult").innerHTML = `Word is ${vowelresult}`;
}

// Question 9
function wordType() {
  var x9 = document.getElementById("wrdtype").value;
  var wrdtyperesult;
  var word = /[A-Za-z]/;
  var digits = /[0-9]/;
  if (x9.match(word)) {
    wrdtyperesult = "Alphabet";
  } else if (x9.match(digits)) {
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
  var x10 = document.getElementById("strlength").value;
  var strlengthresult = x10.length;
  document.getElementById(
    "strlengthresult"
  ).innerHTML = `The Length of this String is  ${strlengthresult}`;
}

// Question 11
function copyString() {
  var x11 = document.getElementById("copystr").value;
  var copystrresult = x11;
  var str = "Pakistan"
  var str2 = str + " " + x11;
  document.getElementById(
    "copystrresult"
  ).innerHTML = `String 1 is  ${copystrresult}`;
  document.getElementById("str2").innerHTML = `String 2 is  ${str2}`;
}

// Question 12
function concateString() {
    var x12 = document.getElementById("constr1").value;
    var y12 = document.getElementById("constr2").value;
    var constrresult = x12 + " " + y12;
    document.getElementById(
      "constrresult"
    ).innerHTML = `Result is ${constrresult}`;
  }

  // Question 13 | Help From Google
function compareString() {
    var x13 = document.getElementById("comstr1").value;
    var y13 = document.getElementById("comstr2").value;
    var comstrresult = x13.localeCompare(y13);
    document.getElementById(
      "comstrresult"
    ).innerHTML = `Comparison of Both Strings:  ${comstrresult}`;
  }

  // Question 14
function upperString() {
    var x14 = document.getElementById("lwrstr").value;
    var lwrstrresult = x14.toUpperCase();
    document.getElementById(
      "lwrstrresult"
    ).innerHTML = lwrstrresult;
  }

    // Question 15
function lowerString() {
    var x15 = document.getElementById("upperstr").value;
    var upperstrresult = x15.toLowerCase();
    document.getElementById(
      "upperstrresult"
    ).innerHTML = upperstrresult;
  }

      // Question 16 | Doubt hai is mn
function toggleString() {
    var x16 = document.getElementById("togglestr").value;
    var l1 = x16.slice(0,1).toUpperCase();
    var u1 = x16.slice(1).toLowerCase();
    var togglestrresult = l1 + u1;
    document.getElementById(
      "togglestrresult"
    ).innerHTML = togglestrresult;
  }

    // Question 17
function totalNumber() {
    var x17 = document.getElementById("totalnmbr").value;
    var alpa = /[a-z]/gi;
    var nmbr = /[0-9]/gi;
    var spcl = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gi;
    var totalalpa = x17.match(alpa);
    document.getElementById(
        "totalalpharesult"
      ).innerHTML = `Total Number of Alphabet is ${totalalpa.length}`;
   
    var totalnmbr = x17.match(nmbr);
    document.getElementById(
       "totalnmbrresult"
     ).innerHTML = `Total Number of Digits is ${totalnmbr.length}`;

    var totalspcl = x17.match(spcl);
    document.getElementById(
     "totalspclresult"
    ).innerHTML = `Total Number of Special Characters is ${totalspcl.length}`;
}

// Question 18
    function totalVowel() {
        var x18 = document.getElementById("totalvwl").value;
        var vowal = /[a, e, i, o, u]/gi;
        var consonants  = /[B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Z, Y]/gi;
        var totalvowal = x18.match(vowal);
        document.getElementById(
            "totalvwlresult"
          ).innerHTML = `Total Number of Vowels is ${totalvowal.length}`;
       
        var totalconsonants = x18.match(consonants);
        document.getElementById(
           "totalcontresult"
         ).innerHTML = `Total Number of Consonants is ${totalconsonants.length}`;
    
    }

// Question 19
function totalWords() {
    var x19 = document.getElementById("totalwrds").value;
    var words = x19.split(" ");
    document.getElementById(
        "totalwrdsresult"
      ).innerHTML = `Total Number of Words is ${words.length}`;
}

// Question 20 | Help From Google
function reverseString() {
    var x20 = document.getElementById("reversestr").value;
    var reverse = "";
    for (var i = x20.length -1; i >= 0; i--){
        reverse += x20[i];
    }    
    document.getElementById(
        "reversestrresult"
      ).innerHTML = `Total Number of Words is ${reverse}`;
}


// Question 21 | Search from Google
function palindromeString() {
  var x21 = document.getElementById("pldstr").value;
  var pldstrresult = "";
  for (var i = x21.length -1; i >= 0; i--){
    pldstrresult += x21[i];
  }
  if (x21.toLowerCase() === pldstrresult.toLowerCase()) {
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
  var x22 = document.getElementById("rvswrd").value;
  var reverse = x22.split(" ");
  var reverse1 = reverse.reverse();  
  document.getElementById(
      "rvswrdresult"
    ).innerHTML = `Reverse Words are: ${reverse1}`;
}

// Question 23
function characterFind () {
  var x23 = document.getElementById("chrfind1").value;
  var y23 = document.getElementById("chrfind2").value;
  var chrindex = x23.indexOf(y23);
  document.getElementById("chrfindresult").innerHTML = `The index of ${y23} is ${chrindex}`;
}

// Question 24
function lastCharacterFind () {
  var x24 = document.getElementById("lchrfind1").value;
  var y24 = document.getElementById("lchrfind2").value;
  var lchrindex = x24.lastIndexOf(y24);
  document.getElementById("lchrfindresult").innerHTML = `The Last Index of ${y24} is ${lchrindex}`;
}

// Question 25
function arrayElements () {
  var x25 = document.getElementById("arrnmbr").value;
  var otpt = [];
  for (var i25=1; i25<=x25; i25++){
      var prmt25 = prompt(`Enter Element No. ${i25}`);
      otpt.push(prmt25 + " ");
  }
  document.getElementById("arrnmbrresult").innerHTML = `That is Array [${otpt}]`;
};

// Question 26
function arrayNegativeElements () {
  var x26 = document.getElementById("arrnegnmbr").value;
  var otpt26 = [];
  for (var i26=1; i26<=x26; i26++){
      var prmt26 = prompt(`Enter Element No. ${i26}`);
      var num26 = parseInt(prmt26);
      if (num26 < 0) {
      otpt26.push(num26)
      }
  };
  document.getElementById("arrnegnmbrresult").innerHTML = `That is Array of Negative Numbers [${otpt26}]`;
};

// Question 27 | Help From Google
function arraySumElements () {
  var x27 = document.getElementById("arrsumnmbr").value;
  var otpt27 = [];
  for (var i27=1; i27<=x27; i27++){
      var prmt27 = prompt(`Enter Element No. ${i27}`);
      var num27 = parseInt(prmt27);
      otpt27.push(num27)
  };
  var sum = otpt27.reduce(function(a, b){
          return a + b;
      }, 0);
  document.getElementById("arrsumnmbrresult").innerHTML = `The sum of Array [${otpt27}] is = ${sum}`;
};


// Question 28
function arrayMaxMin () {
  var x28 = document.getElementById("arrmaxmin").value;
  var otpt28 = [];
  for (var i28=1; i28<=x28; i28++){
      var prmt28 = prompt(`Enter Element No. ${i28}`);
      var num28 = parseInt(prmt28);
      otpt28.push(num28)
  };
  var max = Math.max(...otpt28);
  var min = Math.min(...otpt28);
  document.getElementById("arrmaxminresult").innerHTML = `Maximum Number = ${max} and Minimum Number is = ${min}`;
};

// Question 29
function secondNumber () {
  var x29 = document.getElementById("scndnum").value;
  var otpt29 = [];
  for (var i29=1; i29<=x29; i29++){
      var prmt29 = prompt(`Enter Element No. ${i29}`);
      var num29 = parseInt(prmt29);
      otpt29.push(num29)
  };
otpt29.sort(function(a,b){
  return b-a;
}
)
  document.getElementById("scndnumresult").innerHTML = `The Second Largest Number in this [${otpt29}] is = ${otpt29[1]}`;
};

// Question 30
function evenOddNumber () {
  var x30 = document.getElementById("evnoddnum").value;
  var otpt30 = [];
  var otpt301 = [];
  var otpt302 = [];
  var rmndrnum = 2;
  for (var i30=1; i30<=x30; i30++){
      var prmt30 = prompt(`Enter Element No. ${i30}`);
      var num30 = parseInt(prmt30);
      // otpt.push(num1);
      if (num30 % rmndrnum === 0) {
        otpt301.push(num30);
      }
      if (num30 % rmndrnum !== 0) {
        otpt302.push(num30);
      }
  };
  document.getElementById("evnoddnumresult").innerHTML = `Total Even Numbers are = ${otpt301.length} and Total Odd Numbers are = ${otpt302.length}`;
};

// Question 31
function arrayNegativeElementsCount () {
  var x31 = document.getElementById("arrnegnmbrcount").value;
  var otpt31 = [];
  for (var i31=1; i31<=x31; i31++){
      var prmt31 = prompt(`Enter Element No. ${i31}`);
      var num31 = parseInt(prmt31);
      if (num31 < 0) {
      otpt31.push(num31)
      }
  };
  document.getElementById("arrnegnmbrcountresult").innerHTML = `Total Negative Numbers in this Array [${otpt31}] = ${otpt31.length}`;
};

// Question 32
function copyArray() {
  var x32 = document.getElementById("copyarry").value;
  var otpt32 = [];
  for (var i32=1; i32<=x32; i32++){
      var prmt32 = prompt(`Enter Element No. ${i32} for 1st Array`);
      otpt32.push(prmt32 + " ")
  };
  var y32 = document.getElementById("copyarry2").value;
  var otpt321 = [];
  for (var j32=1; j32<=y32; j32++){
      var prmt321 = prompt(`Enter Element No. ${j32} for 2nd Array`);
      otpt321.push(prmt321 + " ")
  };
  var sumarray = otpt32.concat(otpt321);

  document.getElementById("copyarryresult").innerHTML = `1st Array [${otpt32}]`;
  document.getElementById("copyarryresult1").innerHTML = `2st Array [${otpt321}]`;
  document.getElementById("copyarryresult2").innerHTML = `Copy 1st Array into 2nd Array [${sumarray}]`;
};


// Question 33
var insrtarray = [];
function insertElement() {
  var x33 = document.getElementById("insrtelmnt").value;
  for (var i33=1; i33<=x33; i33++){
      var prmt33 = prompt(`Enter Element No. ${i33}`);
      insrtarray.push(prmt33);
  };
document.getElementById("insrtelmntresult").innerHTML = `Array = [${insrtarray}]`;
};
function newElement() {
  var x331 = document.getElementById("newelmnt").value;
  insrtarray.push(x331);
document.getElementById("newelmntresult").innerHTML = `Array After insert Element = [${insrtarray}]`;
};


// Question 34
var arrayEmp = [];
const getArray = () => {
    var x34 = document.getElementById("entrNum").value;
    for (i34 = 1; i34<=x34; i34++) {
        var arrayElement = prompt(`Enter Element No. ${i34} of the Array`);
        arrayEmp.push(arrayElement);
    }
    document.getElementById("result").innerHTML = `Array = [${arrayEmp}]`;
}
const deleteElement = () => {
    var x34a = document.getElementById("delIndex").value;
    var y34a = arrayEmp.splice(x34a,1);
    document.getElementById("newresult").innerHTML =  `Array After Delete Element = [${arrayEmp}]`;
}


// Question 35
const roundNumber = () => {
    var x35 = document.getElementById("rndnum").value;
    var y35 = parseInt(x35);
    var z35 = y35 + .50;
    var a35 = 0;
    if (x35 >= z35) {
        a35 = y35 + 1;      
    } else {
      a35 = y35;
    }
    document.getElementById("rndnumresult").innerHTML = `Round Number is = ${a35}`;
}

// Question 36
const ceilNumber = () => {
  var x36 = document.getElementById("clnum").value;
  var y36 = parseInt(x36);
  var z36 = y36 + .0;
  var a36 = 0;
  if (x36 > z36) {
      a36 = y36 + 1;      
  } else {
    a36 = y36;
  }
  document.getElementById("clnumresult").innerHTML = `Ceil Number is = ${a36}`;
}

// Question 37
const floorNumber = () => {
  var x37 = document.getElementById("flnum").value;
  var y37 = parseInt(x37);
  document.getElementById("flnumresult").innerHTML = `Floor Number is = ${y37}`;
}

// Question 38
const numberLoop = () => {
  var x38 = document.getElementById("numlp").value;
  var y38 = [];
  for (let i38 = 1; i38 <= x38; i38++) {
    y38.push(" " + i38);
  }
  document.getElementById("numlpresult").innerHTML = `Natural Numbers are = ${y38}`;
}

// Question 39
const reverseNumberLoop = () => {
  var x39 = document.getElementById("rvnumlp").value;
  var y39 = [];
  for (let i39 = 1; i39 <= x39; i39++) {
    y39.push(" " + i39);
  }
  var z39 = y39.reverse();
  document.getElementById("rvnumlpresult").innerHTML = `Reverse Numbers are = ${z39}`;
}


// Question 40
const azLoop = () => {
  var x40 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var y40 = "";
  for (var i40 = 0; i40 < x40.length; i40++) {
    y40 += x40[i40] + " ";
  }
  document.getElementById("azlwpresult").innerHTML = `Alphabets in Lower Case= ${y40}`;
}
const azUpperLoop = () => {
  var x40a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var y40a = "";
  for (var i40a = 0; i40a < x40a.length; i40a++) {
    y40a += x40a[i40a] + " ";
  }
  var z40a = y40a.toUpperCase();
  document.getElementById("azuppresult").innerHTML = `Alphabets in Upper Case = ${z40a}`;
}


// Question 41
const evenNumer = () => {
  var x41 = 100;
  var y41 = [];
  for (var i41 = 1; i41 <= 100; i41++) {
    if (i41 % 2 === 0) {
      y41.push(i41);
    }
  }
  document.getElementById("evennumresult").innerHTML = `Even Numbers are = ${y41}`;
}


// Question 42
const oddNumer = () => {
  var x42 = 100;
  var y42 = [];
  for (var i42 = 1; i42 <= 100; i42++) {
    if (i42 % 2 !== 0) {
      y42.push(i42);
    }
  }
  document.getElementById("oddnumresult").innerHTML = `Odd Numbers are = ${y42}`;
}