/* EJERCICIO 1
Dados el siguiente snippet de código, crea la interfaz Student y úsala para sustituir los unknown:
*/ 

interface Student {
  name : string;
  age: number;
  occupation: string;
}

// const students: Student[] = [
//     {
//       name: "Patrick Berry",
//       age: 25,
//       occupation: "Medical scientist",
//     },
//     {
//       name: "Alice Garner",
//       age: 34,
//       occupation: "Media planner",
//     },
//   ];

/* EJERCICIO 2
Utilizando la interfaz Student del ejercicio anterior, crea la definición de User de tal manera que pueda ser o Student o Teacher. 
Aplica la definición de User donde sea requerido solventar los errores de tipos.
*/ 

type User = Student | Teacher;

interface Teacher {
    name: string;
    age: number;
    subject: string;
  }
  
  const users: User [] = [
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
  
  const logUser = ({ name, age }: User) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  users.forEach(logUser);

/* EJERCICIO 3
Con el resultado del ejercicio 2, 
sustituye la función logUser por la siguiente y modifica el código aplicando las guardas que creas conveniente para corregir los errores de compilación:
*/ 

const isStudent = (user: User): user is Student => (user as Student).occupation !== undefined;
const isTeacher = (user: User): user is Teacher => (user as Teacher).subject !== undefined;


const logUser1 = (user: User): void => {
    let extraInfo: string;
    if (isStudent(user)) {
      extraInfo = user.occupation;
    } else if (isTeacher(user)) {
      extraInfo = user.subject;
    } else{
      extraInfo ="No hay información"
    }
    console.log(`  - ${user.name}, ${user.age}, ${extraInfo}`);
  };

/* EJERCICIO 4
Utilizando las misma interfaz de Student, de los ejercicios anteriores arregla los errores de TypeScript 
para podamos pasar aquellos criterios que necesitemos sin tener que pasar toda la información de un Student. 
Arregla los subsiguientes errores que aparezcan al asignar tipo a criteria.
*/ 
const students: Student[] = [
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
  const filterStudentsBy = (students: Student[], criteria: string | any): Student[] => {
    const criteriaForStudent = criteria as Student
    return students.filter((student) => {
      const criteriaKeys = Object.keys(criteriaForStudent);
      return criteriaKeys.every((fieldName) => {
        return criteriaForStudent[fieldName] === student[fieldName];
      });
    });
  };
  
  const logStudent = ({ name, occupation }: Student) => {
    console.log(`  - ${name}, ${occupation}`);
  };
  
  console.log("Students of age 35:");
  filterStudentsBy(students, { age: 35 }).forEach(logStudent);

/* EJERCICIO 5
Mediante genéricos y tuplas, tipa de forma completa la función para solventar los errores de compilación.
*/ 
const swap = <T1, T2>(arg1: T1, arg2: T2): [T2, T1] => {
  return [arg2, arg1];
};
  
  let age: number, occupation: string;
  
  [occupation, age] = swap(39, "Placement officer");
  console.log("Occupation: ", occupation);
  console.log("Age: ", age);

