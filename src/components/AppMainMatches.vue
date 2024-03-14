<script>
import SocialsComponent from './SocialsComponent.vue';

export default{
    name: 'AppMainMatches',

    components:{
        SocialsComponent,
    },

    data(){
        return{
            matches:[
                {
                    opponent_first: '../../public/imgs/teamsm-1.png',
                    opponent_second: '../../public/imgs/teamsm-2.png',
                    name: 'call of duty tournament',
                    date: '30 aprile 2024 | Time: 08:30PM',
                },
                {
                    opponent_first: '../../public/imgs/teamsm-3.png',
                    opponent_second: '../../public/imgs/teamsm-4.png',
                    name: '8-4',
                    date: '30 aprile 2024 | Time: 08:30PM',
                },
                {
                    opponent_first: '../../public/imgs/teamsm-5.png',
                    opponent_second: '../../public/imgs/teamsm-6.png',
                    name: 'league battle tournament',
                    date: '30 aprile 2024 | Time: 08:30PM',
                },
                {
                    opponent_first: '../../public/imgs/teamsm-7.png',
                    opponent_second: '../../public/imgs/teamsm-8.png',
                    name: '8-4',
                    date: '30 aprile 2024 | Time: 08:30PM',
                },
                {
                    opponent_first: '../../public/imgs/teamsm-9.png',
                    opponent_second: '../../public/imgs/teamsm-10.png',
                    name: 'pubg classic tournament',
                    date: '30 aprile 2024 | Time: 08:30PM',
                },
                {
                    opponent_first: '../../public/imgs/teamsm-11.png',
                    opponent_second: '../../public/imgs/teamsm-12.png',
                    name: '3-4',
                    date: '30 aprile 2024 | Time: 08:30PM',
                },
            ]
        }
    }
}

</script>

<template>

    <div class="wrapper">
        <div class="container">
            <div class="top">
                <small>
                    Anywhere, anytime
                </small>
                <h2>
                    All mathches schedule
                </h2>
                <div class="match">
                    <div class="match-head">
                        <div class="p-quantity">
                            2 group <strong>32 players</strong>
                        </div>
                        <div class="prize">
                            prize pool: <strong>$3200</strong>
                        </div>
                    </div>
                    <div class="match-main">
                        <div class="match-info">
                            <div class="match-name">
                                Battlefield-4 tournament
                            </div>
                            <div class="time">
                                30 aprile 2024 | Time: 08:30PM
                            </div>
                        </div>
                        <div class="teams">
                            <div class="team-1">
                                <img src="../../public/imgs/teamsm-6.png" alt="">
                            </div>
                            <div class="vs">
                                <img id="vs" src="../../public/imgs/vs.png" alt="">
                            </div>
                            <div class="team-2">
                                <img src="../../public/imgs/teamsm-9.png" alt="">
                            </div>
                        </div>
                        <div class="right">
                            <SocialsComponent></SocialsComponent>
                            <button>
                                watch now
                                <i class="fa-solid fa-circle-play"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="titles">
                    <h3>upcoming matches</h3>
                    <h3>previous matches</h3>
                </div>
                <div class="matches">
                    <div v-for="match in matches" class="match">
                        <div class="match-head">
                            <div class="p-quantity">
                                2 group <strong>32 players</strong>
                            </div>
                            <div class="prize">
                                prize pool: <strong>$3200</strong>
                            </div>
                        </div>
                        <div class="match-main">
                            <div class="team-1">
                                <img :src="match.opponent_first" alt="">
                            </div>
                            <div class="teams">
                            </div>
                            <div class="middle">
                                <div class="match-info">
                                    <div class="match-name">
                                        {{ match.name }}
                                    </div>
                                    <div class="time">
                                        {{ match.date }}
                                    </div>
                                </div>
                                <SocialsComponent></SocialsComponent>
                            </div>
                            <div class="team-2">
                                <img :src="match.opponent_second" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="btn">
                    <button>
                        brows all matches
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.wrapper{
    background-image: url('../../public/imgs/bg\ \(1\).jpg');
    display: flex;
    justify-content: center;

    .top{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;

    }
    
    .match{
        display: flex;
        flex-direction: column;
        width: 100%;

        
        .match-head{
            display: flex;
            justify-content: space-between;
            background-color: $primary;
            padding: 15px 30px;
            text-transform: uppercase;
        }

        .match-main{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            color: $textsecondary;
            padding: 15px 30px;

            .match-name{
                text-transform: uppercase;
                font-weight: bold;
            }

            .time{
                color: grey;
            }

            .teams{
                display: flex;
                align-items: center;
                justify-content: space-between;
                
            }

            .right{
                display: flex;
                align-items: center;
                gap: 24px;

                button{
                    margin-top: 34px;
                    padding: 22px 30px;
                    border: none;
                    border-radius: 0.3em;
                    background-color: $primary;
                    color: white;
                    font-size: 1.1em;
                    text-transform: uppercase;
                    font-weight: bold;
                    box-shadow: 4px 4px 0 0 rgba(255, 255, 255, .4);

                    &:hover{
                        box-shadow: -4px -4px 0 0 $primary;
                        background-color: white;
                        color: $primary;
                    }
                }
            }

        }
    }

    .main{
        display: flex;
        flex-direction: column;


        .titles{
            display: flex;
            justify-content: space-around;
            text-transform: uppercase;
            margin-bottom: 24px;
        }

        .matches{
            display: flex;
            justify-content: space-between;
            gap: 48px;
            flex-wrap: wrap;

            .match{
                width: calc(100% / 2 - 48px / 2);

                .middle{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;

                    .match-info{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            }
        }
    }

    .btn{
        display: flex;
        justify-content: center;
        margin-top: 80px;
        margin-bottom: 120px;

        button{
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
                box-shadow: -4px -4px 0 0 $primary;
                background-color: $textprimary;
                color: $primary;
            }
        }
    }
}

</style>