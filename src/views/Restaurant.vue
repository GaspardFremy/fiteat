<template>
    <div>
        <Header></Header>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <div>
        <img src="@/assets/img/indien.png" alt="" style="width:100%;height:100%;">
        <div class="subtext">
          <div>
            Rasna Restaurant Indien
            <span class="span">4,2</span>
            <img src="@/assets/icon/star.png" alt style="height:20px; padding-bottom:5px;">
          </div>
          <p>10$ - 15$ Inde - Asie du sud</p>
          <p>Découvrez une cuisine délicate et raffinée ! Une carte variée, des plats issus de différentes régions de l'Inde et Asie du sud, des saveurs, des épices adaptées au goût de chacun.</p>
          <p>
            <img src="@/assets/img/LOCALISATION.png" alt="" style="height:20px; margin-bottom:10px;"> 214 Rue de La Croix Nivert, 75015 Paris
          </p>
        </div>
        <div @click="cutting = !cutting" class="cut">Sèche</div>
        <transition>
           <div v-if="cutting">
              <h5 class="padding">Formules</h5>
              <hr class="black">
              <div class="contain">
                  <div class="menu">
                      <h6>Menu1</h6>
                      <p>Une recette de riz, un curry veg du jour et naan nature</p>
                      <p>9.99$</p>
                  </div>
                  <div class="blockimg">
                      <img src="@/assets/img/ICONE_MENU_HANA/Menu1.jpg" alt="" class="imgmenu">
                  </div>
              </div>
           </div>
        </transition>
        <div @click="gainer = !gainer" class="takepounds">Prise de masse</div>
        <transition>
           <div v-if="gainer">
              <h5 class="padding">Formules</h5>
              <hr class="black">
              <div class="contain">
                  <div class="menu">
                      <h6>Menu1</h6>
                      <p>Une recette de riz, un curry veg du jour et naan nature</p>
                      <p>9.99$</p>
                  </div>
                  <div class="blockimg">
                      <img src="@/assets/img/ICONE_MENU_HANA/Menu1.jpg" alt="" class="imgmenu">
                  </div>
              </div>
           </div>
         </transition>
         <div @click="wieghtloss =  !wieghtloss" class="looseweight">Perte de poids</div>
         <transition>
           <div v-if="wieghtloss">
              <h5 class="padding">Formules</h5>
              <hr class="black">
              <div class="contain">
                  <div class="menu">
                      <h6>Menu1</h6>
                      <p>Une recette de riz, un curry veg du jour et naan nature</p>
                      <p>9.99$</p>
                  </div>
                  <div class="blockimg">
                      <img src="@/assets/img/ICONE_MENU_HANA/Menu1.jpg" alt="" class="imgmenu">
                  </div>
              </div>
           </div>
          </transition>

          <router-link :to="{ name: 'Reservation', params: {id: restaurant.id} }">
              <span class="checkin">Réserver</span>
          </router-link>

      </div>
    </div>
</template>

<script>

import { db } from '../firebase';
import Header from '@/components/Header'

export default {
    name: 'Restaurant',
    components: { Header },
    data () {
        return {
            cutting:false,
            wieghtloss: false,
            gainer: false,
            restaurant: "",
            id: this.$route.params.id
        }
    },
    firestore () {
        return {
            restaurant: db.collection('restaurants').where("id", "==", this.$route.params.id)
        }
    },
    mounted(){
        this.getImgUrl()
        this.loadRestaurant();
    },
    methods: {
        loadRestaurant(){
            console.log(this.restaurant);
        },
        getImgUrl(path) {
            return require("@/" + path);
        },
        toggle: function(){
            this.visible = !this.visible
        }
    }
}

</script>

<style scoped>
.checkin{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    background-color: #FA9C58;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 50px;
    height: 50px;
}
.contain{
  display: inline-flex;
  width: 350px;
}
.subtext {
  padding: 20px;
}
.span {
  color: #00d98e;
  padding-right: 10px;
  padding-left: 10px;
}
.blockimg{
    width: 100px;
}
.imgmenu{
    height: 80%;
    width: 160px;
    border-radius: 20px;
    margin-top: 25px;
}
.cut{
    background-color: #00d98e;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 30px;
    color: white;
}
.takepounds{
    background-color: #FA5353;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 30px;
    color: white;
}
.looseweight{
    background-color: #FA9C58;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 30px;
    color: white;
}
.black{
    width: 100%;
    color: black;
}
.padding{
    padding: 20px;
}
.menu{
    padding: 20px;
    width: 70%;
}

</style>
