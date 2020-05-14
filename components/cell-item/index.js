// components/cell-item/index.js
Component({
  properties: {
    chooseItems: Array
  },
  data: {

  },
  methods: {
    onTap(e) {
      const { index } = e.currentTarget.dataset
      console.log(e, '1')
      this.triggerEvent('onChoose', index)
    }
  }
})
