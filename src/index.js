
import './styles.css';
// este import es para importar desde la carpeta indicada el archivo index.js
import {Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log(todoList);