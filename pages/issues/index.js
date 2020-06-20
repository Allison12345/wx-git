/** @format */

const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    navBarItems: ["OPEN", "CLOSED"],
    activeIndex: 0,
    issueItems: [],
    openItems: [],
    closeItems: [],
  },
  onLoad: function (query) {
    const { cellUrl, from } = query;
    this.chooseUrl(cellUrl, from);
  },
  chooseUrl(url, from) {
    if (from == "me") {
      this.getRepoList(url);
    } else if (from == "repo") {
      this.fixString(url);
    }
  },
  fixString(url) {
    const newUrl = url.replace("{/number}", "");
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
        const issueItems = res.data;
        const newIssueItems = this.data.issueItems.concat(issueItems);
        this.setData({
          issueItems: newIssueItems,
        });
        this.filferItems(newIssueItems);
      },
    });
  },
  getRepoList(repos_url) {
    wx.request({
      url: repos_url,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: appInstance.globalData.Authorization,
      },
      success: (res) => {
        for (var i = 0; i < res.data.length; i++) {
          this.fixString(res.data[i].issues_url);
        }
      },
    });
  },
  filferItems(items) {
    const openItems = items.filter((item) => item.state == "open");
    const closeItems = items.filter((item) => item.state == "closed");
    this.setData({ openItems, closeItems });
  },
  OnActiveIndex(e) {
    this.setData({ activeIndex: e.detail });
  },
});
