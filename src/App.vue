<script setup>

// Importation des composants utilisés au sein de ce composant
import { reactive } from 'vue'
import { ref } from 'vue'
import todoHeader from './components/header.vue'
import todoAdd from "./components/todo-add.vue"
import todoList from "./components/todo-list.vue"
import "./assets/main.css" 

</script>

<template>


<div id="main">
    <todoHeader></todoHeader>
    <todoAdd> </todoAdd>
    <todoList></todoList>
</div>

</template>

<style scoped>



</style>