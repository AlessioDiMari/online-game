<script>
export default{
    name: 'AppMainTestimonial',

    data(){
        return{
            users:[
                {
                    image: '../../public/imgs/01 (2).jpg',
                    name: 'madley pondor',
                    status: 'ui designer',
                    team: '../../public/imgs/01 (3).png',
                },
                {
                    image: '../../public/imgs/01 (2).jpg',
                    name: 'oliver beddows',
                    status: 'ui designer',
                    team: '../../public/imgs/06.png',
                },
            ]
        }
    }
}

</script>

<template>
    <div class="news">
        <div class="container">
            <div class="titles">
                <small>
                    our recent news
                </small>
                <h3>
                    our most popular testimonial post
                </h3>
            </div>
            <div class="posts">
                <div v-for="post in users" class="post">
                    <div class="post-top">
                        <div class="user-profile">
                            <div class="user-img">
                                <img :src="post.image" alt="">
                            </div>
                            <div class="user-info">
                                <div class="user-name">
                                    {{ post.name }}
                                </div>
                                <div class="user-status">
                                    ui designer
                                </div>
                            </div>
                        </div>
                        <div class="user-team">
                            <img :src="post.team" alt="">
                        </div>
                    </div>
                    <hr>
                    <div class="post-botom">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, ratione dignissimos. Hic eaque est ex quasi porro alias in asperiores rem minus vitae labore quos odit facilis harum, vel veniam!
                        </p>
                        <div class="post-vote">
                            <div class="star">
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="decimal">
                                5.28
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

.news{
    display: flex;
    justify-content: center;
    background-image: url('../../public/imgs/bg.png');

    .container{
        margin-top: 120px;

        .titles{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-transform: uppercase;

            small{
                color: $primary;
            }

            h3{
                font-size: 1.7em;
                margin-bottom: 48px;
            }
        }


        .posts{
            display: flex;
            gap: 24px;
            margin-bottom: 120px;

            .post{
                display: flex;
                flex-direction: column;
                widows: calc(100% / 2 - 24px);
                padding: 24px;
                background-color: $background;
                border-radius: 0.4em;

                .post-top{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .user-profile{
                        display: flex;
                        gap: 20px;

                        .user-info{
                            text-transform: uppercase;

                            .user-name{
                                font-weight: bold;
                                font-size: 1.1em;
                            }
                        }

                        img{
                            border-radius: 50%;
                        }
                    }
                }

                hr{
                    margin: 24px 0;
                }

                .post-vote{
                    display: flex;
                    gap: 10px;
                    font-size: 1.2em;

                    .star{
                        display: flex;
                        gap: 2px;

                        i{
                            padding: 6px;
                            background-color: $tertiary;
                            border-radius: 0.3em;
                        }
                    }

                    .decimal{
                        color: $tertiary;
                        font-weight: bold;

                    }
                }
            }
        }
    }
}

</style>