Page({
  data: {
    info: {
      desc: '前端小白',
      repos: '23',
      follwers: '435',
      follwing: '21',
      email: 'abc@xyz.com',
      blog: 'https://alison.github.io',
      img: '',
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
  onRouteTap(path) {
    console.log(path)
  }
})
