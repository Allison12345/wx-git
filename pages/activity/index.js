Page({
  data: {
    activityLists: new Array(14).fill(0).map(() => ({
      img: '',
      user: 'Allison',
      activity:
        Math.random() > 0.5
          ? 'created'
          : 'created created created created created created',
      repo: 'vue-git',
      date: '5 dags ago'
    }))
  }
})
