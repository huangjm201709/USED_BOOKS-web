<template>
  <div class="home-ct">
    <HomeNav></HomeNav>
    <div class="content">
      <div class="home-content">
        <h1>闲者二手书籍</h1>
        <p>——USED BOOKS</p>
        <h3>来一场专属于你的二手书盛宴!</h3>
        <p>MAKE YOURSELF COMFORTABLE</p>
        <el-button round @click="shopClick">SHOP NOW</el-button>
      </div>
      <div class="home-goods-pics">
        <el-carousel height="380px" style="text-align: center">
          <el-carousel-item v-for="(i, index) in bookList" :key="index">
            <img :src="imgDomin + i.imgUrl" width="60%" height="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import HomeNav from "@/components/HomeNav/index.vue";
import {getBooks} from "@/api/book.js"

export default {
  components: {
    HomeNav,
  },
  data() {
    return {
      imgDomin: '/manageURL/image',
      bookList: []
    };
  },
  created() {
    this.getBookList()
  },
  methods: {
    getBookList() {
      getBooks().then(res => {
        this.bookList = res.data
      })
    },
    shopClick() {
      this.$router.push("/meau");
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.home-ct {
  background-image: linear-gradient(to bottom right, white, darkblue);
}
.home-content {
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