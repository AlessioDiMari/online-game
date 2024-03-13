<script>
import AppHeader from './components/AppHeader.vue';
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
        AppFooter
    }
}

</script>

<template>

    <AppHeader :navLinks="store.navLinks"></AppHeader>

    <AppFooter></AppFooter>

</template>

<style lang="scss">
@use '../src/styles/style.scss' as *;
@use '../src/styles/_variables.scss' as *;



</style>
