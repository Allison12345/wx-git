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
      img: '../assets/imgs/aj.png',
      author: 'Allison',
      name: 'vue-git',
      desc: 'kjdfhk'
    }))
  },
  myevent(e) {
    const index = e.detail
    this.setData({ activeIndex: index })
    console.log(this.data.activeIndex)
  }
})
