const { baseUrl, tokenKey, userKey } = require("../../config/index")
Page({
  data: {
    token: '',
    activeIndex: 0,
    img: 'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/wx-git/githup.png?sign=81c8fc19a2bc5dc28bc501066088800e&t=1588833622'
  },
  onTokenInput(e) {
    console.log(e.detail, '2222222')
    this.setData({ token: e.detail })
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