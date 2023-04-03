var plugin = requirePlugin("ykfchat")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[
      {title:"我的钱包",url:"/pages/patientment/patientment"},
      {title:"我的订单"},
      {title:"会员中心"},
      {title:"联系客服",url:"plugin://ykfchat/chat-page?wechatapp_id=251563&channel_id=27679&scene=p98503hqaepl"},
      {title:"帮助与反馈"},
      {title:"邀请有礼",url:"/pages/invite"},
      {class:"box",title:"设置"}
    ],
    userinfo:''
  },

   // 传参
   jump() {
    plugin.callback.on("getSessionFrom", this.session, this); // 事件名称， 事件函数，this作用域
    wx.navigateTo({
      url: 'plugin://ykfchat/chat-page?wechatapp_id=251563&channel_id=27679&scene=p98503hqaepl'
    })
  },
  session(callback) {
    // 組裝数据
    let data = {
      sessionFrom: {
        channel_logo: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1504788190,2342400802&fm=26&gp=0.jpg',//需为网络资源
        channel_nickname: 'xx'
      }
    }
    callback(data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _this = this
    // 根据缓存id查询该用户
   wx.getStorage({
     key: 'user_tel',
     success:function(res){
       // console.log(res.data);
       wx.request({
         url: 'http://www.teacherapi.com/api/getLogin',
         data:{
           phone: res.data
         },
         success: (result) => {
           console.log(result.data.data)
           _this.setData({
             userinfo:result.data.data
           })
         },
       })
     }
   })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
