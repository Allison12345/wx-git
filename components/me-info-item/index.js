const appInstance = getApp()
const { token } = appInstance.globalData
Component({
  properties: {
    number: Number,
    label: String,
    index: Number,
    url: String
  },
  methods: {
    onTap() {
      wx.request({
        url: this.properties.url,
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'Authorization': `token ${token}`
        },
        success: res => {
          console.log(res)
        }
      })
    }
  }
})
