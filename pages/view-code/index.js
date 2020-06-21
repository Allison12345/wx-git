/** @format */
const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    codeFiles: [],
  },
  onLoad: function (query) {
    const { cellUrl } = query;
    this.fixUrl(cellUrl);
  },
  fixUrl(cellUrl) {
    const newUrl = cellUrl.replace("/{+path}", "");
    console.log(newUrl);
    this.getViewCodeItems(newUrl);
  },
  getViewCodeItems(newUrl) {
    wx.request({
      url: newUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        const codeFiles = res.data;
        this.setData({ codeFiles });
      },
    });
  },
  onTap(e) {
    wx.navigateTo({ url: `/pages/view-code/index?cellUrl=${e.detail}` });
  },
});
