/** @format */

const appInstance = getApp();

Page({
  data: {
    token: "",
    info: "",
    infoItems: "",
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
    this.getUserItems(
      "https://api.github.com/users/Allison12345",
      this.data.token
    );
    const { myInfo, myInfoItems } = appInstance;
    this.setData({
      token: appInstance.globalData.token,
      info: { ...myInfo },
      infoItems: [...myInfoItems],
    });
  },
  getUserItems(userUrl, token) {
    wx.request({
      url: userUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization: `token ${token}`,
      },
      success: (res) => {},
    });
  },
  onRouteTap(path) {
    console.log(path);
  },
});
