export default {
  nitro: {
    preset: 'vercel-edge',
  },
  head() {
    return {
      script: [
        {
          src: "https://cdn-cookieyes.com/client_data/e22d63ca33a2ba42e27d4c88/script.js"
        }
      ]
    }
  }
};
