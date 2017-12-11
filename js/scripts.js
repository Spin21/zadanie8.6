// scripts.js

var a = prompt("wprowadź pierwszą wartość liczbową");
var b = prompt("wprowadż drugą wartość liczbową");
var c = (a * a) - (2 * a * b) + (b * b);

if (c > 0) {
	console.log("wynik jest dodatni");
	alert("wynik jest dodatni");
} else if (c < 0) {
	console.log("wynik jest ujemny");
	alert("wynik jest ujemny");
} else {
	console.log("wynik jest zerem");
	alert("wynik jest zerem");
}
	