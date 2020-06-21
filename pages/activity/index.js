/** @format */
const {
  baseUrl,
  activityListsKey,
  languagesKey,
} = require("../../config/index");
const appInstance = getApp();
Page({
  data: {
    labelList: ["仓库", "用户"],
    activityLists: "",
    per_page: 20,
    page: 1,
    isRefresh: false,
    pickerList: [],
    pickerIndex: [1, 1],
  },
  onLoad() {
    this.getPublicRepoLits();
  },
  onShow() {
    this.initPickerList();
  },
  initPickerList() {
    const languagesChooseItems = wx.getStorageSync(languagesKey) || [];
    this.setData({
      pickerList: [["week", "month", "year"], languagesChooseItems],
    });
    console.log("languagesChooseItems", languagesChooseItems);
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
            this.setData({ activityLists: res.data, isRefresh: false });
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
  onPullDown: function () {
    this.setData({ page: 1, isRefresh: true });
    console.log("onPullDownRefresh");
    this.getPublicRepoLits();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onBottom: function () {
    this.setData({ page: this.data.page + 1 });
    console.log("onReachBottom");
    this.getPublicRepoLits();
  },
});
