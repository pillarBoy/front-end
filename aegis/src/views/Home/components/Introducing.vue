<template>
    <div class="introducing">
        <ag-1200>
            <div class="introducing-content">
                <h5>Introducing Aegis</h5>
                <p class="into-detal">Aegis offers more diversified lending services such as Micro-lending and Unsecured Lending <br class="br-1200">based on the validation of users’ credit lines in their daily lives.</p>
                <div class="flex-between-center intro-list">
                    <div class="intro-item">
                        <img src="../../../assets/imgs/lending-icon@2x.png" >
                        <p>Lending</p>
                    </div>
                    <div class="intro-item">
                        <img src="../../../assets/imgs/commodity-icon@2x.png" >
                        <p>Commodity</p>
                    </div>
                    <div class="intro-item">
                        <img src="../../../assets/imgs/forex-icon@2x.png" >
                        <p>Forex</p>
                    </div>
                    <div class="intro-item">
                        <img src="../../../assets/imgs/index-icon.png" >
                        <p>Index</p>
                    </div>
                    <div class="intro-item">
                        <img src="../../../assets/imgs/cryptos-icon@2x.png" >
                        <p>Cryptos</p>
                    </div>
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
.introducing {
    // padding-bottom: 200px;

    .introducing-content {
        // padding-top: 124px;

        h5 {
            
            font-weight:bold;
            color:rgba(255,255,255,1);
            text-align: center;
        }

        .into-detal {
            padding-top: 40px;
            font-size:22px;
            color:rgba(255,255,255,.8);
            line-height: 28px;
            text-align: center;
        }

        .intro-list {
            padding-top: 60px;
        }

        .intro-item {
            display: flex;
            flex-direction: column;
            align-items: center;
           
            background:rgba(17,34,90,1);
            border-radius:10px;

            &>p {
                height: 22px;
                line-height: 22px;
                font-size: 22px;
                color: white;
                text-align: center;
            }

            
           
        }
    }
}



@media screen and (min-width: 1200px) {
    .introducing {
        padding-bottom: 200px;

        .introducing-content {
            padding-top: 124px;

            h5 {
                height:58px;
                font-size:60px;
            }


            .intro-item {
                 width:206px;
                height:280px;


                &:first-child {
                    img {
                        margin: 60px 0 43px;
                        width: 94px;
                        height: 88px;
                    }
                }
                &:nth-child(2) {
                    img {
                        margin: 71px 0 46px;
                        width: 85px;
                        height: 76px;
                    }
                }
                &:nth-child(3) {
                    img {
                        margin: 65px 0 44px;
                        width: 103px;
                        height: 84px;
                    }
                }
                &:nth-child(4) {
                    img {
                        margin: 73px 0 52px;
                        width: 94px;
                        height: 70px;
                    }
                }

                &:last-child {
                    img {
                        margin: 68px 0 54px;
                        width: 63px;
                        height: 71px;
                    }
                }
            }
        }
    }
}


@media screen and (max-width: 1199px) {
    .introducing {
        
        .introducing-content {

            h5 {
                font-size: $h1;
            }
            .into-detal {
                padding-top: 10px;
                font-size: $fontBase;
                line-height: 1.6;
                font-size: 12px;
            }
           

            .intro-list {
                // flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-around;
                padding: 30px 0 0;
            }

            .intro-item {
                margin-bottom: 20px;
                padding: 30px 0 20px;
                width: 80%;
                min-height: 180px;


                img {
                    margin: 0 0 20px;
                    width: 30%;
                    max-width: 90px;
                }
            }
            
        }

        
    }
    
}
    
</style>