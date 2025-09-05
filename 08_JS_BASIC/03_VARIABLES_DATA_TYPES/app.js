// var, let, const
var a;
var b = 10;

console.log(a);
console.log(b);
a = 20;
console.log(a);

console.log(a, b);
console.log("a=", a, "b=", b);

console.log("c");
var c = 30;
console.log(c); // undefined

// Caractere permise - a-z, A-Z, 0-9, _, $
// camleCase
var userName = "Costel";
var numberOfLikes;
var user1;
var user2;
var emailAddress;

// Nume invalide pentru variabile
// var 1nume;
// var nume-utilizator;
// var function;
// var if;
// var for;
// var while;

// Siruri de caractere (string)
var firstName = "John";
var lastName = "Doe";
var middleName = "Michael";
var fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

var text2 = 20 + "20";
console.log(text2);
console.log(Number(text2));

// Numere (number)
var intreg = 10;
var zecimal = 3.14;
var notatieEponentiala = 2.14e4;
console.log(intreg, zecimal, notatieEponentiala);

var hexaNumber = 0xff; // 255 in baza 10
var binaryNumber = 0b1010; // 10 in baza 10
console.log(hexaNumber, binaryNumber);

//valori speciale
var infinit = Infinity;
var notANumber = NaN;
console.log(infinit, notANumber);
console.log(typeof infinit, typeof notANumber);
var n = "x";
console.log(Number(n));

var n = "f";
console.log(Number(n));
console.log(isNaN("x"));
console.log(isNaN(10));

// Valoare booleana (boolean)
var isAdult = true;
var isMinor = false;
console.log(isAdult, isMinor);
console.log(typeof isAdult);

//Operatori
// Operatori aritmetici + - * / %
var x = 10;
var y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //restul impartirii
console.log(10 % 2);
console.log(11 % 2);
var estePar = x % 2 == 0;
console.log(estePar);

// Operatori incrementare si decrementare
var i = 10;
i++; // i = i + 1
console.log(i);
i--; // i = i - 1
console.log(i);
++i;
console.log(i);
--i;
console.log(i);

// x++ egal cu x+x=1 si cu x+=1
// x-- egal cu x=x-1 si cu x-=1
// x*=2 egal cu x=x*2
// x/=2 egal cu x=x/2
// x%=2 egal cu x=x%2
x += 5; // x = x + 5
console.log(x);
x -= 5; // x = x - 5
console.log(x);
x *= 2; // x = x * 2
console.log(x);
x /= 2; // x = x / 2
console.log(x);
x %= 2; // x = x % 2
console.log(x);

// Operatori de comparare
// ==, ===, !=, !==, <, >, <=, >=
var a = 10;
var b = 20;
console.log(a == b);

//Operatori logici
// &&, ||, !
var expr1 = a < b && a != b;
console.log(expr1);
var expr2 = a > b || a != b;
console.log(expr2);
var expr3 = !(a > b);
console.log(expr3);

//Operatorul typeof
console.log(typeof a);
console.log(typeof firstName);
console.log(typeof (2 < 3));

// Operatorul ternar
var age = 20;
var canVote = age >= 18 ? "yes" : "no";
console.log(canVote);
var canDrive = age >= 16 ? "yes" : "no";
console.log(canDrive);
var canDrink = age >= 21 ? "yes" : "no";
console.log(canDrink);
// age >= 21 ? console.log("yes") : console.log("no");
