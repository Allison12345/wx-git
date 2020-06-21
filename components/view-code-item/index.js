/** @format */

// components/view-code-item/index.js
Component({
  properties: {
    label: String,
    url: String,
    isLink: Boolean,
  },
  data: {
    icon: "",
  },
  lifetimes: {
    attached() {
      this.initIcon();
    },
  },
  methods: {
    onTap() {
      const { url, isLink } = this.properties;
      if (isLink) {
        this.triggerEvent("tap", url);
      }
    },
    initIcon() {
      this.setData({
        icon: this.properties.isLink ? "folder-outline" : "file-outline",
      });
    },
  },
});
