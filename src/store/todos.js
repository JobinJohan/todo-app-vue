import {defineStore} from 'pinia'
import { reactive } from 'vue'
import { ref } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    const listeDeTodo = reactive(new Array())
    const etatTodos = reactive(new Array)

    function ajouterTodo(todoDescription){
        listeDeTodo.push(todoDescription)
        etatTodos.push(0)
    }

    function supprimerTodo(numeroTodoAEffacer){
        listeDeTodo.splice(numeroTodoAEffacer, 1)
        etatTodos.splice(numeroTodoAEffacer, 1)
    }

    function editerTodo(numeroTodoAEditer, nouvelleDescription){
        listeDeTodo[numeroTodoAEditer] = nouvelleDescription 
    }

    function effectuerTodo(numeroTodoAEffectue, effectue){
        etatTodos[numeroTodoAEffectue] = effectue
    }

  return { listeDeTodo, etatTodos, ajouterTodo, supprimerTodo, editerTodo, effectuerTodo};
});
