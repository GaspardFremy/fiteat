<template>
<div class="headerNav direction-col">
    <div class="direcwtion-row">
        <router-link :to="{ name: 'Map'}">
            <img src="@/assets/img/LOCALISATION.png" alt="localisation">
        </router-link>

        <router-link :to="{ name: 'Home'}"  class="mAuto">
            <img src="@/assets/img/logo.png"  alt="Logo">
        </router-link>

        <router-link :to="{ name: 'Home'}">
            <img src="@/assets/img/ACCOUNT.png" alt="account">
        </router-link>
    </div>
    <div>
        <input type="text" placeholder="Lieu,restaurant...">
        <img src="@/assets/img/noun.png" alt="filter">
    </div>
</div>
</template>

<script>

    export default {
        name: 'header',
        props: {
            msg: String,
            ok: true
        }
    }</script>

    <style lang="scss" scoped>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border: none;
        }
        .headerNav {
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
</style>
