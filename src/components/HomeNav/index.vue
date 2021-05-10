<template>
  <div class="head-container">
    <div class="head-first">
      <div class="head-logo">
        <!-- <img src="@/assets/Logo/logo.jpg" width="100%" height="100%"> -->
      </div>
      <div class="head-search">
        <form>
          <input type="text" v-model="inputValue">
          <i class="el-icon-search" @click="searchClick"></i>
        </form>
      </div>
      <div class="head-adv">
        <label>广告</label>
        <!-- <img src="@/assets/adv.jpg" width="100%" height="80%"> -->
      </div>
    </div>
    <div class="head-second">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          All——<br><span class="i-font">全部商品分类</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Book">Book</el-dropdown-item>
          <el-dropdown-item command="Clothes">Clothes</el-dropdown-item>
          <el-dropdown-item command="Daily Use">Daily Use</el-dropdown-item>
          <el-dropdown-item command="Food">Food</el-dropdown-item>
          <el-dropdown-item command="Furniture">Furniture</el-dropdown-item>
          <el-dropdown-item command="Toy">Toy</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="head-second-right">
        <router-link to="/entry" v-if="username == null">
          <i class="el-icon-user">
            <span class="i-font" >登陆</span>
          </i>
        </router-link>
        <router-link to="/account" v-if="username" @click.native="refresh">
          <i class="el-icon-user">
            <span class="i-font">{{username}}<span v-if="vip !== 'false'" style="color:orange">(VIP)</span></span>
          </i>
        </router-link>
        <router-link to="/shop" @click.native="refresh">
        <i class="el-icon-shopping-cart-full">
          <span class="i-font">
            购物车<span style="color: red">({{shoplistNum}})</span>
          </span>
        </i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // inputValue: "",
      // username: JSON.parse(sessionStorage.getItem("user")).name,
      // vip: JSON.parse(sessionStorage.getItem("user")).isVip,
    }
  },
  methods: {
//     handleCommand(command) {
//       this.$router.push( { path: '/meau', query: { key: "sort", value: command } } )
//       this.$router.go(0);//刷新页面
//     },
//     searchClick: function() {
//       this.$router.push({path: '/meau' , query:{ key: "name", value: this.inputValue }})
//       this.$router.go(0);//刷新页面
//     },
  },
}
</script>

<style scoped>
  .head-first{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100px;
  }
  .head-logo{
    width: 25%;
  }
  .head-search{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    font-size: 30px;
  }
  .head-adv{
    width: 15%;
  }
  .head-search input{
    width: 700px;
    height: 25px;
  }
  .head-second{
    display: flex;
    justify-content: space-between;
    height: 55px;
    background-image: linear-gradient(white, rgba(207, 200, 200, 0.562));
  }
  .head-second-right{
    width: 30%;
    font-size: 40px;
    text-align: center;
  }
  .i-font{
    font-size: 20px;
    font-weight: bold;
  }
  .el-dropdown{
    font-size: 20px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: black;
  }
</style>
