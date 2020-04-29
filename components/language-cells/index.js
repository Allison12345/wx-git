Component({
  properties: {
    label: Array,
    word: String
  },
  methods:{
    onChoose(items){
      this.triggerEvent('onChooseItem',items.detail)
    }
  }
})
