<script setup>

    import {ref} from "vue"
    import { useTodoStore } from "../store/todos"

    const todoDescription = ref("")
    const todoStore = useTodoStore()

</script>

<template>

    <div id="ajoutTodo">
        <input v-model="todoDescription" type="text" placeholder="Insérez une tâche" @keyup.enter="todoStore.ajouterTodo(todoDescription); todoDescription=''">
        <input type="button" value="Ajouter" @click="todoStore.ajouterTodo(todoDescription); todoDescription=''">
    </div>

</template>

<style scoped>

    #ajoutTodo{
        display: grid;
        grid-template-columns: 1fr auto;
    }

    #ajoutTodo > input:nth-child(1){
        height: 2rem;
        margin: 0;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(46, 46, 46);
        border: none;
        padding: 0;
        border-radius: 0.3rem;
        margin-right: 5px;
    }

    #ajoutTodo > input:nth-child(2){
        height: 2rem;
        font-size: 1.1rem;
        background-color: white;
        border-radius: 0.3rem;
    }

</style>