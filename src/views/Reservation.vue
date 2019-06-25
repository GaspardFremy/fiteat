<template>
    <div>
        <p class="subtitle ml3 mb5">Informations</p>

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