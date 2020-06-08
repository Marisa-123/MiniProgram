// pages/image/image.js
Page({

  data: {
    imgPath:''
  },
  handleImg(){
    //系统API，让用户在相册选择图片
    wx.chooseImage({
      complete: (res) => {
        console.log(res);
        const path =res.tempFilePaths[0]
        this.setData({
          imgPath: path
        })
      },
    })
  }
})