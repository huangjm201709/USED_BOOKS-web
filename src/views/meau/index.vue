<template>
  <div class="meau-ct">
    <div class="meau-sort-ct">
      <h3>热门分类</h3>
      <div class="meau-sort-pct">
        <div
          class="sort-pitem"
          v-for="(item, index) in sortImgArr"
          :key="index"
        >
          <img
            :src="item.img"
            @mouseover="checkIn(index)"
            @mouseout="checkOut"
            @click="sortClick(item.sort)"
            :class="isActive == index ? 'sortImg-mover-c' : 'sortImg-c'"
          />
        </div>
      </div>
    </div>
    <div class="meau-recm-ct" v-if="sortActive">
      <h3>今日推荐</h3>
      <div class="meau-recm-pct">
        <div class="recm-arrow">
          <i
            class="el-icon-arrow-left"
            @click="recmPre"
            v-show="recmindex != 0"
          ></i>
        </div>
        <div class="recm-pics">
          <div
            class="recm-pitem"
            v-for="(i, index) in bookList"
            :key="index"
          >
            <img :src="imgDomin + i.imgUrl" />
            <p>{{ i.name }}</p>
            <p style="color: orange">{{ i.type }}</p>
            <!-- <p style="color: red">￥ {{ i.price }}</p> -->
            <el-rate
              v-model="i.star"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </div>
        </div>
        <div class="recm-arrow">
          <i
            class="el-icon-arrow-right"
            @click="recmNext"
            v-show="recmindex < listRecm.length - 1"
          ></i>
        </div>
      </div>
    </div>

    <div class="meau-list-ct">
      <h2 style="text-align: center">商品列表</h2>
      <div
        class="meau-list-itemct"
        v-for="(i, index) in bookList"
        :key="i.id"
        v-show="index >= (curPage - 1) * pageSize && index < curPage * pageSize"
      >
        <div class="list-item-pic">
          <img :src="imgDomin + i.imgUrl" @click="itemClick(i)" />
        </div>
        <div class="list-item-msg">
          <p
            :style="{ color: isActive == index ? 'yellowgreen' : 'blue' }"
            @mouseover="checkIn(index)"
            @mouseout="checkOut"
            @click="itemClick(i)"
          >
            {{ i.name }}
          </p>
          <p class="type">[{{i.type}}]</p>
          <el-rate
            v-model="i.star"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
          <p style="color: red">￥{{ i.price }}</p>
          <p>{{ i.description }}</p>
        </div>
      </div>
      <div class="list-item-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="curPage"
          @current-change="curPageChange"
          :page-size="pageSize"
          :total="itemTotal"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import { getBooks } from "@/api/book.js";

