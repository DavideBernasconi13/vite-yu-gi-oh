<template>
    <main>
        <CardList />
    </main>
</template>

<script>
import CardList from './CardList.vue';
export default {
    name: 'MainComponent',
    components: { CardList }
}
</script>

<style lang="scss" scoped>
main {
    height: calc(100vh - 50px);
}
</style>