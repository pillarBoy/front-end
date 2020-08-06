<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'DIN-B';
  src: url('./assets/font/DINBold.ttf'),
    url('./assets/font/DINBold.eot'),
    url('./assets/font/DINBold.woff'),
    url('./assets/font/DINBold.woff2');
}
@font-face {
  font-family: 'DIN-R';
  src: url('./assets/font/DINRegular.ttf'),
    url('./assets/font/DINRegular.eot'),
    url('./assets/font/DINRegular.woff'),
    url('./assets/font/DINRegular.woff2');
}

@font-face {
  font-family: 'DIN-M';
  src: url('./assets/font/DINMedium.ttf'),
    url('./assets/font/DINMedium.eot'),
    url('./assets/font/DINMedium.woff'),
    url('./assets/font/DINMedium.woff2');
}

body, html {
  padding: 0;
  margin: 0;
  min-width: 1300px;
  height: 100%;
}
h1, p {
  margin: 0;
}
#app {
  height: 100%;
}
</style>
