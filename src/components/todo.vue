<script setup>

const props = defineProps({
    todoMessage: String,
    }
)

</script>

<template>

<div id="todo">
    <div>{{todoMessage}}</div>
    <input class="todoButtons" type="button" value="Editer">
    <input class="todoButtons" type="button" value="Supprimer">
    <input class="todoButtons" type="button" value="Effectué">
</div>

</template>

<style scoped>

#todo{
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    border-top: 1px solid #dddd;
    margin-bottom: 35px;
}

.todoButtons{
    color: #dddd;
    background-color: inherit;
    border: 1px solid #dddd;
    border-radius: 0.3rem;
    margin-left: 0.2 rem;
}

</style>