/** @format */

const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    name: "",
    description: "",
    info: {},
    repoInfoItems: [],
    repoItems: [],
  },
  onLoad: function (query) {
    const { repoUrl } = query;
    this.getRepoList(repoUrl);
  },
  getRepoList(repoUrl) {
    wx.request({
      url: repoUrl,
      method: "GET",
      header: {
        "content-type": "application/json",
        Authorization,
      },
      success: (res) => {
        if (res.statusCode === 200) {
          const {
            name,
            description,
            watchers_count,
            forks,
            default_branch,
            branches_url,
            license,
            issues_url,
            events_url,
            collaborators_url,
          } = res.data;
          const { login, avatar_url } = res.data.owner;
          this.setData({
            name: name,
            description: description,
            info: { login, default_branch },
            repoInfoItems: [
              { number: watchers_count, label: "游览" },
              { number: forks, label: "fork" },
              { icon: forks, label: "share" },
            ],
            repoItems: [
              [
                {
                  label: "作者",
                  path: "/pages/another-author/index",
                  url: avatar_url,
                  isLink: true,
                },
                { label: "视图代码", isLink: true },
                { label: "分支", key: default_branch, url: branches_url },
                { label: "许可证", key: license },
              ],
              [
                {
                  label: "问题",
                  isLink: true,
                  url: issues_url,
                  path: "/pages/issues/index",
                },
                { label: "事件", isLink: true, url: events_url },
                { label: "所在地", isLink: true, url: collaborators_url },
              ],
            ],
          });
          console.log(res.data, "activity-repo");
        }
      },
    });
  },
});
