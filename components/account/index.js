/** @format */

Component({
  methods: {
    onUserNameInput(e) {
      const { value } = e.detail;
      this.triggerEvent("onUserNameInput", value);
    },
    onPassWordInput(e) {
      const { value } = e.detail;
      this.triggerEvent("onPassWordInput", value);
    },
    onLoginTap() {
      this.triggerEvent("onUserLoginTap");
    },
  },
});
