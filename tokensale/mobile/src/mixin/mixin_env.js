const envMixin = {
  data: () => {
    return {
      mixinUrl: null
    }
  },
  mounted () {
    this.mixinUrl = process.env.VUE_APP_URL;
  }
};

export default envMixin;
