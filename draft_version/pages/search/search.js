

Page({
  data: {
    inputValue: '',
    focus: true,
    shopsList: null,
    duration: 1000,
    $zanui: {
      toptips: {
        show: false
      }
    }
  },
  onLoad(query) {
    const queryCategory = query.category;
    wx.request({
      url: 'https://ourdatabase.com/?service=App.Shop.GetShopsByTag',
      method: "POST",
      data: {
        tag: queryCategory
      },
      success: ({ data }) => {
        console.log(data);
        this.setData({
          shopsList: data['data']
        })
        console.log(this.data.shopsList)
      }
    })
  },
  searchChange(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  
  searchDone(e) {
    console.log('search', e.detail.value);
    const queryCondition = e.detail.value;
    // check query length where bigger than 2
    if (queryCondition.length < 2) {
      this.setData({
        $zanui: {
          toptips: {
            show: true
          }
        }
      });
      setTimeout(() => {
        this.setData({
          $zanui: {
            toptips: {
              show: false
            }
          }
        })
      }, this.data.duration);
      return;
    }
    wx.request({
      url: 'https://ourdatabase.com/?service=App.Shop.Search',
      method: "POST",
      data: {
        name: queryCondition
      },
      success: ({ data }) => {
        console.log(data);
        this.setData({
          shopsList: data['data'].filter((item) => {
            return item.status !== "1" && item.status !== "0" // the shop check pass.
          })
        })
        console.log(this.data.shopsList)

      }
    })
  }
})
