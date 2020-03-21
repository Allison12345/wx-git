const laguagesItems = new Array(26).fill(0).map((_, index) => ({
  word: String.fromCodePoint(65 + index).toLowerCase(),
  label: ['df', 'sf', 'sdf', 'sdf', 'sdf']
}))
Page({
  data: {
    laguagesItems,
    wordItems: laguagesItems.map(language => language.word)
  },
})