<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';

export default{
    data(){
        return{
            store,
        }
    },
    components:{
        AppHeader,
        AppMain,
        AppFooter
    }
}

</script>

<template>

    <AppHeader :navLinks="store.navLinks"></AppHeader>

    <AppMain></AppMain>

    <AppFooter :footInfo="store.footInfo" :footJackpots="store.footJackpots"></AppFooter>

</template>

<style lang="scss">
@use '../src/styles/style.scss' as *;
@use '../src/styles/_variables.scss' as *;



</style>
