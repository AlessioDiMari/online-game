<script>
import AppJumbo from './AppJumbo.vue';
import AppMainSectionF from './AppMainSectionF.vue';
import AppMainMatches from './AppMainMatches.vue'

export default{
    name: 'AppMain',

    components:{
        AppJumbo,
        AppMainSectionF,
        AppMainMatches
    }
}
</script>

<template>
    <div class="app-main">
        <AppJumbo></AppJumbo>
        <AppMainSectionF></AppMainSectionF>
        <AppMainMatches></AppMainMatches>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;



</style>
