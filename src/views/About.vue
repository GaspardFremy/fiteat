<template>
    <div>
        <h4>Exemple</h4>
        <div>
            <div v-for="data in restaurants">{{data[0].name}}</div>
            <div v-if="seen">TOTO</div>
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
            seen: true
        }
    },
    comuted: {

    }
}
</script>
