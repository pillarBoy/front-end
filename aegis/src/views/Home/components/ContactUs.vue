<template>
    <div class="contact-us-content">
        <h5>Contact Us</h5>
        <p>
            If you’d like to reach out to the Aegis team in any way ,
            <br> please get in touch with us via the following email.
        </p>
        <div class="contact-email"><a href="mailto:AegisDeFi@gmail.com" target="_blank">AegisDeFi@gmail.com</a></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .contact-us-content {
        padding-top: 200px;
        height: 720px;
       
        background: url('../../../assets/imgs/contactus-bg.png') no-repeat  center center;
        background-size: cover;

        text-align: center;
        color: white;

        h5 {
           
            font-size: 60px;
            font-family: PingFang SC;
            font-weight:500;
            color:white;
            line-height: 45px;
        }

        p {
            margin-top: 40px;
            font-size: 24px;
            line-height: 1.8;
        }

        .contact-email {
            margin: 49px auto 0;
            width:820px;
            height:106px;
            background:rgba(17,34,90,1);
            line-height: 106px;
            font-size: 42px;
            font-weight: 500;

            a {
                font-family: Helvetica, sans-serif;
                color: white;
                text-decoration: none;
            }
        }
    }

@media screen and (max-width: 1199px) {
    .contact-us-content {
        padding-top: 50px;
        height: 720px;
       
        background: url('../../../assets/imgs/contactus-bg.png') no-repeat  center center;
        background-size: cover;

        text-align: center;
        color: white;

        h5 {
            font-size: 35px;
            font-family: PingFang SC;
            font-weight:500;
            color:white;
            line-height: 45px;
        }

        p {
            margin-top: 40px;
            font-size: 18px;
            line-height: 1.8;
        }

        .contact-email {
            margin: 49px auto 0;
            width: 80%;
            height:106px;
            background:rgba(17,34,90,1);
            line-height: 106px;
            font-size: 22px;
            font-weight: 500;
            a {
                font-family: Helvetica, sans-serif;
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>