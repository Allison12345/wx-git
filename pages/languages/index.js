const laguagesItems = new Array(26).fill(0).map((_, index) => ({
  word: String.fromCodePoint(65 + index).toLowerCase(),
  label: ['dfjdglfkajs', 'sfsd', 'sdqf', 'sdsdff', 'javaScript']
}))
Page({
  data: {
    chooseItems: [],
    laguagesItems,
    wordItems: laguagesItems.map(language => language.word),
    activeWord: ''
  },
  onChooseItem(items) {
    const { label, index } = items.detail
    const chooseItems = this.data.chooseItems
    if (chooseItems.indexOf(label) === -1) {
      chooseItems.push(label)
    }
    this.setData({ chooseItems })
  },
  onDeleteItem(index) {
    const chooseItems = this.data.chooseItems
    chooseItems.splice(index.detail, 1)
    this.setData({ chooseItems })
  },
  moveToItem(item) {
    const word = item.detail
    this.activeWord = word
    this.getRect(word)
  },
  getRect(word) {
    wx.createSelectorQuery().select("#top").scrollOffset(function (rect1) {
      const topdist = rect1.scrollTop
      wx.createSelectorQuery().select(`#${word}`).boundingClientRect(function (rect2) {
        const dist = rect2.top - topdist
        console.log(topdist, dist, rect1, rect2)
        wx.pageScrollTo({
          scrollTop: dist,
          duration: 300,
          success: res => {
            console.log(res)
          },
          fail: res => {
            console.log(res, fail)
          }
        })
      }).exec()
    }).exec()
  }
})