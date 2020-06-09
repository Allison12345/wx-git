/** @format */

Component({
  properties: {
    hd: String,
    bd: String,
    ft: String,
    path: String,
    isLink: Boolean,
    url: String,
  },
  options: {
    multipleSlots: true,
  },
  methods: {
    onRouteTap() {
      const { path, url } = this.properties;
      wx.navigateTo({
        url: `${path}?cellUrl=${url}`,
      });
    },
  },
});
