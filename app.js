App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）后台存活2小时，关闭超过两小时，再次打开时重新触发
   */
  onLaunch: function () {
    //getUserInfo已经不可用
    // wx.getUserInfo({
    //   success: (result) => {
    //     console.log(result);
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow，每次退出再进来都会执行
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
