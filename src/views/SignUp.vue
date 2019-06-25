<template>
    <div class="sign-up flex align-center subtitle">
        <img src="@/assets/img/logo.png" alt="Logo">
        <div class="flex direction-col align-center">
            <div class="flex direction-col">
                <label for="pseudo">Pseudo</label>
                <input type="text" v-model="pseudo" id="pseudo" placeholder="Pseudo">
            </div>
            <div class="flex direction-col">
                <label for="email">Email</label>
                <input type="text" v-model="email" id="email" placeholder="Email">
            </div>
            <div class="flex direction-col">
                <label for="password">Mot de passe</label>
                <input type="password" v-model="password" id="password" placeholder="Password">
            </div>
            <div class="flex direction-col">
                <label for="target">Objectifs</label>
                <input type="text" v-model="target" id="target" placeholder="Objectifs">
            </div>
        </div>
        <button @click="signUp" class="title">S'inscrire</button>
        <span class="regular">ou revenir à la <router-link to="/login">connexion.</router-link></span>
    </div>
</template>

<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        name: "SignUp",
        data() {
            return {
                email: '',
                password: '',
                user: '',
                pseudo: '',
                target: ''
            }
        },
        methods: {
            signUp: function () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        firebase.firestore().collection("users").doc(user.user.uid).set({
                            pseudo: this.pseudo,
                            target: this.target
                        }).then(function () {
                            this.$router.replace('login')
                        })
                            .catch((error) => {
                                console.error("Erreur lors de l'écriture du document:", error);
                            })
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
    .sign-up {
        height: 100vh;
        flex-direction: column;
        background: linear-gradient(180deg, #FA5353, #FA9C58);
        color: white;
        padding-top: 2rem;
        overflow: hidden;

        div {
            width: 90%;
            margin: 2rem 0;

            div {
                margin: 20px 0;
            }
        }

        img {
            max-width: 100px;
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

        span {
            margin-top: 4rem;
            text-align: center;
        }
    }
</style>