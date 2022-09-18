<script setup>
    
    import {useTodoStore} from "./../store/todos.js"
    import {ref} from "vue"

    const props = defineProps({
        todoMessage: String,
        nthTodo: Number,
        }
    )

    const todoStore = useTodoStore()
    const notInEditMode = ref(true);
    const nouvelleDescription = ref("")
    const effectue = ref(1)
    const effectueBouton = ref("Effectué")

    const toggleEffectue = () => {
        if (effectue.value === 1){
            effectue.value = 0
            effectueBouton.value = "Non effectué"
        }
        else{
            effectue.value = 1
            effectueBouton.value = "Effectué"
        }
    }

    const resetEdit = (nthTodo, nouvelleDescription) => {
        notInEditMode.value = true
        todoStore.editerTodo(nthTodo, nouvelleDescription)
        nouvelleDescription = ""
    }

</script>

<template>

    <div id="todo">
        <!-- Affichage de la tâche -->
        <div :class="{tacheAccomplie: todoStore.etatTodos[nthTodo]}" v-if="notInEditMode">{{todoMessage}}</div>

        <!-- Si l'on est pas dans le mode édition -->
        <input  v-if="notInEditMode" type="button" class="todoButtons"  value="Editer" @click="notInEditMode=false;nouvelleDescription=todoMessage">

        <!-- Si l'on est dans le mode édition -->
        <input  v-if="notInEditMode === false" type="text" :placeholder="todoMessage" class="editTodo" v-model="nouvelleDescription" @keyup.enter="resetEdit(nthTodo, nouvelleDescription)">
        <input v-if="notInEditMode === false" type="button" class="todoButtons"  value="Sauvegarder" @click="resetEdit(nthTodo, nouvelleDescription)">

        <!-- Dans tous les cas, on affiche ces boutons -->
        <input type="button" class="todoButtons"  :value="effectueBouton" @click="todoStore.effectuerTodo(nthTodo, effectue);toggleEffectue()">
        <input type="button" class="todoButtons"  value="Supprimer" @click="todoStore.supprimerTodo(nthTodo)">
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
        margin-top: 5px;
    }

    .editTodo{
        margin: 0;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(46, 46, 46);
        border: none;
        padding: 0;
        margin-right: 10px;
        margin-top:5px;
        border-radius: 0.3rem;
    }

    .tacheAccomplie{
        text-decoration: line-through;
    }

</style>