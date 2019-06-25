<template>
  <div class="home">
      <!-- <Header></Header> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p class="title ml3 mb3">Catégories</p>

    <div class="category_card_container ml3 mb5">
        <div class="category_card">
            <carousel :autoplay="false" :nav="false" :dots="false" :items='2.7' :margin='5'>

            <img class="owlimg" src="../assets/img/japonais.png">

            <img class="owlimg" src="../assets/img/chinois.png">

            <img class="owlimg" src="../assets/img/indien.png">

            <img class="owlimg" src="../assets/img/japonais.png">

            <img class="owlimg" src="../assets/img/chinois.png">

            <img class="owlimg" src="../assets/img/indien.png">

        </carousel>
        </div>
    </div>

    <div class="promo m3 flex direction-col align-center box-shadow" >
        <img src="../assets/img/logo.png" class="pt3 pb0 logo" alt="">
        <span class="title white p3 pt0">Code promo -10%: FITEAT50</span>
    </div>

    <p class="title ml3 mb3">Les nouveautés</p>

    <div class="category_card_container ml1">
        <div class="category_card">
            <carousel :nav="false" :dots="false"  :items="1.2" :margin='5'>

                <div class="item-container">
                    <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
                    <div class="flex space-between">
                        <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                        <div class="flex space-between align-center">
                            <span class="regular green mr3">3.7</span>
                            <img class="owl-img icon mr4" src="../assets/icon/star.png">
                        </div>
                    </div>
                    <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
                </div>

                <div class="item-container">
                    <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
                    <div class="flex space-between">
                        <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                        <div class="flex space-between align-center">
                            <span class="regular green mr3">3.7</span>
                            <img class="owl-img icon mr4" src="../assets/icon/star.png">
                        </div>
                    </div>
                    <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
                </div>

                <div class="item-container">
                    <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
                    <div class="flex space-between">
                        <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                        <div class="flex space-between align-center">
                            <span class="regular green mr3">3.7</span>
                            <img class="owl-img icon mr4" src="../assets/icon/star.png">
                        </div>
                    </div>
                    <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
                </div>

            </carousel>
        </div>
    </div>

    <p class="title ml3 mb3">Les mieux notés</p>

    <div class="category_card_container ml1">
        <div class="category_card">
            <carousel :nav="false" :dots="false"  :items="1.2" :margin='5'>

                <div class="item-container">
                    <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
                    <div class="flex space-between">
                        <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                        <div class="flex space-between align-center">
                            <span class="regular green mr3">3.7</span>
                            <img class="owl-img icon mr4" src="../assets/icon/star.png">
                        </div>
                    </div>
                    <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
                </div>

                <div class="item-container">
                    <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
                    <div class="flex space-between">
                        <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                        <div class="flex space-between align-center">
                            <span class="regular green mr3">3.7</span>
                            <img class="owl-img icon mr4" src="../assets/icon/star.png">
                        </div>
                    </div>
                    <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
                </div>

                <div class="item-container">
                    <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
                    <div class="flex space-between">
                        <div class="restaurant-title regular ml3">Rasana Restaurant Indien</div>
                        <div class="flex space-between align-center">
                            <span class="regular green mr3">3.7</span>
                            <img class="owl-img icon mr4" src="../assets/icon/star.png">
                        </div>
                    </div>
                    <div class="restaurant-title small ml3 mt2">Indien Modern Fusion</div>
                </div>

            </carousel>
        </div>
    </div>

<button @click="logout">Deconnection</button>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
import Header from '@/components/Header'
import firebase from 'firebase/app'
import 'firebase/auth'
import data from '@/assets/data_restaurants.json';


export default {
    name: 'home',
    components: {
        carousel, Header
    },
    methods: {
        logout: function () {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        }
    }
}

</script>

<style scoped>

.promo{
    background-color: #FA5353;
    border-radius: 10px;
}

.owlimg {
    border-radius: 5px !important;
}

.owl-big-img {
    overflow: hidden;
    border-radius: 10px !important;
    height: 100%;
    width: 100%;
}

.item-container {
    padding: 0;
}

.itemElement {
    width: auto;
}

.icon {
    max-width: 20px;
    max-height: 20px;
}

.logo {
    max-height: 50px;
}

</style>
