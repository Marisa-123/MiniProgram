// pages/home/home.js
Page({
  data:{
    counter:0
  },
  addButton(){
    this.setData({
      counter:this.data.counter + 1
    })
  },
  subButton(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleContorl(event){
    console.log(event);
    
  }
})