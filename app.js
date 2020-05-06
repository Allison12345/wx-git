const { tokenKey, userKey } = require('./config/index')

App({
    onLaunch() {
        try {
            const tokenKeyValue = wx.getStorageSync(tokenKey) || ''
            this.globalData.token = tokenKeyValue
            const userKeyValue = wx.getStorageSync(userKey) || ''
            this.userItems = userKeyValue
        } catch (e) {
        }
    },
    globalData: { token: '' },
    userItems: ''
})
