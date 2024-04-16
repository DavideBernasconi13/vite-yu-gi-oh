<template>
  <HeaderComponent/>
  <MainComponent />
</template>

<script>
import {store} from './store.js'; 
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'; 
  export default {
    name: 'App', 
    components: {
      HeaderComponent, 
      MainComponent, 
    }, 
    data(){
      return{
        store
      }
    }, 
    created(){
      axios.get(this.store.apiUrl).then((res) => {
        console.log(res.data);
      }).catch((error) => {
    // handle error
    console.log(error);
  }).finally(()=> {
    // always executed
  });

    }
  }
</script>

<style lang="scss" scoped>

</style>