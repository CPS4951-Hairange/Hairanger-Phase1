import moment from '../../utils/moment';
moment.locale('zh-cn');

Page({
    data: {
      sid: -1,
      name:"wku Barber 1",
      intro:"introduction",
      tel: "123456789",
      category: "Dye",
      barber: "Male",
      workTime: "10:00 ~ 22:00",
      meanMark: "0",
      envMark: "0",
      serviceMark: "0",
      qualityMark: "0",
      comments: [],
      tabList: [{
        id: '1',
        title: 'Barber'
      }, {
        id: '2',
        title: 'Comments'
      }],
      selectedTabId: '1',
    },
    onLoad: function (query) {
      this.getShopInfo(query.id)
      this.getComments(query.id)
      //fetch data from api.
      wx.setNavigationBarTitle({
        title: this.data.name
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#333333',
        animation: {
          duration: 400,
          timingFunc: 'easeIn'
       }
      })
    },
    getbarberInfo: function(sid) {
      wx.request({
        url: `https://database_url/?service=App.position.Getposition&id=${sid}`,
        success: ({ data }) => {
          const { sid, name, intro, tel, pic, category, address, workStartTime, workEndTime, meanMark, envMark, serviceMark, qualityMark} = data['data'];
          this.setData({
            sid: sid,
            name: name,
            intro: intro,
            tel: tel,
            pic: pic,
            category: category,
            position: address,
            workTime: `${workStartTime} ~ ${workEndTime}`,
            meanMark: meanMark,
            envMark: envMark,
            serviceMark: serviceMark,
            qualityMark: qualityMark,
          })
        }
      })
    },
    getComments: function(sid) {
      wx.request({
        url: `https://ourdatabase.com/?service=App.Shop.GetComment&shopid=${sid}`,
        success: ({ data }) => {
          console.log(data)
          let formatedData = data['data'].map((item) => {
            console.log(moment.unix(parseInt(item.adminReplyStatus)).startOf('day').fromNow())
            return {
              ...item,
              date: item.date.split(" ")[0],
              adminReplyStatus: moment.unix(parseInt(item.adminReplyStatus)).startOf('day').fromNow(), // calculate interval of days.
              ownerReplyStatus: moment.unix(parseInt(item.ownerReplyStatus)).startOf('day').fromNow(),
            }
          }) 
          this.setData({
            comments: formatedData.filter((item) => {
              return item.status !== "0" && item.status !== "1"
            })
          })
        }
      })
    },
    handleTabChanged: function (e) {
      const id = e.detail;
      this.setData({
        selectedTabId: id
      });
    },
    handleButtonClicked: function() {
      wx.navigateTo({
        url: `/pages/form/form?sid=${this.data.sid}&pic=${this.data.pic}`
      })
    }
  })
  