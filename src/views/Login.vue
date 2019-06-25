<template>
    <div class="login">
        <img class="mb4" src="@/assets/img/logo.png" alt="Logo">
        <h2>INSCRIPTION</h2>
        <div>
            <label for="email">Email</label>
            <input type="text" v-model="email" id="email" placeholder="Email">
            <label for="password"> Mot de passe</label>
            <input type="password" v-model="password" id="password" placeholder="Password">
        </div>
        <button @click="login">Se connecter</button>
        <p>You don't have an account ? You can create
            <router-link to="/sign-up">one</router-link>
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
        display: flex;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        background: linear-gradient(180deg, #FA5353, #FA9C58);
        color: white;

        div{
            display: flex;
            flex-direction: column;
            width: 80%;
            margin: 4rem 0;
        }
        img {
            max-width: 100px;
        }

        input {
            padding: 10px;
            border-radius: 20px;
        }
        button{
            width: 200px;
            padding: 10px 20px;
            background-color: white;
            border-radius: 20px;
        }
    }

</style>