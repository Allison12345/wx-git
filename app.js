/** @format */

const { AuthorizationKey, userKey } = require("./config/index");

App({
  onLaunch() {
    this.initAppState();
  },
  globalData: { Authorization: "" },
  userItems: "",
  myInfo: "",
  myInfoItems: "",
  publicRepoLits: "",
  initAppState() {
    try {
      const AuthorizationKeyValue = wx.getStorageSync(AuthorizationKey) || "";
      this.globalData.Authorization = AuthorizationKeyValue;
      console.log(userKeyValue);
      const userKeyValue = wx.getStorageSync(userKey) || "";
      this.userItems = userKeyValue;
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
      this.myInfo = {
        bio,
        email,
        blog,
        avatar_url,
        name,
        login,
      };
      this.myInfoItems = [
        { number: public_repos, label: "仓库", url: repos_url },
        { number: followers, label: "粉丝", url: followers_url },
        { number: following, label: "关注", url: following_url },
      ];
      this.publicRepoLits = {};
    } catch (e) {}
  },
});
