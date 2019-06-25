<template>
  <div class="Map"/>
</template>

<script>
import gmapsInit from '@/utils/gmaps';
import data from '@/assets/data_restaurants.json';
import { db } from '../firebase';


export default {
  name: 'Map',
  data () {
      return {
        frestaurants: []
      }
  },
  firestore () {
      return {
          frestaurants: db.collection('restaurants')
      }
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);


      let resto = data.restaurants;


      geocoder.geocode({ address: '66 quais de Jemmapes, Paris, France' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });

      var infowindow = new google.maps.InfoWindow({
          content: "test"
      });

      console.log(resto);


      const items = Object.values(resto)

      var search_criteria = {
          "casher" : false,
          "halal": false,
          "gluten_free" : true,
          "vegan" : false,
          "vegetarian": false,
          "type": "french"
      }

      let sorted_items;


    (function(){
        sorted_items = items.filter(obj => {
            return obj.type === "french"
        })

    })();

    (function(){
        sorted_items = items.filter(obj => {
            return obj.vegetarian === false
        })
    })();

      for (const item of sorted_items) {

          var marker  = new google.maps.Marker({
            position: item.position,
            name: item.name,
            map: map,
            title: item.name
          });

          marker.addListener('click', function() {
            infowindow.setContent("<div><h4 class='name'>" + item.name + "</h4><p class='address'>" + item.address + "</p><p class='style'>" + item.type + "</p><p class='price'> " + item.price + "</p> + <a href='/about'> link</a></div>");
            infowindow.open(map, this);
          });
    }



    } catch (error) {
      console.error(error);
    }
  },
};
</script>


<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

.Map {
  width: 100%;
  height: 100vh;
}

.name {
    color: red;
}
</style>
