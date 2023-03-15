//Customer Management
Page({
  data: {
    //Customer ID
    CustomerID:'',
    //Customer's Name
    CustomerName:'',
    //Reserve Date
    Date:'',
    //Barber's Name
    BarberName:'',
  },
  //Every item of information obtained from the input form is stored in the cache
  getInputCustomerName:function(e)
  {
    this.setData({
      CustomerName:e.detail.value,
      //Read the applicant ID from the cache, which is the account number when logging in.
      ID:wx.getStorageSync('userInfoID')
    }),
    wx.setStorageSync(
      "applyCustomerName",e.detail.value
    ); 
  },
  getInputDate:function(e)
  {
    this.setData({
      Date:e.detail.value,
    });
    wx.setStorageSync(
      "applyDate",e.detail.value
    ); 
  },
  getInputCustomerID:function(e)
  {
    this.setData({
      CustomerID:e.detail.value,
    });
    wx.setStorageSync(
      "applyCustomerID",e.detail.value
    ); 
  },
  getInputBarberName:function(e)
  {
    this.setData({
      BarberName:e.detail.value,
    });
    wx.setStorageSync(
      "applyBarberName",e.detail.value
    ); 
  },

  click_apply:function(){ 
    wx.request({
        url: 'xxxx', //The Database
        data: {
          'CustomerID': "'"+this.data.CustomerID+"'",
          'CustomerName': "'"+this.data.CustomerName+"'",
          'Date':"'"+this.data.Date+"'",
          'BarberName':"'"+this.data.BarberName+"'",
        },
        method: 'GET',  
        success: function (res) {
          console.log(res.data)
          if(res.data=="INSERT Success"){
            wx.showModal({
              title:'Submit Success！',
              success:function(e){
                wx.switchTab({
                  url: '../index/index',
                })
              }
            })
          }else{
            wx.showModal({
              title:'Failed Submit',
              content:'Please Submit Again',
              success:function(r){
                wx.navigateTo({
                  url: '../management/management',
                })
              }
            })
          }
        }
    })
  },
})


  
