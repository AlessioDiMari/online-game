<script>
import AppJumbo from './AppJumbo.vue';
import AppMainSectionF from './AppMainSectionF.vue';

export default{
    name: 'AppMain',

    components:{
        AppJumbo,
        AppMainSectionF
    }
}
</script>

<template>
    <div class="app-main">
        <AppJumbo></AppJumbo>
        <AppMainSectionF></AppMainSectionF>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;



</style>
