<template>
    <div class="earn-profits">
        <h3>Earn Your Profits by <br class="br-1200" />Lending & Borrowing on Aegis</h3>
        <ag-1200>
            <div class="earn-list">
                <div class="flex-align-center earn-item">
                    <img src="../../../assets/imgs/lending-pool@2x.png" alt="">
                    <p>Lending Pool</p>
                </div>

                <div class="flex-align-center earn-item">
                    <img src="../../../assets/imgs/derivative@2x.png" alt="">
                    <p>Derivative and<br> asset issuance</p>
                </div>

                <div class="flex-align-center earn-item">
                    <img src="../../../assets/imgs/infinite@2x.png" alt="">
                    <p>Infinite Liquidity +<br>Definite Security</p>
                </div>
            </div>
        </ag-1200>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

.earn-profits {

    h3 {
        text-align: center;
        font-weight:500;
        color:white;
        line-height:86px;
    }

    .earn-list {
        display: flex;
        justify-content: space-between;
        padding-top: 85px;

        .earn-item {

            img {
                margin-right: 20px;
                width: 156px;
                height: 156px;
            }
            p {
                font-size: 24px;
                color: white;
                font-weight: 200;
                line-height: 1.5;
            }
        }
    }
}

@media screen and (min-width: 1200px) {

    .earn-profits {

        h3 {
            font-size:56px;
        }

    }

     
}

@media screen and (max-width: 1199px) {

    .earn-profits {
        padding: 50px 0 0;


        h3 {
            padding: 0 20px;
            font-size: $h1;
            line-height: 1.3;
            font-weight: bold;
        }

        .earn-list {
            padding: 30px 25px 0;
            flex-direction: column;

            .earn-item {
                margin-bottom: 30px;

                img {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }
}


</style>