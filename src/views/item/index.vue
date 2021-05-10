<template>
  <div>
    <div class="item-showct">
      <div class="item-img">
        <!-- <img :src="this.item.imgUrl" width="100%" height="100%"> -->
      </div>
      <div class="item-msg">
        <p>{{item.name}}</p>
        <el-rate
            v-model="item.star"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
        </el-rate>
        <span style="background: blue; color: white">#云顶自营</span>
        <p style="color: red; font-size: 30px;">￥{{item.price}}</p>
        <p>
          数量:
          <el-button type="success" icon="el-icon-minus" @click="numMinus"></el-button>
          <input type="number" id="numInput" v-model="num">
          <el-button type="success" icon="el-icon-plus" @click="numAdd"></el-button>
        </p>
        <el-button type="success" plain @click="addShop" class="widebtn">
          <i class="el-icon-shopping-cart-full"></i>--加入购物车
        </el-button>
        <p>{{item.description}}</p>
      </div>
    </div>
    <h2 style="text-align:center">买家评论</h2>
    <div class="item-comment">
      <div class="item-e-1">
        <i class="el-icon-user-solid">Name</i>
        <el-rate
          v-model="item.star" 
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        >
        </el-rate>
        <span>2020-05-27</span>
      </div>
      <h3>BIAOTI</h3>
      <p>____AaaABBB</p>
    </div>   
  </div>
</template>

<script>
export default {
  data () {
    return{
      item: this.$route.query.data,
      num: 1,

    }
  },
  // methods: {
  //   addShop: function() {
  //     let itemlist = JSON.parse( sessionStorage.getItem("itemlist") ) || []
  //     let j = 0
  //     if( itemlist.length !== 0 ){
  //       for (let i of itemlist) {
  //         if (i.id == this.item.id) {
  //           i.num += this.num
  //           j = 1
  //         } 
  //       }
  //     }
  //     if( j == 0 ) {
  //       this.item.num = this.num
  //       itemlist.push(this.item)
  //     }
  //     let listToJson = JSON.stringify(itemlist)
  //     sessionStorage.setItem("itemlist", listToJson)
  //     //消息提醒
  //     this.$message({
  //       message: '已将商品添加入购物车中',
  //       type: 'success'
  //     });
  //   },
  //   numAdd: function() {
  //     this.num++
  //   },
  //   numMinus: function() {
  //     if (this.num > 1) {
  //       this.num--
  //     }
  //   },
  // },
  // mounted() {

  // }
}
</script>

<style>
  .item-showct{
    display: flex;
    border-block-end: solid darkgray 2px;
    margin: 0 auto;
    width: 80%;
    padding: 5%;
  }
  .item-comment{
    margin: 0 auto;
    width: 50%;
    padding: 3%;
    border-block-end: solid darkgray 2px;
    font-size: 20px;
  }
  .item-e-1{
    display: flex;
    justify-content: space-between;
  }
  .item-img{
    width: 50%;
    border: solid black 2px;
    margin-right: 6%;
  }
  .item-msg{
    width: 50%;
  }
  .el-button{
    font-size: 15px;
    padding: 5px;
  }
  .widebtn{
    padding: 10px;
    font-size: 25px;
    width: 60%;
  }
  #numInput{
    width: 10%;
    height: 20px;
  }
  p{
    font-size: 20px;
    line-height: 40px;
  }
</style>