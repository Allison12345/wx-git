/** @format */

Component({
  properties: {
    label: String,
    isActive: Boolean,
    index: Number,
  },
  methods: {
    onTap() {
      const { index } = this.properties;
      this.triggerEvent("OnActiveIndex", index);
    },
  },
});
