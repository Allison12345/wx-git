/** @format */
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
            const { language, description, forks } = res.data;
            this.setData({
              language,
              description,
              forks,
            });
          }
        },
      });
    },
    onRepoTap() {
      const repoUrl = this.properties.repoUrl;
      wx.navigateTo({ url: `/pages/repo/index?repoUrl=${repoUrl}` });
    },
  },
});
