/** @format */

const appInstance = getApp();
Page({
  data: {
    token: "",
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
    const { public_repos } = appInstance.userItems || "";
    this.setData({
      token: appInstance.globalData.token,
    });
    this.getPublicRepoLits(public_repos, this.data.token);
  },
  getPublicRepoLits(public_repos, token) {
    const githup_url = "https://github.com";
    const language = "";
    const since = "daily";
    wx.request({
      url: `${githup_url}/events`,
      data: { since },
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: `token ${token}`,
      },
      success: (res) => {
        console.log(res.data, token, "res");
      },
    });
  },
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
