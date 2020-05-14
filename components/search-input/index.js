// components/search-input/index.js
Component({
  data: {
    img:
      'https://6d79-mywxapp-q4z0b-1301425530.tcb.qcloud.la/search-outline.png?sign=5fd5c85d0e4b46858a35d07b2726fcde&t=1584787271',
    searchContent: ''
  },
  methods: {
    onCancel() {
      this.setData({ searchContent: '' })
    },
    onComfirm(e) {
      this.setData({ searchContent: '' })
      this.triggerEvent('onSearchContentChange', e.detail.value)
    },
  }
})
