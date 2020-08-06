<template>
    <div class="team-members">
        <h5>Team Members</h5>
        <ag-1200>
            <div class="flex-between team-list">
                <div class="team-item">
                    <div class="flex-align-center flex-col team-content">
                        <img src="../../../assets/imgs/member-1.png" alt="">
                        <div class="mem-name">Daniel Yeo</div>
                        <div class="mem-title">Co-founder & CEO</div>
                        <div class="mem-intro mem-intro-1">
                            Daniel has 32-years of experience in the finan-<br>cial prime brokerage business working with Wall Street establishments like Merrill Lynch, Lehman Brothers, Goldman Sachs, Audrey Lanston,<br> Credit Suisse and Cargill.
                        </div>
                        <br>
                        <div class="mem-intro mem-intro-2">
                            The range of products across these institutions cover Global Stocks, Futures & Options, ETFs, Cash Bonds and Foreign Exchange, engaging a range of quality clients comprising corporations, hedge funds and financial institutions.
                        </div>
                        <br>
                        <div class="mem-intro mem-intro-2">
                            He had worked in this licensed career in geog-<br>raphies that spanned across Singapore, Japan,<br> the US and Hong Kong.
                        </div>
                    </div>
                </div>
                <div class="team-item">
                    <div class="flex-align-center flex-col team-content">
                        <img src="../../../assets/imgs/denis-z.png" alt="">
                        <div class="mem-name">Denis Znamenskiy</div>
                        <div class="mem-title">CTO</div>
                        <div class="mem-intro mem-intro-1">
                            SPAC professional, Denis participate as speaker <br>at international blockchain events, advising fintech companies (Algochain, PrismCoin, Bibox, Index-<br>Chain). 
                        </div>
                        <br>
                        <div class="mem-intro">
                            Denis demonstrated skills in management of quan-<br>titative teams, hedge fund and startups. 
                        </div>
                        <br>
                        <div class="mem-intro">
                            Denis possesses strong theoretical and practical understanding of blockchain technology, capital markets, mathematical expertise in numerical methods, and strong analytical capacities. 
                        </div>
                    </div>
                </div>
                <div class="team-item">
                    <div class="flex-align-center flex-col team-content">
                        <img src="../../../assets/imgs/vijay-v.png" alt="">
                        <div class="mem-name">Vijay Vekariya</div>
                        <div class="mem-title">Back-end Engineer</div>
                        <div class="mem-intro mem-intro-1">
                            Vijay is a Blockchain technical veteran and Crypto Analyst specilzied in back-end engineering. 
                        </div>
                        <br>
                        <div  class="mem-intro mem-intro-1">He has 3 years working experience in Blockchain projects and database administration.</div>
                    </div>
                </div>
            </div>
            <!-- <div class="team-page flex-center-center">
                 <img src="../../../assets/imgs/tri-left.png" alt="">
                <img src="../../../assets/imgs/tri-right.png" alt=""> 
            </div> -->
        </ag-1200>
    </div>
</template>

<script>

    export default {
    }
</script>

<style lang="scss">
.team-members {
    // padding-top: 238px;

    &>h5  {
        margin: 238px 0 80px;
        text-align: center;
        font-size:60px;
        font-family:Helvetica;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:45px;
    }

    .team-list {
        padding-bottom: 48px;

        .team-item  {
            padding-top: 64px;
            color: white;
            font-family: Helvetica;

            .mem-name {
                margin: 25px 0 13px;
                font-size: 20px;
                font-weight: 400;
                height: 15px;
                line-height: 15px;
            }
            .mem-title {
                margin-bottom: 25px;
                font-size: 16px;
                font-weight: 400;
                height: 13px;
                line-height: 13px;
            }

            .mem-intro {
                width: 100%;
                font-size: 14px;
                padding: 0 20px;
                line-height: 1.8;
            }
        }

        .team-content {
            width:360px;
            min-height:500px;
            height: 534px;
            background:rgba(17,34,90,1);
            border-radius:10px;

            img {
                margin-top: -64px;
                width: 130px;
            }
        }
    }

    .team-page {
        padding: 36px 0 0;
        height: 60px;

        img {
            margin: 0 12px;
            width: 60px;
        }
    }

}
</style>