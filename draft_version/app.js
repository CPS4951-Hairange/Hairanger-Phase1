//app.js
App({
  onLaunch: function () {
    // Demonstrating local storage capabilities
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // login
    wx.login({
      success: res => {
        // Send res.code to the backend to exchange for openId, 
        //sessionKey, and unionId
      }
    })
    // get user info
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // Authorized, directly call getUserInfo
          //to obtain the avatar nickname without popping up the box
          wx.getUserInfo({
            success: res => {
              // You can send res to the backend to decode the unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // Due to getUserInfo being a network request, it may not be 
              // returned until after Page. onLoad
              // So add a callback here to prevent this situation
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})