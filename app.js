/** @format */

const { tokenKey, userKey } = require("./config/index");

App({
    onLaunch() {
        try {
            const tokenKeyValue = wx.getStorageSync(tokenKey) || "";
            this.globalData.token = tokenKeyValue;
            const userKeyValue = wx.getStorageSync(userKey) || "";
            this.userItems = userKeyValue;
            const {
                bio,
                public_repos,
                follwers,
                follwing,
                email,
                blog,
                avatar_url,
                name,
                login,
            } = userKeyValue.data;
            this.myInfo = {
                bio,
                email,
                blog,
                avatar_url,
                name,
                login,
            };
            this.myInfoItems = [
                { number: public_repos, label: "仓库" },
                { number: follwers, label: "粉丝" },
                { number: follwing, label: "关注" },
            ]
        } catch (e) { }
    },
    globalData: { token: "" },
    userItems: "",
    myInfo: '',
    myInfoItems: ''
});
