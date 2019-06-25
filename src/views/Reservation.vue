<template>
    <div>
        <div class="item-container mb5">
            <img class="owl-big-img box-shadow mb3" src="../assets/img/rasna.png">
            <div class="flex space-between">
                <div class="title ml3">Rasana Restaurant Indien</div>
                <div class="flex space-between regular align-center">
                    <span class="regular green mr3">3.7</span>
                    <img class="owl-img icon mr4" src="../assets/icon/star.png">
                </div>
            </div>
            <div class="restaurant-title regular ml3 mt2">Indien Modern Fusion</div>
        </div>

        <form class="flex direction-col align-center">

            <div class="flex direction-row space-between">

                <div class=" flex direction-col">
                    <label class="small mb2 pb2" for="name">Nom</label>
                    <input class=" input-double mb4 p3" type="text" >
                </div>

                <div class="flex direction-col">
                    <label class="small mb2 pb2" for="firstname">Prénom </label>
                    <input class="input-double mb4 p3" type="text" >
                </div>

            </div>

            <label class="small ml5 pb3 item-flex-start" for="email">Adresse mail </label>
            <input class="input mb4 p3" type="email" >

            <label class="small ml5 pb3 item-flex-start" for="number">Numéro de téléphone </label>
            <input class="input mb4 p3" type="number" >

            <div class="flex direction-row space-between">
                <div  class="flex direction-col">
                    <label class="small  mb2 pb2 " for="number">Nbrs de personnes </label>
                    <input class="input-double mb3 p3" type="number" >
                </div>

                <div class="flex direction-col">
                    <label class="small  mb2 pb2 " for="time">Heure de réservation </label>
                    <input class="input-double  mb3 p3" type="time" >
                </div>

            </div>

        </form>
        <div>
            <date-pick class=" datePicker vdpCell vdpArrowPrev vdpArrowNext" v-model="date"></date-pick>
        </div>

        <router-link :to="{ name: 'Confirm'}">
            <span class="checkin">Confirmation</span>
        </router-link>
    </div>
</template>

<script>
    import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';
    export default {
        name: "reservation",
        components: {DatePick},
        data: () => ({
            date: 'Date de reservation'
        })
    };
</script>

<style lang="css" scoped>

    .owl-big-img {
        overflow: hidden;
        border-radius: 10px !important;
        height: 100%;
        width: 100%;
    }

    .icon {
        max-width: 20px;
        max-height: 20px;
    }

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

    .vdpCell {
        color: #FA5353;
    }
    .datePicker{
        display: flex;
        justify-content: center;
    }
    .input-double[type=text]{
        width: 87%;
        border: 1px solid grey;
        border-radius: 20px;
        outline: none;
    }
    .input-double[type=time]{
        width: 87%;
        border: 1px solid grey;
        border-radius: 20px;
        outline: none;
        background-color: white;
    }
    .input{
        width: 80%;
        border: 1px solid grey;
        border-radius: 20px;
        outline: none;
    }
    input:focus {
        border: 3px solid #555;
    }
    input[type=number]:focus {
        border: 3px solid #555;
    }
    .input-double:focus {
        border: 3px solid #555;
        outline: none;
    }
    .input-double[type=number]{
        width: 80%;
        border: 1px solid grey;
        border-radius: 20px;
        outline: none;
    }
</style>
