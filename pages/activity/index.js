/** @format */
const { baseUrl, activityListsKey } = require("../../config/index");
const appInstance = getApp();
Page({
  data: {
    labelList: ["仓库", "用户"],
    activityLists: "",
    per_page: 20,
    page: 1,
    pickerList: [
      ["Today", "Week", "Month"],
      ["All", "HTML", "JavaScript"],
    ],
    pickerIndex: [1, 1],
  },
  onLoad() {
    this.getPublicRepoLits();
  },
  getPublicRepoLits() {
    const { Authorization } = appInstance.globalData;
    wx.request({
      url: `${baseUrl}/events`,
      data: { per_page: this.data.per_page, page: this.data.page },
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          try {
            wx.setStorageSync(activityListsKey, res);
            this.setData({ activityLists: res.data });
          } catch (e) {}
        }
      },
    });
  },
  //${githup_url}/users/${appInstance.myInfo.login}/received_events
  onLanguageTap() {
    wx.navigateTo({ url: "/pages/languages/index" });
  },
  onSearchTap() {
    wx.navigateTo({ url: "/pages/search/index" });
  },
  onPickerChange(e) {
    this.setData({ pickerIndex: e.detail.value });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    const { per_page, page } = this.data;
    new_page = per_page + 20;
    new_page = page + 1;
    this.setData({ per_page: new_page, page: new_page });
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const { per_page } = this.data;
    new_page = per_page + 20;
    this.setData({ per_page: new_page });
  },
});
