<script>
export default{
    name: 'AppMainStream',

    data(){
        return{
            firstRow:[
                {
                    cont_img: '../../public/imgs/01.jpg',
                    name: '2022 lvp supeeliga orange summer',
                },
                {
                    cont_img: '../../public/imgs/01.jpg',
                    name: 'pubg classic tournament',
                }
            ],

            secondRow:[
                {
                    cont_img: '../../public/imgs/05.jpg',
                    name: 'can i add my local bank...',
                },
                {
                    cont_img: '../../public/imgs/05.jpg',
                    name: 'league battle tournament...',
                },
                {
                    cont_img: '../../public/imgs/05.jpg',
                    name: 'where i can redeem my...',
                },
            ]
        }
    }
}

</script>

<template>
    <div class="stream">
        <div class="container">
            <div class="titles">
                <small>
                    our latest videos
                </small>
                <h3>
                    check our live streaming
                </h3>
            </div>
            <div class="contents">
                <div class="first-row">
                    <div v-for="contF in firstRow" class="content">
                        <div class="cont-elements" :style="{ 'background-image': 'url(' + contF.cont_img + ')' }">
                            <div class="play-button-static">
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                            <div class="play">
                                <div class="btn-watch">
                                    <button>
                                        watch now
                                        <i class="fa-solid fa-circle-play"></i>
                                    </button>
                                </div>
                                <div class="stream-title">
                                    {{ contF.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second-row">
                    <div v-for="contS in secondRow" class="content">
                        <div class="cont-elements" :style="{ 'background-image': 'url(' + contS.cont_img + ')' }">
                            <div class="play-button-static">
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                            <div class="play">
                                <div class="btn-watch">
                                    <button>
                                        watch now
                                        <i class="fa-solid fa-circle-play"></i>
                                    </button>
                                </div>
                                <div class="stream-title">
                                    {{ contS.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.stream{
    display: flex;
    justify-content: center;
    background-image: url('../../public/imgs/bg\ \(3\).jpg');

    .container{
        margin-top: 120px;

        .titles{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 48px;
            text-transform: uppercase;

            small{
                color: $primary;
            }

            h3{
                font-size: 1.7em;
            }
        }

        .first-row{
            display: flex;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 24px;

            .content{
                width: calc(100% / 2 - 24px);
                padding: 10px;
                background: $background;
                
            }
        }
        
        .cont-elements{
            display: flex;
            flex-direction: column;
            padding: 34px 30px;

            .play-button-static{
                display: flex;
                justify-content: center;
                
                i{
                    font-size: 60px;
                    border: 34px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50%;

                }
            }
        }

        .second-row{
            display: flex;
            justify-content: space-between;
            gap: 24px;
            margin-bottom: 120px;

            .content{
                width: calc(100% / 3 - 24px / 3 * 2);
                padding: 10px;
                background: $background;
            }
        }

    }
}

</style>