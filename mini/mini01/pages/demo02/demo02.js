// pages/demo02/demo02.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
      '//gw.alicdn.com/imgextra/i2/180/O1CN01Hr9AMJ1DCTtlpLAVU_!!180-0-lubanu.jpg',
      '//gw.alicdn.com/imgextra/i1/26/O1CN01wXY1WJ1C3wu8La44C_!!26-0-lubanu.jpg',
      'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
    ],
  },
  handle() {
    console.log('大盒子')
  },
  handleTap() {
    console.log('小盒子')
  },
  scroll() {
    console.log('滚动条滚动了')
  },
  scrollUp() {
    console.log('滚动条到顶了')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
