Component({
    properties: {
 
    },
    data: {
      appName: "Hairanger"
    },
    methods: {
      navigateToSearchPage: function() {
        wx.navigateTo({
          url: '/pages/search/search'
        })
      }
    
    }
  })