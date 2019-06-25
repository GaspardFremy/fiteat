<template>
    <div class="login flex align-center subtitle">
        <img class="mb4" src="@/assets/img/logo.png" alt="Logo">
        <h3>CONNEXION</h3>
        <div class="flex direction-col align-center mb5">
            <div class="flex direction-col">
                <label for="email" class="mb2">Email</label>
                <input type="text" v-model="email" id="email" placeholder="Email">
            </div>
            <div class="flex direction-col mb5">
                <label class="mb2" for="password"> Mot de passe</label>
                <input type="password" v-model="password" id="password" placeholder="Password">
            </div>
        </div>
        <button @click="login" class="title">Se connecter</button>
        <p class="regular">Vous n'avez pas de compte ?<br>Créer le <router-link to="/sign-up">maintenant !</router-link>
        </p>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                user: ''
            }
        },
        methods: {
            login: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert('Oops.' + err.message)
                    }
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
        height: 100vh;
        flex-direction: column;
        background: linear-gradient(180deg, #FA5353, #FA9C58);
        color: white;
        padding-top: 2rem;
        div {
            width: 90%;
            margin: 3rem 0;
            div {
                margin: 20px 0;
            }
        }
        img {
            width: 100px;
        }
        input {
            padding: 10px;
            border-radius: 20px;
            font-size: 1rem;
            border: none;
        }
        button {
            width: 200px;
            padding: 10px 20px;
            background-color: white;
            border-radius: 20px;
            color: #FA5B53;
        }
        p{
            margin-top: 4rem;
            text-align: center;
        }
    }
</style>
