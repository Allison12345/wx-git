Component({
  properties: {
    chooseItems: Array
  },
  methods: {
    onChoose(e) {
      const index = e.detail
      this.triggerEvent('onDeleteItem', index)
    }
  }
})
