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
        this.setData({ repoItems: res.data });
      },
    });
  },
});
//264bdab38bd5b721f4a9724c8af9a70224b481e2
