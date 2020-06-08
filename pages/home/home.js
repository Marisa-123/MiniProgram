// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  tabControlClick(event){
    console.log(event);
    
  },
  handleInnerCpn(){
    //获取组件,可以通过.class也可以通过#id来获取
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel);
    
    //方法1：修改组件内数据(在这里直接使用setData修改组件中的数据，可以，但不符合开发规范)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 1
    // })

    //方法2：调用组件中的方法来进行修改比较合理
    my_sel.innerCounter(1)
  }
})