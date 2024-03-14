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
                        <img :src="product.image" alt="">
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
            <section>
                <div class="titles">
                    <small>we our partners</small>
                    <h3>
                        become ou partners
                    </h3>
                </div>
            </section>
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
    
            .vote{
                margin-bottom: 20px;
            }
        }
    }

    hr{
        margin: 120px 0;
    }

}

</style>