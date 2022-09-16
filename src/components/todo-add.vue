<script setup>

</script>

<template>
    <div id="ajoutTodo">
        <input  type="text" placeholder="Todo app avec Vue JS">
        <input type="button" value="Ajouter">
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
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.4);
    padding: 0;
}

#ajoutTodo > input:nth-child(2){
    height: 2rem;
    font-size: 1.1rem;
    background-color: white;
    display: inline-block;
}

</style>