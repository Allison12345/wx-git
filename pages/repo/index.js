/** @format */

const appInstance = getApp();
const { Authorization } = appInstance.globalData;
Page({
  data: {
    repoInfoItems: "",
    repoItems: "",
  },
  onLoad: function () {
    const { repoInfoItems, repoItems } = appInstance;
    this.setData({
      repoInfoItems: [...repoInfoItems],
      repoItems: [...repoItems],
    });
    console.log(repoInfoItems);
  },
});
