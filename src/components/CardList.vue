<template>
    <div class="container">
        <h2>Card list</h2>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4" v-for="card in store.cards" :key="card.id">
                <CardComponent :id="card.id" :title="card.title" :image="card.image" :text="card.text" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: 'CardComponent',
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped></style>