<script>

export default{
    name: 'AppMainShop',

    data(){
        return{
            products:[
                {
                    image: '../../public/imgs/01 (1).jpg',
                    prod_color: 'black',
                },
                {
                    image: '../../public/imgs/02 (1).jpg',
                    prod_color: 'green',
                },
                {
                    image: '../../public/imgs/01 (1).jpg',
                    prod_color: 'yellow',
                },
                {
                    image: '../../public/imgs/02 (1).jpg',
                    prod_color: 'blue',
                },
            ],

            partners:[
                {
                    partner_image: '../../public/imgs/01 (2).png'
                },
                {
                    partner_image: '../../public/imgs/05.png'
                },
                {
                    partner_image: '../../public/imgs/06.png'
                },
                {
                    partner_image: '../../public/imgs/08.png'
                },
                {
                    partner_image: '../../public/imgs/01 (2).png'
                },
                {
                    partner_image: '../../public/imgs/05.png'
                },
                {
                    partner_image: '../../public/imgs/06.png'
                },
                {
                    partner_image: '../../public/imgs/08.png'
                },
            ]
        }
    }
}

</script>

<template>
    <div class="shop">
        <div class="container">
            <section class="top">
                <div class="titles">
                    <small>gamer t-shirt's</small>
                    <h3>
                        explore our products
                    </h3>
                </div>
                <div class="products">
                    <div v-for="product in products" class="product">
                        <div class="img-wrapper">
                            <img :src="product.image" alt="">
                        </div>
                        <strong>{{ product.prod_color }} t-shirt here</strong>
                        <div class="prize">
                            $380.00
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
            </section>
            <hr>
            <section class="bottom">
                <div class="titles">
                    <small>we our partners</small>
                    <h3>
                        become ou partners
                    </h3>
                </div>
                <div class="partners">
                    <div v-for="partner in partners" class="partner">
                        <img :src="partner.partner_image" alt="">
                    </div>
                </div>
            </section>
            <div class="btn">
                <button>
                    Become a partner
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.shop{
    display: flex;
    justify-content: center;
    background-color: #090E38;
    
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
            padding-bottom: 48px;
        }
    }

    .top{
        display: flex;
        flex-direction: column;
        margin-top: 120px;
        
        
        .products{
            display: flex;
            gap: 24px;
        }
    
        .product{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            width: calc(100% / 4 - 24px / 4 * 3);
            padding: 10px;
            background-color: $secondary;
            
            .img-wrapper{
                overflow: hidden;
                background-color: white;
            }

            strong{
                text-transform: uppercase;
            }

            .vote{
                margin-bottom: 20px;
            }

            &:hover{
                cursor: pointer;
                background-color: $primary;

                img{
                    transform: rotate(10deg);
                    scale: 1.2;
                }
            }
        }
    }

    hr{
        margin: 120px 0;
    }

    .bottom{
        margin-bottom: 20px;


        .partners{
            display: flex;
            justify-content: center;
            align-items: center;
            row-gap: 48px;
            column-gap: 170px;
            flex-wrap: wrap;
    
            .partner{
                width: calc(100% / 5 - 170px / 5 * 4);
            }
        }
    }

    .btn{
        display: flex;
        justify-content: center;
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
                box-shadow: -4px -4px 0 0 $textprimary;
                background-color: $primary;
                color: $textprimary;
            }
        }
    }

}

</style>