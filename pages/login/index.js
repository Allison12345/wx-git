/** @format */

const { baseUrl, tokenKey, userKey } = require("../../config/index");
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
    console.log(e.detail, "2222222");
    this.setData({ token: e.detail });
  },
  onUserNameInput(e) {
    console.log(e.detail);
    this.setData({ username: e.detail });
  },
  onPassWordInput(e) {
    console.log(e.detail);
    this.setData({ password: e.detail });
  },
  onTokenLoginTap() {
    const { token } = this.data;
    if (token) {
      wx.request({
        url: `${baseUrl}/user`,
        method: "GET",
        header: {
          "content-type": "application/json",
          Authorization: `token ${token}`,
        },
        success: (res) => {
          if (res.statusCode === 200) {
            console.log(res, "1");
            try {
              wx.setStorageSync(tokenKey, token);
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
  onUserLoginTap(e) {
    console.log(e, "skdu");
  },
  onClickTap() {
    window.open();
  },
});
