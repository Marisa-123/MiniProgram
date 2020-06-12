// pages/home/home.js
Page({
  data: {
    title:'哈哈哈'
  },
  handleShowToast(){
    wx.showToast({
      title: '我是弹窗内容',
      duration: 3000,   //弹窗时间默认1500ms
      icon: 'loading',  //弹窗图标默认是对勾‘success’，这里改成loading
      // mask: true
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '另一种弹窗',
      content: '我是弹窗内容',
      // showCancel: false, //不要取消按钮
      success: function(res){
        console.log(res);
        if(res.cancel){
          console.log('用户点击了取消按钮');
        }
        if(res.confirm){
          console.log('用户点击了确定按钮');
          }
        
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载中ing',
    })
    // 注意Loading不会自己消失，要调用wx.hideLoading
    setTimeout(() => {
      wx.hideLoading({
      })
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success: function(res){
        //返回点击的下标值
        console.log(res);
        switch(res.tapIndex){
          case 0: console.log('相册');
          break;
          case 1: console.log('拍照');
        }
        
      }
    })
  },
  handlePushAbout(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  onLoad: function (options) {
    //---------------------原生的方式发送网络请求---------------------
    //1.发送最简单的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success(res){
    //     console.log(res);
        
    //   }
    // })

    //2. get请求，但是携带参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: (result) => {
    //     console.log(result);
        
    //   }
    // })

    //3.Post请求
    // wx.request({
    //   url:'http://httpbin.org/post',
    //   method:'post',
    //   data: {
    //     name: 'marisa',
    //     page: 18
    //   },
    //   success: (result) => {
    //     console.log(result);
    //   },
    //   fail: (err) => {
    //     console.log(err);
        
    //   }
    // })
  },
  onShareAppMessage: function(options){
    return{
      title: '这是我的分享',
      // 朋友点击之后。直接跳转到path指定的页面
      path: '/pages/about/about.js',
      imageUrl: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg'
    }
  }
})