/** @format */
const { baseUrl } = require("../../config/index");
const appInstance = getApp();
Page({
  data: {
    labelList: ["仓库", "用户"],
    activityLists: new Array(14).fill(0).map(() => ({
      img:
        "https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/C61D75E3-88C4-4182-B6E9-3EF575BC7D67.jpeg?sign=8566a6e0dae7ada7d63c96ef1090bc12&t=1584770809",
      user: "Allison",
      activity:
        Math.random() > 0.5
          ? "created"
          : "created created created created created created",
      repo: "vue-git",
      date: "5 dags ago",
    })),
    userLists: new Array(14).fill(0).map(() => ({
      img:
        "https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/C61D75E3-88C4-4182-B6E9-3EF575BC7D67.jpeg?sign=8566a6e0dae7ada7d63c96ef1090bc12&t=1584770809",
      author: "Allison",
      name: "vue-git",
      desc: "kjdfhk",
    })),
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
    const per_page = 20;
    const page = 1;
    const { Authorization } = appInstance.globalData;
    wx.request({
      url: `${baseUrl}/events`,
      data: { per_page, page },
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        console.log(res, "res");
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
    console.log(e);
    this.setData({ pickerIndex: e.detail.value });
  },
});
