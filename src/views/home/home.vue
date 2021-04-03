<template>
  <div class="home-ct">
    <div class="home-detail">
      <h1>闲者二手书籍</h1>
      <p>——USED BOOKS</p>
      <h3>来一场专属于你的二手书盛宴!</h3>
      <p>MAKE YOURSELF COMFORTABLE</p>
      <el-button round @click="shopClick">SHOP NOW</el-button>
    </div>
    <div class="home-goods-pics">
      <el-carousel height="380px" style="text-align: center">
        <el-carousel-item v-for="(i, index) in imgArr" :key="index">
          <img :src="i.imgUrl" width="80%" height="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgArr: [],
    };
  },
  methods: {
    shopClick() {
      this.$router.push("/meau");
    },
  },
  mounted() {
    // this.$axios
    //   .get(this.$host + '/recommend_api.jsp')
    //   .then( response => {
    //     this.imgArr = response.data
    //   })
    //   .catch( () => (console.error()) )
  },
};
</script>

<style lang="less" scoped>
.home-ct {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, white, darkblue);
}
.home-detail {
  width: 20%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 10px;
  margin-right: 5%;
  text-align: end;
  color: whitesmoke;
}
.home-goods-pics {
  width: 40%;
  height: 400px;
  padding: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.322), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 50px;
}
</style>