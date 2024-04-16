<template>
    <div class="container">
        <h2>Card list</h2>
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col" v-for="card in store.cards" :key="card.id">
                <CardComponent :id="card.id" :title="card.name" :image="card.card_images[0].image_url"
                    :text="card.archetype" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: { CardComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
</style>