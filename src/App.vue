<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">

  html,body {
    font-family: PingFang SC, Helvetica, "微软雅黑";
    font-size: 12px;
  }

  body {
    background-color: #0A1538;
  }

  a {
    cursor: pointer;
  }

  @media screen and (max-width: 1199px) {
    .br-1200 {
      display: none;
    }
  }
</style>
