/** @format */

const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    repoItems: [],
  },
  onLoad: function (query) {
    const { itemUrl } = query;
    console.log(itemUrl, "11111");
    this.getRepoData(itemUrl);
  },
  getRepoData(itemUrl) {
    wx.request({
      url: itemUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        console.log(res.data);
        this.setData({ repoItems: res.data });
      },
    });
  },
});
