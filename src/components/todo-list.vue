<script setup>
        import todo from "./todo.vue"

        const props = defineProps({
        listeDeTodo: Array,
        })

</script>

<template>
    <div id="listeTodo">
        <ul>
            <li v-for="(todo, index) in listeDeTodo" :key="index">
                <todo :todoMessage="todo"></todo>
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