let x = 5;
let y = 10;
//arithmetic operators
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
console.log(x++);
console.log(x);
console.log(x--);
console.log(x);
//Assignment operators
//let a = 2;
//a = a+ 9;
//a +=9;
//a = a*10;
//a *=10;
//console.log(a);//
let a=1;
//relational
console.log(a>0);
console.log(a>1);
console.log(a>=1);
console.log(a<=1);

//equality
console.log(a==1);
console.log(!a==1);
console.log(1 === 1);
console.log('1'===1);
console.log('1' == 1);
console.log('true'== 1);

//terenary 

let points = 150;
let type = points>100?'gold':'silver';
console.log(type);

//logical operators

//let highInterScore = true;
//let goodEamcetRank = true;
//let eligibleForCollege = (highInterScore && goodEamcetRank);
//console.log(eligibleForCollege);

//logical OR

//let highInterScore=false;
//let goodEamcetRank=true;
//let eligibleForCollege=(highInterScore ||goodEamcetRank);
//console.log(eligibleForCollege);

let highInterScore=false;
let goodEamcetRank=false;
let eligibleForCollege=(highInterScore ||goodEamcetRank);
console.log('Eligible', eligibleForCollege);
let applicationRefused = !eligibleForCollege;
console.log('Application Refused', applicationRefused);

let b= (2+3)*5;
console.log(b);











