/** @format */
const { baseUrl } = require("../../config/index");
const appInstance = getApp();

Page({
  data: {
    Authorization: "",
    info: "",
    InfoItems: "",
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
        { label: "关于", isLink: true, path: "/about" },
      ],
    ],
  },
  onLoad() {
    const { data } = appInstance.userItems || {};
    console.log(data, "sdjhf");
    const { myInfo, meInfoItems } = appInstance;
    this.getUserItems(myInfo.login);
    this.setData({
      Authorization: appInstance.globalData.Authorization,
      info: { ...myInfo },
      InfoItems: [...meInfoItems],
    });
    console.log(this.data.InfoItems, "111111");
  },
  getUserItems(username) {
    wx.request({
      url: `${baseUrl}/users/${username}`,
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
