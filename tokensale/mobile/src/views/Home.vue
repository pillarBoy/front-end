<template>
  <div class="home">
    <div class="logo">
      <a :href="$data.mixinUrl">
        <img src="../assets/logo.png" alt="">
      </a>
    </div>
    <h1>Tokensale Guideline</h1>
    <div class="pop-div">
      <span class="number_font number-one"></span>
      <p class="margin-bot">First you will need to connect your ERC20 <br/> wallet such as Metamask or imToken</p>
      <p class="blue">Note: NO exchange wallet address</p>
    </div>

    <div class="pop-div">
      <span class="number_font_left number-two"></span>
      <p>Deposit USDT in your ERC20 wallet</p>
    </div>

    <div class="pop-div">
      <span class="number_font number-three"></span>
      <p>Make USDT transfers into Aegis official wallet address: </p>
      <div class="p-between">
        <p class="blue">0x5A4F20255487B433B31A303e5F<br/>D8BA499917eD45 </p>
        <i class="copy" ref="copy" @click="showModel" :data-clipboard-text="url">Copy</i>
      </div>
    </div>

    <div class="pop-div">
      <span class="number_font_left number-four"></span>
      <p>Within 15 days, we will transfer AGS tokens <br/> by the proportion of USDT:AGS = 1:0.6 into <br/> your wallet address</p>
    </div>
    <footer>
      <p class="footer">Please make sure that you wallet supports</p>
      <p class="footer">all ERC20 tokens</p>
    </footer>

    <!-- toast -->
    <div class="toast" v-show="show">
      {{msg}}
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard';
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      url: '0x5A4F20255487B433B31A303e5FD8BA499917eD45',
      msg: '',
      show: false,
      timeId: null
    }
  },
  mounted () {
    const clipboard = new ClipboardJS(this.$refs.copy);
    clipboard.on('success', () => {
      // alert('success')
      this.msg = 'Success';
    })
    clipboard.on('error', () => {
      // alert('error')
      this.msg = 'Error';
    })
  },
  methods: {
    showModel () {
      if (!this.timeId) {
        this.show = true;
        this.timeId = setTimeout(() => {
          this.show = false;
          clearTimeout(this.timeId);
          this.timeId = null;
        }, 1500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 0 50px;
    height: 100%;
    background: url('../assets/bcg.png') no-repeat top left;
    background-size: cover;
  }
  .logo {
    width: 100%;
    display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 177px;
    img {
      margin-top: 40px;
      margin-bottom: 89px;
      height: 48px;
    }
  }
  h1 {
    font-weight: 500;
    color: #05DCFB;
    font-size: 60px;
    text-align: center;
    font-family: 'DIN-M';
    padding-bottom: 50px;
  }
  .pop-div {
    margin-top: 70px;
    position: relative;
    padding: 40px 0 40px 23px;
    width: 100%;
    border-radius:40px 0px 40px 0px;
    background: rgba(70,142,198, .15);
    z-index: 2;
  }
  .number_font {
    z-index: 3;
    position: absolute;
    width: 100px;
    height: 46px;
    top: -46px;
    left: 22px;
    &.number-one {
      background: url('../assets/01.png') no-repeat;
      background-size: cover;
    }
    &.number-three {
      background: url('../assets/03.png') no-repeat;
      background-size: cover;
    }
  }
  .number_font_left {
    z-index: 3;
    position: absolute;
    width: 100px;
    height: 46px;
    top: -46px;
    right: 22px;
    &.number-two {
      background: url('../assets/02.png') no-repeat;
      background-size: cover;
    }
    &.number-four {
      background: url('../assets/04.png') no-repeat;
      background-size: cover;
    }
  }
  p {
    color: #fff;
    font-size: 30px;
    font-family: 'DIN-R';
    &.margin-bot {
      margin-bottom: 33px;
    }
    &.blue {
      color: #05DCFB;
    }
  }
  .p-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    .copy {
      margin-right: 15px;
      color: #0b1639;
      font-size: 24px;
      height: 46px;
      line-height: 46px;
      width: 100px;
      text-align: center;
      font-style: normal;
      background: #05DCFB;
      border-radius: 24px;
    }
  }
  footer {
    padding: 45px 0 48px 0;
    width: 100%;
  }
  .footer {
    text-align: center;
    font-size: 24px;
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
  .toast {
    z-index: 999;
    position: fixed;
    min-width: 100px;
    color: #fff;
    text-align: center;
    padding: 25px 50px;
    top: 50%;
    left: 50%;
    background: rgba(0, 0, 0, .8);
    transform: translate(-50%, -50%);
    border-radius: 10px;
    font-size: 30px;
  }
</style>
