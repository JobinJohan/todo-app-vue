<script setup>

    import { reactive } from 'vue'
    import todo from "./todo.vue"
    import {useTodoStore} from "./../store/todos.js"
    const todoStore = useTodoStore()

</script>

<template>
    <div id="listeTodo">
        <ul>
            <li v-for="(todo, index) in todoStore.listeDeTodo" :key="index">
                <todo :todoMessage="todo" :nthTodo="index"></todo>
            </li>
        </ul>
    </div>
</template>
    
<style scoped>
    
    #listeTodo{
        margin-top: 35px;
        display: grid;
        grid-template-columns: 1fr;
    }

    #listeTodo > ul{
        list-style-type: none;
    }

</style>