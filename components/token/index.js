/** @format */

Component({
  properties: {},
  methods: {
    onInput(e) {
      const { value } = e.detail;
      console.log(value, "11111");
      this.triggerEvent("onTokenInput", value);
    },
    onLoginTap() {
      this.triggerEvent("onLoginTap");
    },
  },
});
