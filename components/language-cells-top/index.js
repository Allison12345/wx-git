Component({
  properties: {
    chooseItems:Array
  },
  methods: {
    onTap(e){
      const {index} = e.currentTarget.dataset
      this.triggerEvent('onDeleteItem',index)
    }
  }
})
