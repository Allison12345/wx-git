// pages/search/index.js
Page({
  data: {
    searchList: [],
    searchContent: ''
  },
  onLoad: function (options) {

  },
  onSearchContentChange(e) {
    const item = e.detail
    const searchList = [...this.data.searchList]
    searchList.push(item)
    this.setData({ searchList })
  },
  onChoose(e) {
    const index = e.detail
    const searchContent = this.data.searchList[index]
    console.log(searchContent)
  },
  onClearAll() {
    this.setData({ searchList: [] })
  }
})