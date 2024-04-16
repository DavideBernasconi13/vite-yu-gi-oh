<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      axios.get(this.store.apiUrl + this.store.endpoint.link, this.store.option).then((res) => {
        console.log(res.data.data);
        this.store.cards = res.data.data;
        console.log(this.store.cards);
        console.log("crash!");
      }).catch((error) => {
        // handle error
        console.log(error);
      }).finally(() => {
        // always executed
      });

    },
    created() {
      this.getCard();
      console.log('Prova', this.store.cards)

    }
  }

}
</script>

<style lang="scss" scoped></style>