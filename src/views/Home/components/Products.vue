<template>
    <div class="products">
        <h5>Aegis Products</h5>
        <ag-1200>
            <div class="flex-between prod-list">
               <div class="prod-item">
                   <h6>Lending Pool</h6>
                   <p>Earn more profits by Lending & Borrowing</p>
                   <div class="flex-center-center">
                       <img src="../../../assets/imgs/prod-lending-pool.png" alt="" srcset="">
                   </div>
               </div>
               <div class="prod-item">
                   <h6>Marketplace</h6>
                   <p>Issue and trade your assets here</p>
                   <div class="flex-center-center">
                       <img src="../../../assets/imgs/prod-marketplace.png" alt="" srcset="">
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
    .products {
        padding-top: 238px;

        h5 {
            text-align: center;
            height:57px;
            font-size:60px;
            font-weight:500;
            color:rgba(254,254,254,1);
            line-height: 57px;
        }

        .prod-list {
            padding: 113px 60px 0;

            .prod-item {
                padding: 60px 0 0;
                width:454px;
                height:586px;
                background:rgba(17,34,90,1);
                border-radius:20px;
                text-align: center;
                color: white;

                h6 {
                    margin-bottom: 30px;
                    height: 48px;
                    font-size:50px;
                    line-height: 48px;
                    font-weight: 400;
                }
                p {
                    font-size: 18px;
                    font-weight: 400;
                    letter-spacing: 1px;
                }

                &:first-child {
                    img {
                        margin-top: 46px;
                        width: 311px;
                    }
                }
                &:last-child {
                    img {
                        margin-top: 32px;
                        width: 381px;
                    }
                }

            }
        }
    }

@media screen and (max-width: 1199px) {
    .products {
        padding-top: 43px;
        width: 100%;

        h5 {
            height: auto;
            text-align: center;
            font-size: 35px;
            font-weight:500;
            color:rgba(254,254,254,1);
        }

        .prod-list {
            display: flex;
            flex-direction: column;
            padding: 20px 20px 0;
            width: 100%;
            box-sizing: border-box;

            .prod-item {
                // padding: 60px 0 0;
                padding: 20px 0 0;
                width:100%;
                background:rgba(17,34,90,1);
                border-radius:20px;
                text-align: center;
                color: white;
                height: auto;
                &:last-of-type {
                    margin-top: 10px;
                }

                h6 {
                    margin-bottom: 30px;
                    height: 48px;
                    font-size:30px;
                    line-height: 48px;
                    font-weight: 400;
                }
                p {
                    font-size: 16px;
                    font-weight: 400;
                    letter-spacing: 1px;
                }

                &:first-child {
                    img {
                        margin-top: 36px;
                        margin-bottom: 20px;
                        width: 80%;
                    }
                }
                &:last-child {
                    img {
                        margin-top: 22px;
                        margin-bottom: 20px;
                        width: 80%;
                    }
                }

            }
        }
    }
}
</style>