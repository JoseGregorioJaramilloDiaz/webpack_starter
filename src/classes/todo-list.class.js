import { Todo } from "./todo.class";


export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        // funcion filter se esta usando para sacar el id que se quiere
        // eliminar y volver a crear el arreglo sin ese valor
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for (const todo of this.todos) {
            console.log(id, todo.id);
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        // funcion filter se esta usando para sacar el id que se quiere
        // eliminar y volver a crear el arreglo sin ese valor
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage () {
        // el JSON.stringify se usa para grabar los datos tal cual se escriben
        // en el localStorage
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        // el JSON.parse se usa para extraer los datos grabado con
        // el JSON.stringify y los coloca es su formato original
        this.todos = (localStorage.getItem('todo'))
                       ? JSON.parse(localStorage.getItem('todo'))
                       : [];

        this.todos = this.todos.map(Todo.fromJson);
    }

}