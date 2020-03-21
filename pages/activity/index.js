Page({
  data: {
    activityLists: new Array(14).fill(0).map(() => ({
      img:
        'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/C61D75E3-88C4-4182-B6E9-3EF575BC7D67.jpeg?sign=8566a6e0dae7ada7d63c96ef1090bc12&t=1584770809',
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
