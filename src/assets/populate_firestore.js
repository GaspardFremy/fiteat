const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDwEackre06TuCedt1hdJTm8VYm-PWC3KQ",
    authDomain: "fiteat-1561388018824.firebaseapp.com",
    projectId: "fiteat-1561388018824"
  });

var db = firebase.firestore();

var menu =[
    {
        "id" : 105,
        "price" : 4,
        "img_url" : "assets/img/madamShauwn/rasna.jpg",
        "name": "Café République",
        "address": "9 Place de la République",
        "lat": 48.856881,
        "lng": 2.349018,
        "casher" : false,
        "halal": false,
        "gluten_free" : true,
        "vegan" : false,
        "vegetarian": false,
        "type": "french",
        "score": 4.3
    }
 ]

menu.forEach(function(obj) {
    db.collection("restaurants").add({
        id: obj.id,
        name: obj.name,
        price: obj.price,
        type: obj.type,
        img_url: obj.img_url,
        address: obj.address,
        lat: obj.lat,
        lng: obj.lng,
        casher: obj.casher,
        halal: obj.halal,
        gluten_free: obj.gluten_free,
        vegan: obj.vegan,
        vegetarian: obj.vegetarian,
        score: obj.score
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
