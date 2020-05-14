Page({
  data: {
    labelList: ['仓库', '用户'],
    activeIndex: 0,
    repoLists: new Array(10).fill(0).map(() => ({
      author: 'tom',
      name: 'vue-git',
      desc: 'kjsdhkfjsbdcmsbmdjfjs',
      langColor: 'blue',
      lang: 'javascript',
      stars: '100',
      forks: '3434',
      todayStars: '48'
    })),
    userLists: new Array(14).fill(0).map(() => ({
      img:
        'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/C61D75E3-88C4-4182-B6E9-3EF575BC7D67.jpeg?sign=8566a6e0dae7ada7d63c96ef1090bc12&t=1584770809',
      author: 'Allison',
      name: 'vue-git',
      desc: 'kjdfhk'
    })),
    pickerList: [
      ['Today', 'Week', 'Month'],
      ['All', 'HTML', 'JavaScript']
    ],
    pickerIndex: [1, 1]
  },
  onLoad() {
  },
  onLanguageTap() {
    wx.navigateTo({ url: '/pages/languages/index' })
  },
  onSearchTap() {
    wx.navigateTo({ url: '/pages/search/index' })
  },
  myevent(e) {
    const index = e.detail
    this.setData({ activeIndex: index })
    console.log(this.data.activeIndex)
  },
  onPickerChange(e) {
    console.log(e)
    this.setData({ pickerIndex: e.detail.value })
  }
})
