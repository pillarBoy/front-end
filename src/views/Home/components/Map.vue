<template>
    <div class="map-content">
        <h5>Roadmap of Aegis</h5>
        <ul class="middle-line">
            <li>
                <div class="inner-block">
                    <span class="rock"></span>
                    <div class="qs-div">
                        <h6>Q3 2021</h6>
                        <ul>
                            <li>Olitimization and imlirovements to asset management and trading olierations.</li>
                            <li>Cross-chain interolierability and integrations with other blockchains.</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li>
                <div class="inner-block">
                    <div class="qs-div">
                        <h6>Q2 2021</h6>
                        <ul>
                            <li>Launch of derivative products and derivatives trading platform.</li>
                        </ul>
                    </div>
                    <span class="circle"></span>
                </div>
            </li>
            <li>
                <div class="inner-block">
                    <div class="qs-div">
                        <h6>Q2 2021</h6>
                        <ul>
                            <li>Announcement of partnerships with licensed financial institutions.</li>
                            <li>Launch of unsecured lending services.</li>
                        </ul>
                    </div>
                    <span class="circle"></span>
                </div>
            </li>
            <li>
                <div class="inner-block">
                    <div class="qs-div">
                        <h6>Q2 2021</h6>
                        <ul class="font-16">
                            <li>AEGIS token listings on leading exchanges.</li>
                            <li>Launch of asset management dashboard and tools.</li>
                        </ul>
                    </div>
                    <span class="circle"></span>
                </div>
            </li>
            <li>
                <div class="inner-block">
                    <div class="qs-div">
                        <h6>Q2 2021</h6>
                        <ul class="font-16">
                            <li>Alpha protocol development. </li>
                            <li>Private token sale and IEO.</li>
                            <li>Launch of Aegis liquidity pools. </li>
                            <li>Launch of over-collateralized lending services. </li>
                        </ul>
                    </div>
                    <span class="circle"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .map-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        h5 {
            margin-top: 237px;
            font-size: 60px;
            text-align: center;
            color: #fff;
        }
        .middle-line {
            margin-top: 65px;
            padding-top: 78px;
            padding-left: 0;
            list-style: none;
            // width: 480px;
            width: 1200px;
            position: relative;
            &::before {
                position: absolute;
                content: "";
                width: 7px;
                height: 98%;
                left: 50%;
                transform: translate(-50%, 0);
                top: 0;
                background-color: #00FFF4;
            }
            &::after {
                position: absolute;
                content: "";
                left: 50%;
                top: -4px;
                transform: translate(-50%, 0);
                width: 32px;
                height: 16px;
                background: url('../../../assets/imgs/top.png') no-repeat;
                background-size: 32px 16px;
            }
            & >li {
                width: 100%;
                position: relative;
                &:nth-of-type(2n + 1) {
                    display: flex;
                    justify-content: flex-end;
                    .qs-div::before {
                        position: absolute;
                        content: "";
                        background: url('../../../assets/imgs/l.png') no-repeat;
                        width: 21px;
                        height: 40px;
                        background-size: 21px 40px;
                        left: -20px;
                        top: 25%;
                    }
                }
                &:nth-of-type(2n) {
                    display: flex;
                    justify-content: flex-start;
                    .qs-div::before {
                        position: absolute;
                        content: "";
                        background: url('../../../assets/imgs/r.png') no-repeat;
                        width: 21px;
                        height: 40px;
                        background-size: 21px 40px;
                        right: -20px;
                        top: 25%;
                    }
                }
                .inner-block {
                    display: flex;
                    flex-direction: row;
                    height: 200px;
                    box-sizing: border-box;
                    .rock {
                        position: absolute;
                        left: 50%;
                        top: 25%;
                        transform: translate(-50%, 0);
                        width: 54px;
                        height: 54px;
                        background: url('../../../assets/imgs/img1.png') no-repeat;
                        background-size: 54px;
                    }
                    .circle {
                        position: absolute;
                        left: 50%;
                        top: 25%;
                        transform: translate(-50%, 0);
                        width: 32px;
                        height: 32px;
                        background: url('../../../assets/imgs/img2.png') no-repeat;
                        background-size: 32px;
                    }
                    .qs-div {
                        width: 480px;
                        padding-left: 20px;
                        padding-right: 20px;
                        background: #11225A;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        color: #fff;
                        position: relative;
                        h6 {
                            font-size: 24px;
                            margin-bottom: 27px;
                        }
                        & > ul {
                            list-style: none;
                            &.font-16 li {
                                font-size: 16px;
                            }
                            li {
                                font-size: 18px;
                                position: relative;
                                &::before {
                                    position: absolute;
                                    content: "";
                                    width: 6px;
                                    height: 6px;
                                    border-radius: 3px;
                                    top: 8px;
                                    left: -40px;
                                    background-color: #fff;
                                }
                            }
                        }
                    }
                }

            }

        }
    }

@media screen and (max-width: 1199px) {
    $leftCir: 30px;

    .map-content {
        h5 {
            margin-top: 37px;
            font-size: 35px;
        }
        .middle-line {
            margin-top: 15px;
            padding-top: 28px;
            width: 100%;
            position: relative;
            &::before {
                position: absolute;
                content: "";
                width: 2px;
                height: 98%;
                left: $leftCir;
                top: 0;
                background-color: #00FFF4;
            }
            &::after {
                position: absolute;
                content: "";
                left: $leftCir;
                top: -4px;
                width: 8px;
                height: 4px;
                background: url('../../../assets/imgs/top.png') no-repeat;
                background-size: 8px 4px;
            }

            & >li {
                margin-bottom: 10px;
                width: 100%;
                position: relative;
                display: flex;
                justify-content: flex-end;
                &:nth-of-type(2n) {
                    justify-content: flex-end;
                }
                .inner-block {
                    width: 80%;
                    display: flex;
                    flex-direction: row;
                    height: 200px;
                    box-sizing: border-box;
                    .rock {
                        position: absolute;
                        left: $leftCir;
                        top: 28%;
                        width: 20px;
                        height: 20px;
                        background: url('../../../assets/imgs/img1.png') no-repeat;
                        background-size: 20px;
                    }
                    .circle {
                        position: absolute;
                        left: $leftCir;
                        top: 30%;
                        width: 18px;
                        height: 18px;
                        background: url('../../../assets/imgs/img2.png') no-repeat;
                        background-size: 18px;
                    }
                    .qs-div {
                        margin-right: 10px;
                        padding-left: 20px;
                        padding-right: 20px;
                        height: 180px;
                        background: #11225A;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        color: #fff;
                        position: relative;
                        &::before {
                            position: absolute;
                            content: "";
                            background: url('../../../assets/imgs/l.png') no-repeat;
                            width: 21px;
                            height: 40px;
                            background-size: 21px 40px;
                            left: -20px;
                            top: 28%;
                        }
                        h6 {
                            font-size: 24px;
                            margin-bottom: 10px;
                        }
                        & > ul {
                            &.font-16 li {
                                font-size: 12px;
                            }
                            li {
                                margin-bottom: 10px;
                                font-size: 12px;
                                line-height: 1.4;
                            }
                        }
                    }
                }

            }

        }
    }
}
</style>
