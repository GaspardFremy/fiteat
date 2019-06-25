<template>
    <div class="confirm">
        <Header></Header>
        <div class="containerConfirm">
            <h2>CONFIRMATION</h2>
        </div>
        <p class="msgSuccess subtitle">Félicitations votre réservation à bien été prise en compte</p>
        <div class="restaurant">
            <img src="@/assets/img/japanese.png" alt="jap">
            <div>
                <H3>RESTAURANT RASNA</H3>
                <p>214 Rue de La Croix Nivert,<br>
                    75015 Paris</p>
                <div class="flex direction-row">
                    <div class="containerSizePersons">
                        <img src="@/assets/img/profil.png" alt="profil">
                        <p>5 Personnes</p>
                    </div>
                    <div class="containerSizePersons">
                        <img src="@/assets/img/clock.png" alt="clock">
                        <p>20h30</p>
                    </div>
                </div>
            </div>
        </div>
        <footer class="flex align-center">
            <h2>Terminer</h2>
        </footer>
    </div>
</template>


<script>
import Header from '@/components/Header'

    export default {
        name: "Confirm",
        components: { Header }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }
    .header {
        width: 100vw;
        height: 6rem;
        background: linear-gradient(to right, #FA5353, #FA9C58);
        border-radius: 0 0 30px 30px;
        display: flex;
        align-items: baseline;
        justify-content: center;
        border: none;
        & > div {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            height: 50%;
            img {
                height: 100%;
            }
        }
        & > div:last-child {
            input {
                width: 85%;
                border-radius: 20px;
                padding: 10px;
            }
        }
    }
    .containerConfirm {
        width: 50%;
        margin: 2rem auto;
    }
    h2 {
        text-align: center;
        &::after {
            content: '';
            width: 100%;
            height: 3px;
            background-color: red;
            display: block;
        }
    }
    .msgSuccess {
        max-width: 80%;
        margin: auto;
    }
    .restaurant {
        margin-top: 1rem;
        & > img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
        & > div {
            width: 80%;
            margin: 2rem auto 0 auto;
        }
        .containerSizePersons{
            margin-top: 2rem;
            width: 50%;
            display: flex;
            flex-direction: row;
            p{
                color: grey;
            }
            img {
                height: 20px;
                margin-right: 10px;
            }
        }
    }
    footer{
        width: 100vw;
        position: absolute;
        bottom: 0;
        height: 3rem;
        background: linear-gradient(to right, #FA5353, #FA9C58);
        border-radius: 30px 30px 0 0;
        justify-content: center;
        color: white;
    }
</style>
