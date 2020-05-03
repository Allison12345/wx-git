const { tokenKey } = require('./config/index')

App({
    onLaunch() {
        try {
            const value = wx.getStorageSync(tokenKey) || ''
            this.globalData.token = value
        } catch (e) {
        }
    },
    globalData: { token: '' }
})
