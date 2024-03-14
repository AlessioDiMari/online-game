<script>
import SocialsComponent from './SocialsComponent.vue';

export default{
    name: 'AppMainSectionT',

    components:{
        SocialsComponent
    },

    data(){
        return{
            teams:[
                {
                    image: '../../public/imgs/team-2.png',
                    name: 'gaming',
                    img_bg: '../../public/imgs/5.jpg'
                },
                {
                    image: '../../public/imgs/teamsm-1.png',
                    name: 'dragons',
                    img_bg: '../../public/imgs/1.jpg'
                },
                {
                    image: '../../public/imgs/teamsm-3.png',
                    name: 'frogs',
                    img_bg: '../../public/imgs/5.jpg'
                },
                {
                    image: '../../public/imgs/teamsm-6.png',
                    name: 'lions',
                    img_bg: '../../public/imgs/1.jpg'
                },
                {
                    image: '../../public/imgs/teamsm-5.png',
                    name: 'shatks',
                    img_bg: '../../public/imgs/5.jpg'
                },
            ]
        }
    }
}

</script>

<template>
    <div class="third-section">
        <div class="titles">
            <small>
                out team players
            </small>
            <h3>
                meet our players
            </h3>
        </div>
        <div class="teams">
            <div v-for="team in teams" class="team">
                <div class="team-info" :style="{ 'background-image': 'url(' + team.img_bg + ')' }">
                    <div class="team-img">
                        <img :src="team.image" alt="">
                    </div>
                    <div class="team-name">
                        {{ team.name }} team
                    </div>
                    <SocialsComponent></SocialsComponent>
                </div>
            </div>
        </div>
        <div class="cover">
            <div class="container">
                <div class="join">
                    <small>
                        let's play together
                    </small>
                    <h3>
                        join <strong>gamer</strong> esports to become next pro gamer today!
                    </h3>
                    <p>
                        Distinctively provide access mutfucto users whereas transparent process somes ncentivize efficient functionalities rather than a extensible archtectur services and cross
                    </p>
                    <button>
                        join community
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </button>
                </div>
                <div class="image">
                    <img src="../../public/imgs/01 (1).png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.third-section{
    padding-top: 120px;
    background-color: #090E38;
    
    .titles{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
    
        small{
            color: $primary;
        }
    
    }

    .teams{
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .team{
            padding: 10px;
            background-color: $background;
            width: calc(100% / 5 - 20px / 5 * 4);

            .team-info{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 65px 0;
                height: 100%;
                background-size: cover;

                .team-img{
                    padding-top: 65px;
                    padding-bottom: 38px;
                }

                .team-name{
                    text-transform: uppercase;
                    font-weight: bold;
                    padding-bottom: 22px;
                }
            }
        }
    }

    .cover{
        display: flex;
        justify-content: center;
        padding-top: 120px;

        .container{
            flex-direction: row;
            background-image: url('../../public/imgs/bg\ \(4\).jpg');

            .join{
                padding: 66px 48px;
                
                small{
                    color: $primary;
                }

                small, h3{
                    text-transform: uppercase;
                }

                h3{
                    font-size: 1.5em;
                    padding-bottom: 32px;
                    
                    strong{
                        color: $primary;
                    }
                }

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
    }
}



</style>