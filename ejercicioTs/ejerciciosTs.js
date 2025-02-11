/* EJERCICIO 1
Dados el siguiente snippet de código, crea la interfaz Student y úsala para sustituir los unknown:
*/
var _a;
var users = [
    {
        name: "Luke Patterson",
        age: 32,
        occupation: "Internal auditor",
    },
    {
        name: "Jane Doe",
        age: 41,
        subject: "English",
    },
    {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
    },
    {
        name: "Bruce Willis",
        age: 39,
        subject: "Biology",
    },
];
var logUser = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("  - ".concat(name, ", ").concat(age));
};
users.forEach(logUser);
/* EJERCICIO 3
Con el resultado del ejercicio 2,
sustituye la función logUser por la siguiente y modifica el código aplicando las guardas que creas conveniente para corregir los errores de compilación:
*/
var isStudent = function (user) { return user.occupation !== undefined; };
var isTeacher = function (user) { return user.subject !== undefined; };
var logUser1 = function (user) {
    var extraInfo;
    if (isStudent(user)) {
        extraInfo = user.occupation;
    }
    else if (isTeacher(user)) {
        extraInfo = user.subject;
    }
    else {
        extraInfo = "No hay información";
    }
    console.log("  - ".concat(user.name, ", ").concat(user.age, ", ").concat(extraInfo));
};
/* EJERCICIO 4
Utilizando las misma interfaz de Student, de los ejercicios anteriores arregla los errores de TypeScript
para podamos pasar aquellos criterios que necesitemos sin tener que pasar toda la información de un Student.
Arregla los subsiguientes errores que aparezcan al asignar tipo a criteria.
*/
var students = [
    {
        name: "Luke Patterson",
        age: 32,
        occupation: "Internal auditor",
    },
    {
        name: "Emily Coleman",
        age: 25,
        occupation: "English",
    },
    {
        name: "Alexandra Morton",
        age: 35,
        occupation: "Conservation worker",
    },
    {
        name: "Bruce Willis",
        age: 39,
        occupation: "Placement officer",
    },
];
var filterStudentsBy = function (students, criteria) {
    var criteriaForStudent = criteria;
    return students.filter(function (student) {
        var criteriaKeys = Object.keys(criteriaForStudent);
        return criteriaKeys.every(function (fieldName) {
            return criteriaForStudent[fieldName] === student[fieldName];
        });
    });
};
var logStudent = function (_a) {
    var name = _a.name, occupation = _a.occupation;
    console.log("  - ".concat(name, ", ").concat(occupation));
};
console.log("Students of age 35:");
filterStudentsBy(students, { age: 35 }).forEach(logStudent);
/* EJERCICIO 5
Mediante genéricos y tuplas, tipa de forma completa la función para solventar los errores de compilación.
*/
var swap = function (arg1, arg2) {
    return [arg2, arg1];
};
var age, occupation;
_a = swap(39, "Placement officer"), occupation = _a[0], age = _a[1];
console.log("Occupation: ", occupation);
console.log("Age: ", age);
