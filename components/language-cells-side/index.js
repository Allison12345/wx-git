Component({
  properties: {
    wordItems:Array
  },
  methods: {
    onTap(e){
      const {item} = e.currentTarget.dataset
      this.triggerEvent('moveToItem',item)
    }
  }
})
