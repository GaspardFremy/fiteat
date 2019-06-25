<template>
    <header>
        <div class="content">
            <div class="position">
                <div class="position_img">
                    <img src="../assets/LOCALISATION.png">
                </div>
            </div>
            <div class="title">
        <h1>FITEAT</h1>
            </div>
            <div class="account">
                <div class="account_img">
                <img src="../assets/ACCOUNT.png">
                </div>
            </div>
        </div>
        <div class="research">
            <div class="research_bar">
            <input type="search" id="site-search" name="search"
                   placeholder="Lieu,restaurant...">
        </div>
        <div class="filter_btn">
                <div class="filter_img">
                    <btn v-on:click="ok"><img src="../assets/noun.png"></btn>
                </div>
        </div>
        </div>
        <template  v-if="ok =!ok">
        <div class="content-news">
             <table>
                 <tr>
                     <td><img src="../assets/EURO.png"></td>
                     <td>PRIX</td>
                     <td><img  src="../assets/ARROW.png"></td>
                 </tr>
                 <tr>
                     <td><img src="../assets/REGIME.png"></td>
                     <td>PRIX</td>
                     <td><img  src="../assets/ARROW.png"></td>
                 </tr>
             </table>
        </div>

        </template>
    </header>
</template>

<script>
    export default {
        name: 'header',
        props: {
            msg: String
        }
    }</script>
<style scoped lang="css">


    header{
        background: linear-gradient(#FA5353, #FA9C58);
        width: 100%;
        border-radius:40px;
        margin: 0px;
        position:fixed;
        top:-90px;


    }
    h1{

        font-size:20px;
        text-transform: uppercase;
        text-align: center;
        color:white;
        padding-top:90px;


    }
    .content{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 85%;
        margin: 5px auto;
    }
    .content-news{
        background-color: ;
        width: 85%;
        margin: 50px auto;
    }
    .research{
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: 5px auto 10px auto;
    }
    .research_bar {
        width: 100%;
        margin-bottom: 10px;
    }
    .research_bar  input{
        width: 90%;
        border-radius:30px;
        border-style: none;
        padding:2px 30px;
        font-size: 10px;
    }


    .filter_btn{
        width:20%;
    }
    .filter_btn img{
        width: 50%;
    }
    .position{
       width: 10%;
        padding-top:100px;
    }
    .position img{
        width: 80%;
    }
    .account{
        width: 10%;
        padding-top:100px;
    }
    .account img{
        width: 80%;
    }
</style>
