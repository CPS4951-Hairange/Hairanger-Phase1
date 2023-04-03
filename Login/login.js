// pages/login/login.js
Page({
  data: {
    username: "",
    password: "",
  },

  onUsernameInput: function (e) {
    this.setData({
      username: e.detail.value,
    });
  },

  onPasswordInput: function (e) {
    this.setData({
      password: e.detail.value,
    });
  },

  onLoginSubmit: function () {
    const { username, password } = this.data;
    if (!username || !password) {
      wx.showToast({
        title: "Please enter your username and password",
        icon: "none",
      });
      return;
    }
    // Perform login request and handle response here
  },
});