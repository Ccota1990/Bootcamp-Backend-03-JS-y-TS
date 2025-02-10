/* EJERCICIO 1
Dados el siguiente snippet de código, crea la interfaz Student y úsala para sustituir los unknown:
*/ 

const students: unknown = [
    {
      name: "Patrick Berry",
      age: 25,
      occupation: "Medical scientist",
    },
    {
      name: "Alice Garner",
      age: 34,
      occupation: "Media planner",
    },
  ];

/* EJERCICIO 2
Utilizando la interfaz Student del ejercicio anterior, crea la definición de User de tal manera que pueda ser o Student o Teacher. 
Aplica la definición de User donde sea requerido solventar los errores de tipos.
*/ 

interface Teacher {
    name: string;
    age: number;
    subject: string;
  }
  
  const users: Teacher[] = [
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
  
  const logUser = ({ name, age }: Teacher) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  users.forEach(logUser);

/* EJERCICIO 3
Con el resultado del ejercicio 2, 
sustituye la función logUser por la siguiente y modifica el código aplicando las guardas que creas conveniente para corregir los errores de compilación:
*/ 

const logUser = (user: User) => {
    let extraInfo: string;
    if (user.occupation) {
      extraInfo = user.occupation;
    } else {
      extraInfo = user.subject;
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

/* EJERCICIO 5
Mediante genéricos y tuplas, tipa de forma completa la función para solventar los errores de compilación.
*/ 
const swap = (arg1, arg2) => {
    return [arg2, arg1];
  };
  
  let age: number, occupation: string;
  
  [occupation, age] = swap(39, "Placement officer");
  console.log("Occupation: ", occupation);
  console.log("Age: ", age);

