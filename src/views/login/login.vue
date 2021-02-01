<template>
  <div>
    <el-form :model="form" ref="form">
      <el-form-item>
        <el-input v-model="form.umCode" type="text" placeholder="请输入账号">
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="mt50">
      <el-button>登录</el-button>
    </div>
    <el-footer>
      <div class="mt50">
        <span>修改密码</span>
        <el-divider direction="vertical"></el-divider>
        <span>忘记密码</span>
      </div>
    </el-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";
@Component({})
export default class Login extends Vue {
  public form = {
    umCode: "",
    password: "",
  };
  public user: string = "";
  public login() {
    // let name = this.user;
    // if (permission && permission.indexOf(name) !== -1) {
    //   this.isShow = true;
    //   this.setUser();
    // } else {
    //   this.$message.error("暂时没有注册你的信息哦！");
    // }
  }
  public setUser() {
    this.$store.commit("setUser", this.user);
  }
}
</script>
<style lang="less" scoped>
</style>