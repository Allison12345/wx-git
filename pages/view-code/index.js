/** @format */
const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    codeFiles: Array(20)
      .fill(0)
      .map((_, index) => ({
        label: String.fromCodePoint(parseInt(index + 65, 10)),
        children: Math.random() > 0.5,
      })),
  },
  onLoad: function (query) {
    const { cellUrl } = query;
    this.fixUrl(cellUrl);
  },
  fixUrl(cellUrl) {
    const newUrl = cellUrl.replace("/{archive_format}{/ref}", "");
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
        console.log(res.data);
      },
    });
  },
});
