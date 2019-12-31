//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   cur:1
  },
  search:function(){
    this.setData({
      cur:2
    })
  },
  index:function(){
    this.setData({
      cur:1
    })
  }
})
