<script>
export default{
    name: 'AppSectionf',

    data(){
        return{
            games:[
                {
                    first_opponent: '../../public/imgs/team-1.png',
                    second_opponent: '../../public/imgs/team-2.png',
                },
                {
                    first_opponent: '../../public/imgs/teamsm-4.png',
                    second_opponent: '../../public/imgs/teamsm-3.png',
                },
                {
                    first_opponent: '../../public/imgs/teamsm-2.png',
                    second_opponent: '../../public/imgs/teamsm-1.png',
                }
            ]
        }
    }
}

</script>

<template>
    
    <div class="first-main-section">
        <div class="container">
            <section>
                <div class="date">
                    today's
                </div>
                <h3>our game collection</h3>
                <div class="today-games">
                    <div v-for="game in games" class="game">
                        <div class="opponent">
                            <img :src="game.first_opponent" alt="">
                        </div>
                        <img src="../../public/imgs/vs.png" alt="">
                        <div class="opponent">
                            <img :src="game.second_opponent" alt="">
                        </div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <button>
                        browse all games
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </div>
            </section>
            <hr>
            <section id="second-sec">
                <div class="img">
                    <img src="../../public/imgs/01.png" alt="">
                </div>
                <div class="we-are">
                    <small>who we are</small>
                    <h3>
                        we are professionale team esport
                    </h3>
                    <p>
                        Distinctively provide access mutfucto users whereas transparent process somes ncentivize efficient functionalities rather than a extensible archtectur services and cross
                    </p>
                    <div class="features">
                        <div class="feature">
                            <div class="icon">
                                <img src="../../public/imgs/icon-1.png" alt="">
                            </div>
                            <div class="caption">
                                <h4>
                                    103k community earning
                                </h4>
                                Distinctively provide access mutfucto users whereas communicate leveraged services
                            </div>
                        </div>
                        <div class="feature">
                            <div class="icon">
                                <img src="../../public/imgs/icon-2.png" alt="">
                            </div>
                            <div class="caption">
                                <h4>
                                    34m+ registered players
                                </h4>
                                Distinctively provide access mutfucto users whereas communicate leveraged services
                            </div>
                        </div>
                        <div class="feature">
                            <div class="icon">
                                <img src="../../public/imgs/icon-3.png" alt="">
                            </div>
                            <div class="caption">
                                <h4>
                                    240k streams complete
                                </h4>
                                Distinctively provide access mutfucto users whereas communicate leveraged services
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.first-main-section{
    display: flex;
    justify-content: center;
    padding-top: 120px;
    background-color: #090E38;

    .date, h3{
        text-align: center;
        text-transform: uppercase;
    }

    .date{
        font-size: 1em;
        color: $primary;
    }

    h3{
        font-size: 1.6em;
        padding-bottom: 48px;
    }

    .today-games{
        display: flex;
        justify-content: space-between;

        .game{
            cursor: pointer;
            display: flex;
            gap: 16px;
            padding: 64px 38px;
            border-radius: 0.3em;
            background-color: $secondary;

            >img{
                object-fit: contain;
            }


        }
    }

    .btn-wrapper{
        display: flex;
        justify-content: center;
        margin-top: 80px;

        button{
            cursor: pointer;
            margin-top: 34px;
            padding: 22px 30px;
            border: none;
            border-radius: 0.3em;
            background-color: white;
            color: $primary;
            font-size: 1.1em;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 4px 4px 0 0 $primary;
    
            &:hover{
                box-shadow: -4px -4px 0 0 $textprimary;
                background-color: $primary;
                color: $textprimary;
            }
        }
    }

    hr{
        margin: 114px 0;
    }

    #second-sec{
        display: flex;
        margin-bottom: 110px;

        .img{
            height: 100%;
        }

        .we-are{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            small{
                color: $primary;
                text-transform: uppercase;
            }
    
            h3{
                text-align: left;
                text-transform: uppercase;
                font-size: 2em;
            }
    
            p{
                margin-bottom: 38px;
            }
    
            .features{
                display: flex;
                flex-direction: column;
                gap: 32px;
    
                .feature{
                    display: flex;
                    gap: 20px;
                    align-items: center;
        
                    .icon{
                        padding: 16px;
                        background-color: $primary;
                        border-radius: 50%;
                        aspect-ratio: 1/1;
                        
                        img{
                            height: 100%;
                            aspect-ratio: 1 / 1;
                        }
                    }
                }
            }
        }


    }
}


</style>