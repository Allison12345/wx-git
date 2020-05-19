/** @format */
Component({
  properties: {
    number: Number,
    label: String,
    index: Number,
    url: String,
  },
  methods: {
    onTap() {
      const itemIndex = this.properties.index;
      const itemUrl = this.properties.url;
      if (itemIndex !== 0) {
        wx.navigateTo({ url: `/pages/follow/index?itemUrl=${itemUrl}` });
      } else {
        wx.navigateTo({ url: `=${itemUrl}` });
      }
    },
  },
});
