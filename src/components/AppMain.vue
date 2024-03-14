<script>
import AppJumbo from './AppJumbo.vue';
import AppMainSectionF from './AppMainSectionF.vue';
import AppMainMatches from './AppMainMatches.vue';
import AppMainShop from './AppMainShop.vue';
import AppMainSectionT from './AppMainSectionT.vue'

export default{
    name: 'AppMain',

    components:{
        AppJumbo,
        AppMainSectionF,
        AppMainMatches,
        AppMainShop,
        AppMainSectionT
    }
}
</script>

<template>
    <div class="app-main">
        <AppJumbo></AppJumbo>
        <AppMainSectionF></AppMainSectionF>
        <AppMainMatches></AppMainMatches>
        <AppMainSectionT></AppMainSectionT>
        <AppMainShop></AppMainShop>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;



</style>
