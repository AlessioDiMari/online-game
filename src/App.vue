<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default{
    data(){
        return{
            store,
        }
    },
    components:{
        AppHeader,
    }
}

</script>

<template>

    <AppHeader :navLinks="store.navLinks"></AppHeader>

</template>

<style lang="scss">
@use '../src/styles/style.scss' as *;
@use '../src/styles/_variables.scss' as *;



</style>
