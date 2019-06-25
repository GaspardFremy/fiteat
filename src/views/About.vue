<template>
    <div>
        <h4>Exemple</h4>
        <div>
            <div v-for="data in restaurants">{{data[0].name}}</div>
            <template v-if="ok">
              <h1>Titre</h1>
              <p>Paragraphe 1</p>
              <p>Paragraphe 2</p>
            </template>



            <button v-on:click="ok = !ok">Add 1</button>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import json from '@/assets/data_restaurants.json'

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    data(){
        return{
            restaurants: json,
            ok: true
        }
    },
    comuted: {

    }
}
</script>
