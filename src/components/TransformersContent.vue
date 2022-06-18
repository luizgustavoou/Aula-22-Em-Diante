<template>
    <div>
        <h3>Conteúdo Transformers</h3>
        <p>{{ $route.params.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'TransformersContent',
    updated() {
        console.log(this.$route.params.name)
    }
}
</script>

<style>

</style>