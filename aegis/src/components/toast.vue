<template lang="html">
  <div v-if="isShowToast" class="toast-container" @touchmove.prevent>
    <!-- 这里content为双花括号 -->
    <span class="toast-msg">{{content}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowToast: true,
      content: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toast-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.1);
}
.toast-msg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100px;
    color: #fff;
    text-align: center;
    padding: 25px 50px;
    background: rgba(0, 0, 0, .8);
    transform: translate(-50%, -50%);
    border-radius: 10px;
    font-size: 30px;
}
</style>