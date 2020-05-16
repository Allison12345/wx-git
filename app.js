/** @format */

const { tokenKey, userKey } = require("./config/index");

App({
  onLaunch() {
    this.initAppState();
  },
  globalData: { token: "" },
  userItems: "",
  myInfo: "",
  myInfoItems: "",
  initAppState() {
    try {
      const tokenKeyValue = wx.getStorageSync(tokenKey) || "";
      this.globalData.token = tokenKeyValue;
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
        followers_url,
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
        { number: public_repos, label: "仓库" },
        { number: followers, label: "粉丝", url: followers_url },
        { number: following, label: "关注" },
      ];
    } catch (e) {}
  },
});
