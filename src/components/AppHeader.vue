<script>
export default{
    name: 'AppHeader',

    data(){
        return{

        }
    },
}

</script>

<template>
    
    <header>
        <div class="container">
            <div class="info">
                <div class="pers-info">
                    <div class="phone">
                        <i class="fa-solid fa-phone"></i>
                        3334445555
                    </div>
                    <div class="address">
                        <i class="fa-solid fa-location-dot"></i>
                        via del pinco pallino
                    </div>
                </div>
                <div class="social">
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-vimeo-v"></i>
                    <i class="fa-brands fa-skype"></i>
                    <i class="fa-solid fa-rss"></i>
                </div>
            </div>
            <nav>
                
            </nav>
        </div>
    </header>

</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;


header{
    display: flex;
    justify-content: center;
}

.info{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border: 1px solid #2A3179;


    .pers-info{
        display: flex;
        justify-content: space-between;

        > * {
            border: 1px solid #2A3179;
            padding: 18px 44px;
        }
    }

    .social{
        display: flex;
        align-items: stretch;
        
        > * {
            display: flex;
            align-items: center;
            border: 1px solid #2A3179;
            padding: 18px 16px;
        }
    }
}

</style>
