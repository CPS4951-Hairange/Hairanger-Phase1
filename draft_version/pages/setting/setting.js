var app = getApp();
Page({
    data: {
        avatarUrl: '/assert/header.jpeg',
        isLogged: false,
        user_name: null,
        user_id: null
    },
    onLoad: function () {
        this.updateData()
    },
    onShow: function () {
        this.updateData()
    },
    updateData: function () {
        this.setData({
            avatarUrl: wx.getStorageSync('avatarUrl'),
            isLogged: app.func.isLogged(),
            user_name: wx.getStorageSync('info').name,
            user_id: wx.getStorageSync('info').number
        })
    },
    onTapHead: function () {
        if (this.data.isLogged) {
            var that = this;
            wx.showModal({
                title: '退出确认',
                content: '您确定要退出登录吗？',
                confirmColor: 'black',
                success: function (e) {
                    if (e.confirm) {
                        that.setData({
                            isLogged: false
                        })
                        wx.removeStorage({
                            key: 'info',
                            success: function (res) { },
                        })
                    }
                }
            })

        }
        else app.func.login();
    },
    onTapMenu: function(e){
        var id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: './'+id+'/'+id,
        })
    }

})