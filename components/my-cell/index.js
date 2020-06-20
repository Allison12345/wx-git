/** @format */

Component({
  properties: {
    hd: String,
    bd: String,
    ft: String,
    path: String,
    isLink: Boolean,
    url: String,
    from: String,
  },
  options: {
    multipleSlots: true,
  },
  methods: {
    onRouteTap() {
      const { path, url, from } = this.properties;
      wx.navigateTo({
        url: `${path}?cellUrl=${url}&from=${from}`,
      });
    },
  },
});
