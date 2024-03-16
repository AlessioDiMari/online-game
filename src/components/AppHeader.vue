<script>
import { store } from '../store';

export default{
    name: 'AppHeader',

    props:{
        navLinks: Array,
    },

    data(){
        return{

        }
    },
}

</script>

<template>
    
    <header class="header-fixed">
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
                <div class="logo">
                    <img src="../../public/imgs/logo.png" alt="">
                </div>
                <div class="nav-links">
                    <ul>
                        <li v-for="link in navLinks" :key="link.text">
                            <a href="#">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="nav-button">
                    <button class="btn-first">
                        <i class="fa-solid fa-user"></i>
                        LOG IN
                    </button>
                    <button class="btn-second">
                        <i class="fa-solid fa-users"></i>
                        SIGN UP
                    </button>
                </div>
            </nav>
        </div>
    </header>

</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;


.header-fixed{
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1000;
}

header{
    display: flex;
    justify-content: center;
    background-color: rgba($color: #000000, $alpha: 0.5);

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
                cursor: pointer;
                display: flex;
                align-items: center;
                border: 1px solid #2A3179;
                padding: 18px 16px;
            }
            
        }
    }

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        ul{
            display: flex;
            list-style-type: none;
            gap: 20px;

            a{
                text-decoration: none;
                text-transform: uppercase;
                color: $textprimary;
                font-weight: bold;
            }
        }

        button{
            cursor: pointer;
            padding: 16px 22px;
            border: none;

            &.btn-first{
                background-color: $textprimary;
                color: $primary;
                box-shadow: 2px 2px 0 0 $primary;
            }
            
            &.btn-second{
                background-color: $primary;
                box-shadow: 2px 2px 0 0 $textprimary;
            }

            &:hover{
                box-shadow: 4px 4px 0 0;
                transform: translate(-1px, -1px);
                transform: scale(1.05);                                  
            }
        }
    }
}


</style>
