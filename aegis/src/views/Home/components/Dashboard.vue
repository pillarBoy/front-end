<template>
    <div class="dashboard">
        <ag-1200>
            <div class="flex flex-col bash-content">
                <h3>Dashboard  Example</h3>
                <img class="bash-img" src="../../../assets/imgs/dashboard.png" alt="">
            </div>
        </ag-1200>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">

.dashboard {
    padding-top: 240px;


    .bash-content {
        
        h3 {
            font-size:60px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(254,254,254,1);
            line-height:56px;
            text-align: center;
        }
        .bash-img {
            margin-top: 105px;
            width: 1200px;
        }
    }
}


@media screen and (max-width: 1199px) {
    .dashboard {
        padding-top: 24px;

        .bash-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            h3 {
                font-size: 35px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(254,254,254,1);
                line-height:56px;
                text-align: center;
            }
            .bash-img {
                margin-top: 30px;
                width: 90%;
            }
        }
    }
}

</style>