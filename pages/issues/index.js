/** @format */

const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    navBarItems: ["OPEN", "CLOSED"],
    activeIndex: 0,
    issueItems: [],
  },
  onLoad: function (query) {
    const { cellUrl } = query;
    const newUrl = cellUrl.replace("{/number}", "");
    console.log(newUrl, "cell1111");
    this.getIssueItems(newUrl);
  },
  getIssueItems(newUrl) {
    wx.request({
      url: newUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        this.setData({
          issueItems: res.data,
        });
        console.log(res.data);
      },
    });
  },
  OnActiveIndex(e) {
    console.log(e, "Index");
    this.setData({ activeIndex: e.detail });
  },
});
