// pages/bookdetail/bookdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:0,
    collect:0,
    remove:0
  },
  show:function(){
    this.setData({
      show:1
    })
  },
  hide:function(){
    this.setData({
      show:2,
      remove:0
    })
  },
  hidden:function(){
    this.setData({
      show:0,
      remove:0
    })
  },
  collect:function(){
    this.setData({
      collect:1
    })
  },
  uncollect:function(){
    this.setData({
      collect:0
    })
  },
  remove:function(){
    this.setData({
      remove:1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
