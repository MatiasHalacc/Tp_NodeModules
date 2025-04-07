// 1
import concatenar from "./modulos/strings.js"
console.log(concatenar("hola " , "como va?"));

// 2
import matematica from "./modulos/matematica.js"
console.log(matematica.suma(1, 2));
console.log(matematica.resta(1, 2));
console.log(matematica.multiplicacion(1, 2));
console.log(matematica.division(1, 2));

// 3
import Alumno from "./modulos/alumnos.js"

const alu = new Alumno("Hola", 123)
console.log(alu)

// 4
import LeeryReemplazar from "./modulos/archivo.js";
LeeryReemplazar();

// 5 y 6
import parsearUrl from './modulos/url.js';

const objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto);

const objeto2 = parsearUrl("esto no es una url");
console.log(objeto2);

// 7
import countryToCurrency from "./node_modules/country-to-currency/index.esm.js";
console.log( countryToCurrency[ 'AR' ] );