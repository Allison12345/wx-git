/** @format */
const { baseUrl } = require("../../config/index");
const appInstance = getApp();

Page({
  data: {
    Authorization: "",
    info: "",
    InfoItems: "",
    items: [],
  },
  onLoad(query) {
    const { data } = appInstance.userItems || {};
    console.log(data, "sdjhf");
    const { userItems, myInfo, meInfoItems } = appInstance;
    const { html_url, starred_url, repos_url } = userItems.data;
    this.getUserItems();
    this.setData({
      Authorization: appInstance.globalData.Authorization,
      info: { ...myInfo },
      InfoItems: [...meInfoItems],
      items: [
        [
          {
            label: "关注的库",
            isLink: true,
            url: starred_url,
            path: "",
          },
          {
            label: "问题",
            isLink: true,
            url: repos_url,
            path: "/pages/issues/index",
          },
        ],
        [
          { label: "邮箱", key: "email" },
          { label: "博客", key: "blog" },
          { label: "公司", key: "company" },
          { label: "所在地", key: "location" },
        ],
        [
          { label: "反馈", isLink: true },
          {
            label: "关于",
            isLink: true,
            path: "/pages/about/index",
            url: html_url,
          },
        ],
      ],
    });
  },
  getUserItems(url) {
    wx.request({
      url: url,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: appInstance.globalData.Authorization,
      },
      success: (res) => {},
    });
  },
  onRouteTap(path) {},
});
