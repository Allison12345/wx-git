const laguagesItems = new Array(26).fill(0).map((_, index) => ({
  word: String.fromCodePoint(65 + index).toLowerCase(),
  label: ['df', 'sf', 'sdqf', 'sdsdff', 'javaScript']
}))
Page({
  data: {
    chooseItems:[],
    laguagesItems,
    wordItems: laguagesItems.map(language => language.word)
  },
  onChooseItem(items){
    const {label,index} = items.detail
    const chooseItems = this.data.chooseItems
    if(chooseItems.indexOf(label) === -1){
      chooseItems.push(label)
    }
    this.setData({chooseItems})
  },
  onDeleteItem(index){
    const chooseItems = this.data.chooseItems
    chooseItems.splice(index.detail,1)
    this.setData({chooseItems})
  }
})