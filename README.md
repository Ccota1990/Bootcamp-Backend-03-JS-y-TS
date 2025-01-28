# Ejercicios JavaScript

## Ejercicio 1
Un texto en formato CSV tiene el nombre de los campos en la primera fila y los datos en el resto, separados por comas. Crea un parseador que reciba un string en formato CSV y devuelva una colección de objetos. Utiliza destructuring, rest y spread operator donde creas conveniente.

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

```javascript
const fromCSV = (csv) => {

};

const result = fromCSV(data);
console.log(result);

/*

Formato del resultado:

[
  {
    id: "15519533",
    name: "Raul",
    surname: "Flores",
    gender: "male",
    email: "raul.flores@example.com",
    picture: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: "82739790",
    name: "Alvaro",
    surname: "Alvarez",
    gender: "male",
    email: "alvaro.alvarez@example.com",
    picture: "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    ...
  }
]
*/
```
Extra: Añade un segundo argumento a la función para indicar el número de atributos a añadir. Si dicho argumento no es informado cada objeto tendrá todos los atributos.

```javascript
const fromCSV = (csv, nAttrs) => {};

console.log(fromCSV(data)); // Cada usuario tendrá todos los atributos como la implementación original
console.log(fromCSV(data, 2)); // cada usuario tendrá sólo `id` y `name`
console.log(fromCSV(data, 3)); // cada usuario tendrá sólo `id`, `name` y `surname`
console.log(fromCSV(data, 4)); // cada usuario tendrá sólo `id`, `name`, `surname` y `gender`
```

## Ejercicio 2
Implementar una funcion replaceAt que tome como primer argumento un array, como segundo argumento un índice y como tercer argumento un valor y reemplace el elemento dentro del array en el índice indicado. El array de entrada no debe de ser mutado, eso es, que debes crear un nuevo array sin modificar el existente. Utiliza spread operator, y slice para conseguirlo.

```javascript
const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {

};

const result = replaceAt(elements, index, newValue);
console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];
```

## Ejercicio 3
Crea una función que reciba una colección de objetos y un año. Dicha función deberá de mostrar los nombres de las tres personas con el ranking más alto del año.

const data = [
  { ranking: 6.3, year: 1998, name: "Monroe", gender: "Genderfluid", id: 1450, surname: "Jerde" },
  { ranking: 5.4, year: 1999, name: "Maxie", gender: "Bigender", id: 1652, surname: "Keebler" },
  { ranking: 8.7, year: 2000, name: "Emilee", gender: "Genderqueer", id: 4779, surname: "Ritchie" },
  { ranking: 6.5, year: 2001, name: "Rudy", gender: "Bigender", id: 7105, surname: "Gusikowski" },
  { ranking: 7.1, year: 1998, name: "Randy", gender: "Genderqueer", id: 5950, surname: "Lebsack" },
  { ranking: 4.9, year: 2000, name: "Esteban", gender: "Genderqueer", id: 7987, surname: "Fritsch" },
  { ranking: 5.3, year: 2001, name: "Leonard", gender: "Male", id: 6268, surname: "Frami" },
  { ranking: 8.8, year: 2002, name: "Lang", gender: "Polygender", id: 1033, surname: "Dietrich" },
  { ranking: 9.1, year: 2000, name: "Lettie", gender: "Agender", id: 6403, surname: "Gutmann" },
  { ranking: 6.0, year: 1998, name: "Shonda", gender: "Agender", id: 1324, surname: "Borer" },
  { ranking: 7.3, year: 2003, name: "Francene", gender: "Agender", id: 6836, surname: "Blanda" },
  { ranking: 6.8, year: 2003, name: "Everett", gender: "Polygender", id: 4937, surname: "O'Keefe" },
  { ranking: 5.3, year: 1998, name: "Bernardo", gender: "Agender", id: 8148, surname: "Baumbach" },
  { ranking: 9.3, year: 2003, name: "Brianna", gender: "Female", id: 7716, surname: "Schamberger" },
  { ranking: 9.7, year: 1998, name: "Douglass", gender: "Male", id: 4152, surname: "Hilpert" },
  { ranking: 4.8, year: 1998, name: "Angel", gender: "Female", id: 355, surname: "O'Hara" },
  { ranking: 5.7, year: 2000, name: "Hugh", gender: "Male", id: 9600, surname: "Hilll" },
  { ranking: 8.5, year: 1999, name: "Graciela", gender: "Agender", id: 871, surname: "Kerluke" },
  { ranking: 2.4, year: 2000, name: "Chassidy", gender: "Agender", id: 4313, surname: "Hegmann" },
  { ranking: 3.4, year: 1999, name: "Abdul", gender: "Agender", id: 367, surname: "Weimann" },
  { ranking: 7.1, year: 2002, name: "Coleen", gender: "Non-binary", id: 1428, surname: "Feil" },
  { ranking: 8.7, year: 2001, name: "Eleanora", gender: "Genderfluid", id: 984, surname: "Barton" },
  { ranking: 9.7, year: 2002, name: "Sean", gender: "Agender", id: 5689, surname: "Runolfsson" },
  { ranking: 4.5, year: 1999, name: "Ike", gender: "Female", id: 8445, surname: "Haag" },
  { ranking: 7.7, year: 2001, name: "Rachele", gender: "Genderqueer", id: 6978, surname: "Grady" },
  { ranking: 9.1, year: 2001, name: "Sam", gender: "Bigender", id: 1321, surname: "Fritsch" },
  { ranking: 9.0, year: 2000, name: "Eddy", gender: "Polygender", id: 8273, surname: "Kemmer" },
  { ranking: 4.6, year: 1999, name: "Jamar", gender: "Female", id: 6052, surname: "Grant" },
  { ranking: 9.3, year: 2001, name: "Dino", gender: "Genderfluid", id: 5671, surname: "Erdman" },
  { ranking: 7.6, year: 1999, name: "Ervin", gender: "Non-binary", id: 9945, surname: "Powlowski" }
];
```javascript
const winnerByYear = (arr, year) => {

};

console.log(winnerByYear(data, 1998)) // [ 'Douglass', 'Randy', 'Monroe' ]
console.log(winnerByYear(data, 1999)) // [ 'Graciela', 'Ervin', 'Maxie' ]
console.log(winnerByYear(data, 2000)) // [ 'Lettie', 'Eddy', 'Emilee' ]
console.log(winnerByYear(data, 2001)) // [ 'Dino', 'Sam', 'Eleanora' ]
console.log(winnerByYear(data, 2002)) // [ 'Sean', 'Lang', 'Coleen' ]
console.log(winnerByYear(data, 2003)) // [ 'Brianna', 'Francene', 'Everett' ]
console.log(winnerByYear(data, 2004)) // []
```