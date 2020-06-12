const TOKEN = 'token'

App({
  globalData:{
    token:''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1.先从缓冲中取出token
    const token = wx.getStorageSync(TOKEN)

    //2.判断token是否有值
    if(token && token.length !== 0){//已有token，验证token是否过期
      this.check_token(token)//验证token是否已经过期
    }else{
      this.login()
    }
    
    
  },
  check_token(token){
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header:{
        token
      },
      success: (res) => {
        // console.log(res);
       
        //再次验证token是不是正确的，有没有返回错误，没有错误就保存，有错误就重新login
        if(! res.data.errCode){
          console.log('token有效');
          this.globalData.token = token;
        }else{
          this.login()
        }
        
        
      },
      fail: (err) => {
        console.log(err);
        
      }
    })
  },
  login() {
    //登录操作
    console.log('执行了登录操作');
    
    wx.login({
    complete: (res) => {
      console.log(res);
      
      //1.获取code
      const code = res.code
      //2.将code发送给我们的服务器
      wx.request({
        url: 'http://123.207.32.32:3000/login',
        method: 'POST',
        data:{
          code
        },
        success: (res) => {
          //1.取出token
          const token = res.data.token

          //2.将token保存在globalData中
          this.globalData.token = token
          console.log(this.globalData.token);
          
          //3.进行本地存储
          wx.setStorageSync(TOKEN, token)
        }

      })
    },
    })
  }

})
