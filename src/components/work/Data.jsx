import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Calculadora from "../../assets/Calculadora.gif";
import TaskList from "../../assets/TaskList.gif"
import API from "../../assets/API.gif"

export const projectsData = [
  {
    id: 1,
    image: Calculadora,
    title: "Calculadora",
    category: "web",
    description: "El proyecto es una calculadora básica creada utilizando HTML, CSS y JavaScript. Esta calculadora permite realizar operaciones matemáticas simples como suma, resta, multiplicación y división, así como borrar y borrar dígitos.",
    git: "https://github.com/jossnc/Calculadora"
  },
  {
    id: 2,
    image: Work2,
    title: "App movil",
    category: "app",
    git: "https://github.com/jossnc"
  },
  {
    id: 3,
    image: Work3,
    title: "Brand design",
    category: "design",
    git: "https://github.com/jossnc"
  },
  {
    id: 4,
    image: Work4,
    title: "App movil",
    category: "app",
    git: "https://github.com/jossnc"
  },
  {
    id: 5,
    image: TaskList,
    title: "Lista de Tareas",
    category: "web",
    description: "El código muestra un componente React que se utiliza para gestionar y proporcionar el contexto de tareas. Los datos de las tareas se pueden agregar, eliminar y cargar desde un conjunto de datos inicial, y estos datos y funciones están disponibles a través del contexto.",
    git: "https://github.com/jossnc/react-task-example"
  },
  {
    id: 6,
    image: API,
    title: "API Rick&Morty",
    category: "web",
    description: "Esta aplicación de React.js ofrece a los fanáticos de 'Rick and Morty' una forma interactiva de explorar los personajes, episodios y ubicaciones del programa, todo ello a través de una interfaz amigable y atractiva.",
    git: "https://github.com/jossnc/react-task-example"
  },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'app',
    },
    {
        name: 'design',
    },
]