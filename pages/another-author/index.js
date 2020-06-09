/** @format */
const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    Authorization,
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
    ],
  },
  onLoad(query) {
    const { cellUrl } = query;
    this.getUserItems(cellUrl);
    console.log(cellUrl, "22222");
  },
  getUserItems(cellUrl) {
    wx.request({
      url: cellUrl + "?v=4",
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        const {
          bio,
          public_repos,
          followers,
          following,
          email,
          blog,
          avatar_url,
          name,
          login,
          repos_url,
          followers_url,
          following_url,
        } = res.data;
        this.setData({
          info: {
            bio,
            email,
            blog,
            avatar_url,
            name,
            login,
          },
          InfoItems: [
            { number: public_repos, label: "仓库", url: repos_url },
            { number: followers, label: "粉丝", url: followers_url },
            { number: following, label: "关注", url: following_url },
          ],
        });
      },
    });
  },
  onRouteTap(path) {},
});
