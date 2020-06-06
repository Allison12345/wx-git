/** @format */

const { baseUrl, AuthorizationKey, userKey } = require("../../config/index");
const { base64_encode } = require("./base64");
Page({
  data: {
    token: "",
    username: "",
    password: "",
    activeIndex: 1,
    img:
      "https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/wx-git/githup.png?sign=81c8fc19a2bc5dc28bc501066088800e&t=1588833622",
  },
  onloginWayChange() {
    if (this.data.activeIndex === 0) {
      this.setData({ activeIndex: 1 });
    } else {
      this.setData({ activeIndex: 0 });
    }
  },
  onTokenInput(e) {
    this.setData({ token: e.detail });
  },
  onUserNameInput(e) {
    this.setData({ username: e.detail });
  },
  onPassWordInput(e) {
    this.setData({ password: e.detail });
  },
  onLoginTap() {
    const { token, username, password, activeIndex } = this.data;
    let Authorization = "";
    if (activeIndex === 0) {
      Authorization = "Basic " + base64_encode(username + ":" + password);
    } else {
      Authorization = `token ${token}`;
    }
    if (Authorization) {
      wx.request({
        url: `${baseUrl}/user`,
        method: "GET",
        header: {
          "content-type": "application/json",
          Authorization,
        },
        success: (res) => {
          if (res.statusCode === 200) {
            console.log(res, "1");
            try {
              wx.setStorageSync(AuthorizationKey, Authorization);
              wx.setStorageSync(userKey, res);
            } catch (e) {}
            const appInstance = getApp();
            appInstance.initAppState();
            wx.reLaunch({ url: "/pages/me/index" });
          }
        },
        fail: (error) => {
          console.log(error);
        },
      });
    } else {
      wx.showToast({ title: "请输入token", icon: "none" });
    }
  },
});
