<template>
    <div class="card">
        <img class="card-img-top" :src="image" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                <span>{{ text }}</span><br>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['id', 'title', 'image', 'text']
}
</script>

<style lang="css" scoped>
.card {
    min-height: 470px;
}
</style>