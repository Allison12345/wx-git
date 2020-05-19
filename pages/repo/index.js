/** @format */

const appInstance = getApp();
const { token } = appInstance.globalData;
Page({
  data: {
    repoItems: [],
  },
  onLoad: function (query) {
    const { itemUrl } = query;
    console.log(itemUrl);
    this.getRepoData(itemUrl);
  },
  getRepoData(itemUrl) {
    wx.request({
      url: itemUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: `token ${token}`,
      },
      success: (res) => {
        const repoUrl = res.data.url;
        this.getRepoUrlData(repoUrl);
      },
    });
  },
  getRepoUrlData(repoUrl) {
    wx.request({
      url: repoUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: `token ${token}`,
      },
      success: (res) => {
        this.setData({ repoItems: res.data });
      },
    });
  },
});
