
var a = prompt("Ingresa el valor de 'a'. Una ecuación de segundo grado es toda expresión de la forma: ax^2 + bx + c = 0, con 'a' diferente de 0.");
var b = prompt("Ingresa el valor de 'b'. Una ecuación de segundo grado es toda expresión de la forma: ax^2 + bx + c = 0, con 'a' diferente de 0.");
var c = prompt("Ingresa el valor de 'c'. Una ecuación de segundo grado es toda expresión de la forma: ax^2 + bx + c = 0, con 'a' diferente de 0.");
var x1;
var x2;


x1 = ((-b + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5)) / (2 * a)).toFixed(2);
x2 = ((-b - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5)) / (2 * a)).toFixed(2);


document.write("<p class='simple-text'>a: " + a + "</p>");
document.write("<p class='simple-text'>b: " + b + "</p>");
document.write("<p class='simple-text'>c: " + c + "</p>" + "<br />");
document.write("<p class='simple-text'>x1: " + x1 + "</p>");
document.write("<p class='simple-text'>x2: " + x2 + "</p>");