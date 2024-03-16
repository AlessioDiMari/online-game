<script>
export default{
    name: 'AppJumbo',

}

</script>

<template>
    <div class="jumbo">
        <div class="container">
            <div class="intro">
                <h1>Online Game</h1>
                <h2>Genuine money transaction</h2>
                <p>
                    Actively Comunicate A Expanded Array Of Mindshare Rather Than Diverse Technologies For Magnetic Application Eamlessly Virtual Then Convenientlt Monetize Synergistic Human Capital
                </p>

                <button>
                    join us today
                    <i class="fa-solid fa-circle-play"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/style.scss' as *;
@use '../styles/_variables.scss' as *;

.jumbo{
    display: flex;
    justify-content: center;
    background-image: url('../../public/imgs/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    .container{
        margin: 200px 0;

        .intro{
            width: 50%;

            h1, h2{
                text-transform: uppercase;
                font-weight: bold;
            }

            h1{
                font-size: 4em
            }

            h2{
                font-size: 2em;
            }

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
                box-shadow: 4px 4px 0 0 rgba(255, 255, 255, .4);

                &:hover{
                    box-shadow: -4px -4px 0 0 rgba(255, 255, 255, .4);
                    background-color: $primary;
                    color: white;
                }
            }
        }
    }
}

</style>
