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
    const { html_url } = userItems.data;
    this.getUserItems(myInfo.login);
    this.setData({
      Authorization: appInstance.globalData.Authorization,
      info: { ...myInfo },
      InfoItems: [...meInfoItems],
      items: [
        [{ label: "关注 vue-git ♥️" }],
        [
          {
            label: "已关注",
            isLink: true,
          },
          { label: "问题", isLink: true, path: "/issues" },
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
      url: `${baseUrl}/users/${url}`,
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
