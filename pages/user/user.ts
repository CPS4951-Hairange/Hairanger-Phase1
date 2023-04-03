let Term1=''
let Term2=''
let Term3=''
let Term4=''
let Term5=''

Page({
  data:{
    modalHidden:true,//是否隐藏对话框
  },

  onLoad(){
   this.getList()
  },
//专门写一个获取数据的getList方法，防止代码冗余
  getList(){
 wx.cloud.database().collection('xinxi')
 .get()
 .then(res=>{
   console.log('获取数据成功！',res.data)
 })
 .catch(_err=>{
   console.log('获取数据失败！')
 })
  },

  //获取用户输入的信息
  getTerm1(e: { detail: { value: string } }){
    Term1 = e.detail.value
    console.log(Term1)
  },
  getTerm2(e: { detail: { value: string } }){
    Term2= e.detail.value
    console.log(Term2)
  },
  getTerm3(e: { detail: { value: string } }){
    Term3= e.detail.value
    console.log(Term3)
  },
  getTerm4(e: { detail: { value: string } }){
    Term4 = e.detail.value
    console.log(Term4)
  },
  getTerm5(e: { detail: { value: string } }){
    Term5 = e.detail.value
    console.log(Term5)
  },

  //点击按钮向数据库中添加数据
  add(){
    console.log('添加的条目1',Term1)
    console.log('添加的条目2',Term2)
    console.log('添加的条目3',Term3)
    console.log('添加的条目4',Term4)
    console.log('添加的条目5',Term5)
    //校验操作
    if (Term1==''){
      //弹窗提醒函数
      wx.showToast({
        icon:'none', //为了去除弹窗中的√
        title: '条目1为空'
      })
    }
      else if(Term2==''){
        wx.showToast({
          icon:'none',
          title: '条目2为空'
        })
      }
      else if(Term3==''){
        wx.showToast({
          icon:'none',
          title: '条目3为空'
        })
      }
      else if(Term4==''){
        wx.showToast({
          icon:'none',
          title: '条目4为空'
        })
      }
      else if(Term5==''){
        wx.showToast({
          icon:'none',
          title: '条目5为空'
        })
      }
    //添加操作
      else{
        wx.cloud.database().collection('xinxi')
        .add({
          data:{
          //将全局变量中的值传给name和value
            trem1:Term1,
            trem2:Term2,
            trem3:Term3,
            trem4:Term4,
            trem5:Term5,
          }
        })
        .then(_res=>{
          console.log('添加数据成功！')
          //再次向数据库发送请求，使列表动态更新数据
          this.getList()
          this.setData({
            modalHidden:false
          })
        })
        .catch(_err=>{
          console.log('添加数据失败！')
        })
      }
  },
  //确定按钮点击事件
  modalBindaconfirm:function(){
    this.setData({
      modalHidden:!this.data.modalHidden,
    })
  },
  //取消按钮点击事件
  modalBindcancel:function(){
    this.setData({
      modalHidden:!this.data.modalHidden,
    })
  }
})