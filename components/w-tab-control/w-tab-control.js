// components/w-tab-contorl/w-tab-control.js
Component({
  /**
   * ------------------------组件的属性列表-----------------
   */
  //父传子
  properties: {
    titles:{
      type: Array,
      value: [],
      // 监听此数据的变化
      observe: function(newVal,oldVal){

      }
    }
  },

  /**
   * --------------------------组件的初始数据-----------------
   */
  data: {
    currentIndex: 0,
    counter:0


  },

  /**
   * ------------------------组件的方法列表---------------------
   */
  methods: {
    //点击时会传过来event事件
    handleClick(event){
      //1.取出Index
      const index = event.currentTarget.dataset.index
      // console.log(event);

      //2.修改currentIndex
      this.setData({
        currentIndex : index
      })
      //3.通知页面内部点击的事件
      this.triggerEvent('itemClick',{index:index,title:this.properties.titles[index]},{})
      
    }
  },
   //---------------外界给组件传递额外的样式---------------------
   externalClasses: [],

   //----------------监听props和data的改变-----------------
   observers: {
     counter: function(newVal){
      console.log(newVal);
      
     }
   },

   //----------------组件中监听生命周期函数------------------
   //1.监听所在页面的生命周期
   pageLifetimes: {
    show(){
      console.log('监听组件所在页面显示出来时');
    },
    hide(){
      console.log('监听所在页面隐藏起来时');
    },
    resize(){
      console.log('监听所在页面的尺寸改变');
      
    }
   },
   //2.监听组件本身的生命周期
   lifetimes: {
    created(){
      console.log('组件被创建出来');
    },
    attached(){
      console.log('组件被添加到页面');
    },
    ready(){
      console.log('组件被渲染出来');
    },
    moved(){
      console.log('组件被移动到另外一个节点');
    },
    detached(){
      console.log('组件被移除掉');
    }
   }
})
