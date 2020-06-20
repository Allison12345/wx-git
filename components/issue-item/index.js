/** @format */

Component({
  properties: {
    title: String,
    comments: String,
    index: Number,
    activeIndex: Number,
    full_name: String,
    repository_url: String,
  },
  data: {
    repo_name: "",
  },
  lifetimes: {
    attached() {
      this.fixString();
    },
  },
  methods: {
    fixString() {
      const { repository_url } = this.properties;
      const repo_name = repository_url.replace(
        "https://api.github.com/repos/",
        ""
      );
      this.setData({ repo_name });
    },
  },
});
