/** @format */

const appInstance = getApp();
const { token } = appInstance.globalData;
Page({
  data: {
    followItems: [],
  },
  onLoad: function (query) {
    const { itemUrl } = query;
    this.fixItemUrl(itemUrl);
  },
  fixItemUrl(itemUrl) {
    const newUrl = itemUrl.split("{/other_user}").join("");
    this.getFollowData(newUrl);
  },
  getFollowData(newUrl) {
    wx.request({
      url: newUrl,
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
