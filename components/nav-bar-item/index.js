Component({
  properties: {
    label: String,
    isActive: Boolean,
    index: Number
  },
  methods: {
    onTap() {
      this.triggerEvent('myevent', this.properties.index, { bubbles: false })
    }
  }
})
