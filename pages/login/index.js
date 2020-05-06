const { baseUrl, tokenKey, userKey } = require("../../config/index")
Page({
  data: {
    token: '',
  },
  onInput(e) {
    this.setData({ token: e.detail.value })
  },
  onLoginTap() {
    const { token } = this.data
    if (token) {
      wx.request({
        url: `${baseUrl}/user`,
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'Authorization': `token ${token}`
        },
        success: res => {
          if (res.statusCode === 200) {
            console.log(res, '1')
            const appInstance = getApp()
            appInstance.userItems = res
            appInstance.globalData.token = token
            try {
              wx.setStorageSync(tokenKey, token)
              wx.setStorageSync(userKey, res)
            } catch (e) { }
            wx.reLaunch({ url: "/pages/me/index" })
          }
        },
        fail: (error) => {
          console.log(error)
        }
      })
    } else {
      wx.showToast({ title: '请输入token', icon: 'none' })
    }
  }
})