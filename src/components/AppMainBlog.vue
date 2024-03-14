<script>
export default{
    name: 'AppMainBlog',

    data(){
        return{
            blogPosts:[
                {
                    title: 'distinctive redefine reource maximizing for',
                },
                {
                    title: 'redifine resource maximizing for distance',
                }
            ]
        }
    }
}

</script>

<template>

    <div class="blog">
        <div class="container">
            <div class="titles">
                <small>
                    our recent news
                </small>
                <h3>
                    our most popular blog post
                </h3>
            </div>
            <div class="blog">
                <div v-for="post in blogPosts" class="blog-post">
                    <div class="blog-image">
                        <img src="../../public/imgs/01 (3).jpg" alt="">
                    </div>
                    <h4>{{ post.title }}</h4>
                    <div class="user">
                        Admin | 01 January 2022
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis cupiditate ipsa, maxime provident quia obcaecati odio cum ex tempora quas rerum quasi veritatis nobis suscipit nisi perferendis repellendus iure illo?</p>
                    <div class="button">
                        <button>
                            read more
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.blog{
    display: flex;
    justify-content: center;
    background-image: url('../../public/imgs/bg\ \(2\).jpg');
    margin-bottom: 120px;

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

        .blog{
            display: flex;
            gap: 24px;

            .blog-post{
                width: calc(100% / 2 - 24px);
                display: flex;
                flex-direction: column;
                padding: 24px;
                background-color: $background;

                .blog-image{
                    width: 100%;

                    img{
                        width: 100%;
                    }
                }

                h4{
                    text-transform: uppercase;
                    font-size: 1.2em;
                }

                p{
                  margin: 24px 0;  
                }

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
                        cursor: pointer;
                        box-shadow: -4px -4px 0 0 $primary;
                        background-color: white;
                        color: $primary;
                    }
                }
            }
        }
    }
}

</style>