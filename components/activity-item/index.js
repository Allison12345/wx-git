/** @format */
const { repoListsKey } = require("../../config/index");
const appInstance = getApp();
Component({
  properties: {
    img: String,
    user: String,
    repo: String,
    repoUrl: String,
    date: String,
  },
  data: {
    language: "",
    description: "",
    forks: "",
  },
  lifetimes: {
    attached: function () {
      this.getRepoList();
    },
  },
  methods: {
    getRepoList() {
      const { Authorization } = appInstance.globalData;
      wx.request({
        url: this.properties.repoUrl,
        method: "GET",
        header: {
          "content-type": "application/json",
          Authorization,
        },
        success: (res) => {
          if (res.statusCode === 200) {
            wx.setStorageSync(repoListsKey, res.data);
            const { language, description, forks } = appInstance.repoLists;
            this.setData({
              language,
              description,
              forks,
            });
            console.log(res.data, "repo");
          }
        },
      });
    },
    onRepoTap() {
      wx.navigateTo({ url: "/pages/repo/index" });
    },
  },
});
