/** @format */

const { AuthorizationKey } = require("../../config/index");
Page({
  data: {
    cellUrl: "",
  },
  onLoad: function (query) {
    const { cellUrl } = query;
    this.setData({ cellUrl });
  },
  onTap() {
    wx.setStorageSync(AuthorizationKey, "");
    wx.navigateTo({ url: "/pages/login/index" });
  },
});
