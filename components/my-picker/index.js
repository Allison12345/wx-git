Component({
  properties: {
    pickerList: Array,
    pickerIndex: Array
  },
  methods: {
    onMultiPickerChange(e) {
      console.log('onMultiPickerChange')
      this.triggerEvent('onPickerChange', e.detail)
    }
  }
})
