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
                <div class="foot-resume">
                    <img src="../../public/imgs/logo.png" alt="">
                    <p>Upropriate brand economca sound technolog after covalent technology enable prospective wasting markets whereas propriate </p>
                </div>
                <div class="jackpot">
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
                <div class="foot-form">
                    <h4>our newsletter</h4>
                    <div class="caption">
                        Gamer exports organization supported by community leaders
                    </div>
                    <input id="input-name" type="text">
                    <input id="input-email" type="text">
                    <button>
                        send message
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="foot-bottom">

            </div>
        </div>
    </footer>
    
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

footer{
    display: flex;
    justify-content: center;
    background-image: url('../../public/imgs/bg\ \(5\).jpg');
    background-position: cover;
    min-height: 775px;

    .foot-top{
        display: flex;

        .foot-info{
            display: flex;
            justify-content: center;
            flex-grow: 1;
            gap: 12px;
            padding: 36px 16px;

            img{
                height: 100%;
            }
        }
    }

    .foot-main{
        display: flex;
        justify-content: space-between;
    }

    .games{
        display: flex;
        flex-direction: column;
        gap: 12px;

        .game{
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }


}

</style>
