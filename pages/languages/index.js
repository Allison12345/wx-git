/** @format */

const laguagesItems = new Array(26).fill(0).map((_, index) => ({
  word: String.fromCodePoint(65 + index).toLowerCase(),
  label: ["dfjdglfkajs", "sfsd", "sdqf", "sdsdff", "javaScript"],
}));
const { languagesKey } = require("../../config/index");
Page({
  data: {
    languagesChooseItems: [],
    laguagesItems,
    wordItems: laguagesItems.map((language) => language.word),
    activeWord: "",
  },
  onLoad() {
    const languagesChooseItems = wx.getStorageSync(languagesKey) || [];
    this.setData({ languagesChooseItems });
  },
  onUnload() {
    this.saveItems();
  },
  saveItems() {
    const { languagesChooseItems } = this.data;
    wx.setStorage({
      key: languagesKey,
      data: languagesChooseItems,
      success: () => {},
      fail: (err) => {
        console.log(err);
      },
    });
  },
  onChooseItem(items) {
    const { label, index } = items.detail;
    const { languagesChooseItems } = this.data;
    if (languagesChooseItems.indexOf(label) === -1) {
      languagesChooseItems.push(label);
    }
    this.setData({ languagesChooseItems });
  },
  onDeleteItem(index) {
    const languagesChooseItems = this.data.languagesChooseItems;
    languagesChooseItems.splice(index.detail, 1);
    this.setData({ languagesChooseItems });
  },
  moveToItem(item) {
    const activeWord = item.detail;
    this.setData({ activeWord });
  },
});
