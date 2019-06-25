<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" v-model="pseudo" placeholder="Pseudo"><br>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <input type="text" v-model="target" placeholder="Objectifs"><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login.</router-link></span>
    </div>
</template>

<script>
    import firebase from 'firebase'

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
                        console.log(user.user.uid)
                        console.log(user.user.email)
                        firebase.firestore().collection("users").doc(user.user.uid).set({
                            pseudo: this.pseudo,
                            target: this.target
                        }).then(function () {
                                this.$router.replace('home')
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

<style scoped>
    .sign-up{
        margin-top: 40px;
    }
    input{
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button{
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span{
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>