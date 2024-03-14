<script>
export default{
    name: 'AppFooter',

    props:{
        footInfo: Array,
        footJackpots: Array,
    },

    data(){
        return{

        }
    }
}

</script>

<template>
    
    <footer>
        <div class="container">
            <div class="top-top">
                <div class="foot-top">
                    <div v-for="info in footInfo" :key="info.info_name" class="foot-info">
                        <img src="../../public/imgs/icon-0.png" alt="">
                        <div class="info">
                            <div class="info-name">{{ info.info_name }}: </div>
                            <div class="info-cont">{{ info.info_cont }}</div>
                        </div>
                    </div>
                </div>
                <div class="foot-main">
                    <div class="foot-resume col">
                        <img src="../../public/imgs/logo.png" alt="">
                        <p>Upropriate brand economca sound technolog after covalent technology enable prospective wasting markets whereas propriate and brand economca sound technolog</p>
                    </div>
                    <div class="jackpot col">
                        <h4>Top Jackpot Games</h4>
                        <div class="games">
                            <div v-for="game in footJackpots" :key="game.type" class="game">
                                <img src="../../public/imgs/01 (4).jpg" alt="">
                                <div class="game-info">
                                    <div class="name">
                                        {{ game.type }} Poker game
                                    </div>
                                    <div class="prize">
                                        Poker: {{ game.money }}
                                    </div>
                                    <div class="vote">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foot-form col">
                        <h4>our newsletter</h4>
                        <div class="caption">
                            Gamer exports organization supported by community leaders
                        </div>
                        <input id="input-name" type="text" placeholder="Your Name">
                        <input id="input-email" type="text" placeholder="Your Email">
                        <button>
                            send message
                            <i class="fa-solid fa-circle-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot-bottom">
            @2024 <strong>Gamer</strong> -eSports And Gaming HTML Template.
        </div>
    </footer>
    
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../public/imgs/bg\ \(5\).jpg');
    background-position: cover;
    background-repeat: no-repeat;
    
    .container{
        margin-bottom: 65px;
    }

    .foot-top{
        display: flex;
        margin-bottom: 110px;
        
        
        .foot-info{
            display: flex;
            justify-content: center;
            flex-grow: 1;
            gap: 12px;
            padding: 36px 16px;
            border: 1px solid #2A3179;
            
            img{
                height: 100%;
            }
        }
    }

    .foot-main{
        display: flex;
        justify-content: space-between;

        h4{
            font-weight: bold;
            font-size: 1.2em;
            text-transform: uppercase;
        }


        .foot-resume img{
            margin-bottom: 50px;
        }
    
        .jackpot h4{
            margin-bottom: 28px;
        }
    
        .col{
            width: calc(100% / 3);
    
    
            .games{
                display: flex;
                flex-direction: column;
                gap: 12px;
        
                .game{
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    .game-info{
                        display: flex;
                        flex-direction: column;
                    }
    
                    .name{
                        text-transform: uppercase;
                        font-weight: bold;
                    }
    
                    i{
                        color: $primary;
                    }
                }
            }
    
        }
        
        .foot-form{
            display: flex;
            flex-direction: column;
            gap: 22px;
    
            input{
                border: none;
                padding: 14px 20px;
                border-radius: 0.3em;
            }
    
            button{
                border: none;
                width: 50%;
                padding: 16px 20px;
                text-transform: uppercase;
                font-weight: bold;
                background-color: $textprimary;
                color: $primary;
                box-shadow: 2px 2px 0 0 $primary;
    
                &:hover{
                    color: $textprimary;
                    background-color: $primary;
                    box-shadow: 0 0 2px 2px $textprimary;
                    transform: translate(1px, 1px);                                    
                }
            }
        }
    }

    .foot-bottom{
        padding: 44px;
        background-color: $background;
        width: 100%;
        text-align: center;
    }

}

</style>
