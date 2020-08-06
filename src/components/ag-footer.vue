<template>
    <footer class="ag-footer">
        <ag-1200>
            <div>
                <div class="flex-between ag-footer-content">
                    <img class="white-logo" src="../assets/imgs/logo-white.png" alt=""/>

                    <div class="flex footer-right">
                        <div class="footer-nav">
                            <div class="nav-title">Learn</div>
                            <div class="nav-link"><a href="/whitepage/AegisNetworkLitepaperEN.pdf" target="_blank">Litepaper</a></div>
                            <div class="nav-link"><a href="https://medium.com/aegisdefi-blog">Blog</a></div>
                        </div>
                        <div class="footer-nav">
                            <div class="nav-title">Products</div>
                            <div class="nav-link"><a @click.stop.prevent="alert">Dashboard</a></div>
                            <div class="nav-link"><a @click.stop.prevent="alert">Marketplace</a></div>
                        </div>
                        <div class="footer-nav">
                            <div class="nav-title">Developers</div>
                            <div class="nav-link"><a @click.prevent="alert">Contracts</a></div>
                            <div class="nav-link"><a href="https://github.com/AegisDeFi" target="_blank">GitHub</a></div>
                        </div>
                        <div class="footer-nav">
                            <div class="nav-title">Connect</div>
                            <div class="nav-link"><a href="https://t.me/AegisEN">Community</a></div>
                            <div class="nav-link"><a href="https://discord.com/invite/t5rW783">Contact Us</a></div>
                        </div>
                    </div>
                </div>
                <div class="flex-between-center other-link">
                    <div>
                        <a href="https://ethereum.org/" target="_blank" class="eth-link"><img src="../assets/imgs/eth-link.png" alt=""></a>
                        <a href="https://defi.network/" target="_blank" class="defi-link"><img src="../assets/imgs/defi-link.png" alt=""></a>
                    </div>
                    <div class="media-link">
                        <a href="https://twitter.com/AegisDeFi" target="_blank" class=""><img src="../assets/imgs/facebook-icon.png" /></a>
                        <a href="https://t.me/AegisEN" target="_blank"><img src="../assets/imgs/telegram-icon.png" /></a>
                        <a href="https://medium.com/aegisdefi-blog" target="_blank"><img src="../assets/imgs/message-icon.png" /></a>
                        <a href="https://discord.gg/t5rW783" target="_blank"><img src="../assets/imgs/game-icon.png" /></a>
                    </div>
                </div>
            </div>
        </ag-1200>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                showToast: false
            }
        },
    }
</script>

<style lang="scss" >
.ag-footer {
    height: 438px;
    background-color: #0041FA;

    .ag-footer-content {
        padding: 93px 0 0;

        .white-logo {
            width: 207px;
            height: 83px;
        }

        .footer-right {
            padding-top: 19px;
        }

        .footer-nav {
           
            
            &:not(:first-child) {
                margin-left: 145px;
            }

            a {
                color: white;
                text-decoration: none;
            }

            .nav-title {
                color: white;
                font-size: 20px;
                text-transform: uppercase;
            }

            .nav-link {
                padding-top: 35px;
                font-size: 14px;
            }
        }
    }

    .other-link {
        padding: 80px 0 0;


        .eth-link {
            margin-right: 16px;

            img {
                width: 182px;
                height: 40px;
            }
        }

        .defi-link {
            img {
                width: 114px;
                height: 40px;
            }
        }

        .media-link {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            a {
                margin-left: 27px;
            }

            img {
                width: 30px;
                height: 30px;
            }
        }

    }

}


@media screen and (max-width: 1199px) {
    .ag-footer {
        height: auto;
        background-color: #0041FA;

        .ag-footer-content {
            padding: 23px 0 0;
            flex-direction: column;
            align-items: center;

            .white-logo {
                width: 103px;
                height: 41px;
            }

            .footer-right {
                width: 100%;
                display: flex;
                padding-top: 19px;
                flex-direction: row;
                flex-wrap: wrap;
            }

            .footer-nav {
                margin-bottom: 10px;
                width: 50%;
                
                &:not(:first-child) {
                    margin-left: 0;
                }

                a {
                    color: white;
                    text-decoration: none;
                }

                .nav-title {
                    margin-bottom: 15px;
                    text-align: center;
                    color: white;
                    font-size: 16px;
                    text-transform: uppercase;
                }

                .nav-link {
                    text-align: center;
                    margin-left: o;
                    padding-top: 0;
                    font-size: 14px;
                }
            }
        }

        .other-link {
            padding: 40px 0 0;
            flex-direction: column;

            .eth-link {
                display: block;
                text-align: center;
                width: 100%;
                margin-right: 12px;
                margin-bottom: 10px;

                img {
                    width: 182px;
                    height: 40px;
                }
            }

            .defi-link {
                display: block;
                text-align: center;
                width: 100%;
                img {
                    width: 114px;
                    height: 40px;
                }
            }

            .media-link {
                margin-top: 10px;
                margin-bottom: 10px;
                
                a {
                    margin: 10px;
                }

                img {
                    width: 30px;
                    height: 30px;
                }
            }

        }

    }
}
</style>