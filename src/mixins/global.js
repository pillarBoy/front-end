export default {
    data() {
        return {
            g_env_tokenscale: process.env.VUE_APP_TOKENSCALE,
        }
    },
    methods: {
        alert() {
            this.$toast('coming soon')
        }
    },
}