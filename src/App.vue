<script setup>

// Importation des composants utilisés au sein de ce composant
import { reactive } from 'vue'
import { ref } from 'vue'
import todoHeader from './components/header.vue'
import todoAdd from "./components/todo-add.vue"
import todoList from "./components/todo-list.vue"
import "./assets/main.css" 

// Liste de todo: pour chaque todo on affichera le composant vue todo
const listeDeTodo = reactive(new Array())

listeDeTodo.push("test")
listeDeTodo.push("test2")
</script>

<template>


<div id="main">
    <todoHeader></todoHeader>
    <todoAdd> </todoAdd>
    <todoList :listeDeTodo="listeDeTodo"></todoList>
</div>

</template>

<style scoped>



</style>