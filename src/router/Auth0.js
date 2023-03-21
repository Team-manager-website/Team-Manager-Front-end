export default {
    data: function () {
      return {
        user: this.$auth0.user
      };
    },
    methods: {
      login() {
        this.$auth0.loginWithPopup();
      },
      logout() {
        this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
      }
    }
  };