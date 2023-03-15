// pages/home/home.js
Page({
  data: {  //商品数据data.checkList
    checkList: [
      {
        id: 0,
        name: "商品1",
        price: 10,
        number: 0,
        isChecked: false
      },
      {
        id: 0,
        name: "商品2",
        price: 20,
        number: 0,
        isChecked: false
      },
      {
        id: 0,
        name: "商品3",
        price: 30,
        number: 0,
        isChecked: false
      },
      {
        id: 0,
        name: "商品4",
        price: 40,
        number: 0,
        isChecked: false
      },
    ]
  },
  handleTap(evt) {  //事件处理:勾选
    var index = evt.target.dataset.index  //获取商品序号
    this.data.checkList[index].isChecked = !this.data.checkList[index].isChecked;
    //isChecked已绑定至checked属性, 可切换商品选中状态
    this.setData({  //更新一下改变后的数据
      checkList: [
        ...this.data.checkList
      ]
    })
  },
  addnum(evt) {  //事件处理: 增加数量
    var number = evt.target.dataset.currentnum[0];  //获取当前数量
    var index = evt.target.dataset.currentnum[1];  //获取商品序号
    this.data.checkList[index].number = number + 1  //数量+1, 并更新data.checkList
    this.setData({  //更新一下改变后的数据
      checkList: [
        ...this.data.checkList
      ]
    })
  },
  cutnum(evt) {  //事件处理: 减少数量
    var number = evt.target.dataset.currentnum[0];
    var index = evt.target.dataset.currentnum[1];
    if (number != 0) {   //防止改成负数翻车
      this.data.checkList[index].number = number - 1
    }
    this.setData({
      checkList: [
        ...this.data.checkList
      ]
    })
  },
})
