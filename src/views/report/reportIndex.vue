<template>
  <el-container :style="bg" class="bgc">
    <div v-if="!isShow" class="ct">
      <el-header>
        <h3>2020 Goodbye！</h3>
        <el-form :model="form" ref="form">
          <el-form-item>
            <el-input
              v-model="form.res"
              type="text"
              placeholder="请输入账号"
              prop="umCode"
            >
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <h4>虽有遗憾 但请与我前行</h4>
        <span>请输入我们之间的<span class="textData"> 暗语 </span></span>
        <div>麻利麻利哄！</div>
        <el-input v-model="user" class="mt10"></el-input>
      </el-main>
      <el-footer>
        <el-button @click="login">芝麻开门</el-button>
        <div class="btmWord mt10">
          一个人要离开2046，需要多长的时间？没有人知道。有人可以毫不费力地离开，但是对于某些人来说，却需要花很长时间，付出很多的努力，甚至遍体鳞伤。
        </div>
      </el-footer>
    </div>
    <report-show v-else></report-show>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";
import { permission } from "./reportDetail/data";
import reportShow from "./reportShow.vue";
@Component({
  components: {
    reportShow,
  },
})
export default class reportIndex extends Vue {
  form = {
    res: "",
  };
  res = "";
  public user: string = "";
  private isShow: boolean = false;
  public bg: any = {
    // background: "url(" + require("@/assets/jpg/bg.jpg") + ") no-repeat",
    zIndex: -2,
    backgroundSize: "cover",
  };
  public login() {
    let name = this.user;
    if (permission && permission.indexOf(name) !== -1) {
      this.isShow = true;
      this.setUser();
    } else {
      this.$message.error("暂时没有注册你的信息哦！");
    }
  }
  public setUser() {
    this.$store.commit("setUser", this.user);
  }
}
</script>
<style lang="less" scoped>
.bgc::before {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}
.ct {
  width: 100%;
  word-spacing: 6px;
  font-size: 30px;
}
.btmWord {
  font-style: oblique;
  font-size: 18px;
  padding: 30px;
  color: rgba(255, 255, 255, 0.5);
}
</style>