export default {
  data() {
    return {
      imgDomin: "/manageURL/image",
      bookList: [],

      sortActive: 1,
      isActive: -1,
      // sortImgArr:[
      //   {
      //     sort: "Book",
      //     img:require("../assets/Logo/Book.jpg")
      //   },
      //   {
      //     sort: "Clothes",
      //     img:require("../assets/Logo/Clothes.jpg")
      //   },
      //   {
      //     sort: "Daily Use",
      //     img:require("../assets/Logo/Daily Use.jpg")
      //   },
      //   {
      //     sort: "Food",
      //     img:require("../assets/Logo/Food.jpg")
      //   },
      //   {
      //     sort: "Furniture",
      //     img:require("../assets/Logo/Furniture.jpg")
      //   },
      //   {
      //     sort: "Toy",
      //     img:require("../assets/Logo/Toy.jpg")
      //   },
      // ],
      recmindex: 0,
      listRecm: [],
      listItems: [],
      listsort: "",
      itemTotal: 0,
      curPage: 1,
      pageSize: 3,
    };
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      getBooks().then((res) => {
        this.bookList = res.data;
        this.bookList.map((i) => {
          i.star = 4.8;
        });
      });
    },
    sortClick: function (sort) {
      this.sortActive = 0; //隐藏今日推荐盒子
      this.listsort = sort + " "; //给标题加上分类的名字
      //this.$router.push({path: '/meau' , query:{ data: data }})
      let postData = qs.stringify({ sort: sort }); //key:sort
      this.$axios
        .post(this.$host + "/Goods_api.jsp", postData)
        .then((response) => {
          let len = response.data.length;
          this.itemTotal = len;
          this.listItems = []; //清空列表
          for (let i = 0; i < len; i++) {
            this.listItems.push(response.data[i]);
            //console.log(response.data)
          }
          //this.$forceUpdate(); //强制重新渲染
        })
        .catch(() => console.error());
    },
    itemClick: function (item) {
      this.$router.push({ path: "/item", query: { data: item } });
    },
    recmPre: function () {
      this.recmindex--;
    },
    recmNext: function () {
      this.recmindex++;
    },
    checkIn: function (index) {
      this.isActive = index;
    },
    checkOut: function () {
      this.isActive = -1;
    },
    curPageChange: function (page) {
      this.curPage = page;
    },
  },
  mounted() {
    //不带参跳转的
    if (this.$route.query == undefined) {
      this.$axios
        .get(this.$host + "/Goods_api.jsp")
        .then((response) => {
          let len = response.data.length;
          this.itemTotal = len;
          for (let i = 0; i < len; i++) {
            this.listItems.push(response.data[i]);
            //this.listRecm.push([response.data[i]])
          }
        })
        .catch(() => console.error());
    }
    //根据导航带参跳转的
    else {
      let key = this.$route.query.key;
      let value = this.$route.query.value;
      this.listsort = this.$route.query.key + " ";
      let postData = qs.stringify({ [key]: value });
      this.$axios
        .post(this.$host + "/Goods_api.jsp", postData)
        .then((response) => {
          let len = response.data.length;
          this.itemTotal = len;
          for (let i = 0; i < len; i++) {
            this.listItems.push(response.data[i]);
          }
          //推荐商品三个三个放进一个数组
          let arr = [];
          for (let j = 0; j < len; j++) {
            if (arr.length == 3) {
              this.listRecm.push(arr);
              arr = [];
            }
            if (response.data[j].recm == "true") {
              arr.push(response.data[j]);
            }
          }
          if (arr.length !== 0) {
            this.listRecm.push(arr);
          }
          console.log(this.listRecm);
        })
        .catch(() => console.error());
    }
  },
};
</script>

<style scoped>
.type{
  font-size: 16px;
}
.meau-sort-pct {
  display: flex;
  justify-content: center;
}
.sort-pitem {
  display: flex;
  border: groove rgb(247, 187, 22) 3px;
  background: rgba(207, 200, 200, 0.562);
  flex-basis: 15%; /* 图片按比例分配*/
  height: 150px;
  margin: 10px;
  justify-content: center;
  align-items: center;
}
.sortImg-c {
  width: 80%;
  height: 80%;
}
.sortImg-mover-c {
  width: 90%;
  height: 90%;
  border: solid yellow 3px;
}
/*今日推荐*/
.meau-recm-pct {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.04);
  background-image: linear-gradient(to bottom right, white, darkblue);
  display: flex;
  justify-content: center;
  height: 500px;
}
.recm-pics {
  display: flex;
  width: 80%;
  justify-content: center;
}
.recm-pitem {
  flex-basis: 20%;
  padding: 3%;
}
.recm-pitem img {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 90%;
  height: 50%;
}
.recm-arrow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 150px;
  width: 5%;
  height: 15%;
  font-size: 50px;
  color: black;
  text-align: center;
}

/* 商品列表 */
.meau-list-itemct {
  margin: 0 auto;
  border-block-end: solid darkgray 2px;
  display: flex;
  width: 80%;
  height: 300px;
  padding: 2%;
}
.list-item-pic {
  width: 20%;
  height: 90%;
  margin-top: 15px;
  text-align: center;
}
.list-item-pic img {
  width: 90%;
  height: 90%;
}
.list-item-msg {
  width: 75%;
  margin-left: 6%;
}
.list-item-pagination {
  text-align: center;
  margin-top: 30px;
  height: 150px;
}
.p {
  font-weight: bold;
}
</style>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
