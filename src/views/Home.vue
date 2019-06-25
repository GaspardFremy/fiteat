<template>
    <div class="home">
      <Header ref='header_nav'></Header>
      <p class="title ml3 mb3" ref='cat'>Catégories</p>

    <div class="category_card_container ml3 mb5">
        <div class="category_card">
            <carousel :autoplay="false" :loop="true" :nav="false" :dots="false" :items='2.7' :margin='5'>

            <router-link :to='"category/japanese"'>
                <img class="owlimg" src="../assets/img/japanese.png">
            </router-link>

            <router-link :to='"category/chinese"'>
                <img class="owlimg" src="../assets/img/chinese.png">
            </router-link>

            <router-link :to='"category/indian"'>
                <img class="owlimg" src="../assets/img/indian.png">
            </router-link>

            <router-link :to='"category/french"'>
                <img class="owlimg" src="../assets/img/french.png">
            </router-link>

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

  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'
import Header from '@/components/Header'
import data from '@/assets/data_restaurants.json';
import { db } from '../firebase';


export default {
    name: 'home',
    components: { carousel, Header },
    data () {
        return {
            new_restaurants: [],
        }
    },
    firestore () {
        return {
            new_restaurants: db.collection('restaurants').where("type", "==", "chinese")
        }
    },
    mounted(){
        this.matchHeight()
    },
    methods: {
        matchHeight () {
        },
        getImgUrl(path) {
            return require("@/" + path);
        }
    }
}

</script>

<style lang="css" scoped>

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
