<template>
  <div class="home">
    <Header ref='header_nav'></Header>
    <img class="imgheader" :src="getHeaderImgUrl(this.$route.params.type)">

    <div v-for="(restaurant, index) in restaurants" :key="index" @click.native="hello()" class="item-container  mt5 flex direction-col ml3 mr3">
        <router-link :to="{ name: 'restaurant', params: {id: restaurant.id } }">
            <img class="imgcard" :src="getImgUrl(restaurant.img_url)">
            <div class="mt4">
                <div class="flex space-between">
                    <div class="restaurant-title regular ml3">{{ restaurant.name }}</div>
                    <div class="flex space-between align-center">
                        <span class="regular green mr3">{{ restaurant.score }}</span>
                        <img class="owl-img icon mr4" src="../assets/icon/star.png">
                    </div>
                </div>
                <div class="restaurant-title small ml3 mt2">{{restaurant.type}}</div>
            </div>
        </router-link>
    </div>

    <div class="mb3">

    </div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
import data from '@/assets/data_restaurants.json';
import { db } from '../firebase';
import Header from '@/components/Header'



export default {
    name: 'home',
    components: { carousel, Header },
    data () {
        return {
          restaurants: [],
          category: this.$route.params.type
        }
    },
    firestore () {
        return {
            restaurants: db.collection('restaurants').where("type", "==", this.$route.params.type)
        }
    },
    mounted(){
        this.getImgUrl()
    },
    methods: {
        getImgUrl(path) {
            return require("../" + path + ".jpg");
        },
        getHeaderImgUrl(path) {
            return require("../assets/img/" + path + '.png');
        },
        goToRestaurant(restaurantId){
            console.log('fdp');
            router.push({ name: 'restaurant', params: { id: restaurantId } })
        },
        hello(){
            console.log("hello");
        }
    }
}

</script>

<style scoped>

Header {
    z-index: 10000;
}

.imgheader {
    padding-top: -40px;
    margin-top: -10px;
    z-index: -1200;

}

.imgcard {
    width: 97%;
}

.icon {
    max-width: 20px;
    max-height: 20px;
}

.logo {
    max-height: 50px;
}

</style>
