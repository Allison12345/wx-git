/** @format */

const appInstance = getApp();
const { token } = appInstance.globalData;
Page({
  data: {
    followItems: [],
  },
  onLoad: function (query) {
    const { itemUrl } = query;
    this.getFollowData(itemUrl);
  },
  getFollowData(itemUrl) {
    wx.request({
      url: itemUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: `token ${token}`,
      },
      success: (res) => {
        this.setData({ followItems: res.data });
        console.log(this.data.followItems);
      },
    });
  },
});
