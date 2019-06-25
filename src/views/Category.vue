<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <img class="imgheader" src="../assets/img/japonais.png">

    <div v-for="(restaurant, index) in restaurants" :key="index" class="item-container  mt5 flex direction-col ml3 mr3">
        <!-- <img class="imgcard" :src="getImgUrl(restaurant.img_url)"> -->
        <!-- <div @click="getImgUrl(restaurant.name)">okok</div> -->
        <img class="imgcard" src="../assets/img/rasna.png">

        <div class="mt4">
            <div class="flex space-between">
                <div class="restaurant-title regular ml3">{{ restaurant.name }}</div>
                <div class="flex space-between align-center">
                    <span class="regular green mr3">{{ restaurant.score }}</span>
                    <img class="owl-img icon mr4" src="../assets/icon/star.png">
                </div>
            </div>
            <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
        </div>
    </div>

    <div class="item-container  mt5 flex direction-col ml3 mr3">
        <img class="imgcard" src="../assets/img/rasna.png">
        <div class="mt4">
            <div class="flex space-between">
                <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                <div class="flex space-between align-center">
                    <span class="regular green mr3">3.7</span>
                    <img class="owl-img icon mr4" src="../assets/icon/star.png">
                </div>
            </div>
            <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
        </div>
    </div>

    <div class="item-container  mt5 flex direction-col ml3 mr3">
        <img class="imgcard" src="../assets/img/rasna.png">
        <div class="mt4">
            <div class="flex space-between">
                <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                <div class="flex space-between align-center">
                    <span class="regular green mr3">3.7</span>
                    <img class="owl-img icon mr4" src="../assets/icon/star.png">
                </div>
            </div>
            <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
        </div>
    </div>



  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
import data from '@/assets/data_restaurants.json';
import { db } from '../firebase';


export default {
    name: 'home',
    components: { carousel },
    data () {
        return {
          restaurants: []
        }
    },
    firestore () {
        return {
            restaurants: db.collection('restaurants').where("type", "==", "asian")
        }
    },
    computed: {
        getImgUrl(pic) {
        console.log(pic);
        return require('../assets/'+pic+ '.png')
      }
    }
}

</script>

<style scoped>

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
