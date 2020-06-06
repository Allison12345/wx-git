/** @format */

const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    followItems: [],
  },
  onLoad: function (query) {
    const { itemUrl } = query;
    this.fixItemUrl(itemUrl);
  },
  fixItemUrl(itemUrl) {
    const newUrl = itemUrl.replace("{/other_user}", "");
    this.getFollowData(newUrl);
  },
  getFollowData(newUrl) {
    wx.request({
      url: newUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        this.setData({ followItems: res.data });
        console.log(this.data.followItems);
      },
    });
  },
});
