/** @format */

const {
  AuthorizationKey,
  userKey,
  activityListsKey,
  repoListsKey,
} = require("./config/index");

App({
  onLaunch() {
    this.initAppState();
  },
  globalData: { Authorization: "" },
  userItems: "",
  myInfo: "",
  meInfoItems: "",
  activityLists: "",
  repoLists: "",
  repoInfoItems: "",
  repoItems: "",
  initAppState() {
    try {
      const AuthorizationKeyValue = wx.getStorageSync(AuthorizationKey) || "";
      this.globalData.Authorization = AuthorizationKeyValue;
      console.log(userKeyValue);
      const userKeyValue = wx.getStorageSync(userKey) || "";
      this.userItems = userKeyValue;
      const activityListsValue = wx.getStorageSync(activityListsKey) || "";
      this.activityLists = activityListsValue.data;
      const repoListsValue = wx.getStorageSync(repoListsKey) || "";
      this.repoLists = repoListsValue;
      console.log(repoListsValue, "repoxd");
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
      } = userKeyValue.data;
      const {
        watchers_count,
        forks,
        default_branch,
        branches_url,
        license,
        issues_url,
        events_url,
        collaborators_url,
      } = repoListsValue.data;
      this.myInfo = {
        bio,
        email,
        blog,
        avatar_url,
        name,
        login,
      };
      this.meInfoItems = [
        { number: public_repos, label: "仓库", url: repos_url },
        { number: followers, label: "粉丝", url: followers_url },
        { number: following, label: "关注", url: following_url },
      ];
      this.repoInfoItems = [
        { number: watchers_count, label: "游览" },
        { number: forks, label: "fork" },
        { icon: forks, label: "share" },
      ];
      this.repoItems = [
        [
          {
            label: "作者",
            key: repoListsValue.data.user.login,
            url: repoListsValue.data.user.avatar_url,
            isLink: true,
          },
          { label: "视图代码", isLink: true },
          { label: "分支", key: default_branch, url: branches_url },
          { label: "许可证", key: license },
        ],
        [
          { label: "问题", isLink: true, url: issues_url },
          { label: "事件", isLink: true, url: events_url },
          { label: "所在地", isLink: true, url: collaborators_url },
        ],
      ];
    } catch (e) {}
  },
});
