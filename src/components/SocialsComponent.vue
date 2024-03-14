<script>
export default{
    name: 'SocialsComponent',

}

</script>

<template>

    <div class="socials">
        <img src="../../public/imgs/social-1.png" alt="">
        <img src="../../public/imgs/social-2.png" alt="">
        <img src="../../public/imgs/social-3.png" alt="">
    </div>

</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.socials{
    display: flex;
    gap: 10px;

    img{
        object-fit: contain;
    }
}

</style>