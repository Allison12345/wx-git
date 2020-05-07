const appInstance = getApp()

Page({
  data: {
    token: '',
    info: {
      desc: '前端小白',
      repos: '23',
      follwers: '435',
      follwing: '21',
      email: 'abc@xyz.com',
      blog: 'https://alison.github.io',
      img:
        'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/C61D75E3-88C4-4182-B6E9-3EF575BC7D67.jpeg?sign=8566a6e0dae7ada7d63c96ef1090bc12&t=1584770809',
      name: 'allison',
      additionalName: 'allison12345'
    },
    infoItems: [
      { number: 34, label: '仓库' },
      { number: 2, label: '粉丝' },
      { number: 43, label: '关注' }
    ],
    items: [
      [{ label: '关注 vue-git ♥️' }],
      [
        {
          label: '已关注',
          isLink: true
        },
        { label: '问题', isLink: true, path: '/issues' }
      ],
      [
        { label: '邮箱', key: 'email' },
        { label: '博客', key: 'blog' },
        { label: '公司', key: 'company' },
        { label: '所在地', key: 'location' }
      ],
      [
        { label: '反馈', isLink: true },
        { label: '关于', isLink: true, path: '/about' }
      ]
    ]
  },
  onLoad() {
    const { data } = appInstance.userItems
    console.log(data, 'sdjhf')
    this.getUserItems("https://api.github.com/users/Allison12345", this.data.token)
    this.setData({ token: appInstance.globalData.token })
  },
  getUserItems(userUrl, token) {
    wx.request({
      url: userUrl,
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'Authorization': `token ${token}`
      },
      success: res => {
        //console.log(res, '22222')
      }
    })
  },
  onRouteTap(path) {
    console.log(path)
  }
})
