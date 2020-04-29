Component({
  properties: {
    label: String,
    index: Number
  },
  methods:{
    onTap(){
      const items = {label:this.properties.label,index:this.properties.index}
      this.triggerEvent('onChoose',items)
    }
  }
})
