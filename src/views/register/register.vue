<template>
  <div>
    <span class="form-warning" v-if="formWarning">{{ formWarning }}</span>
    <el-form :model="form" ref="form">
      <el-form-item>
        <el-input
          v-model="form.username"
          type="text"
          placeholder="请输入账号"
          prop="umCode"
          clearable
        >
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          prop="password"
          clearable
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.checkPwd"
          type="password"
          placeholder="请重复输入密码"
          prop="checkPwd"
          clearable
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.email"
          type="password"
          placeholder="请输入邮箱"
          prop="email"
          clearable
        >
          <i slot="prefix" class="el-icon-message"></i>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submitForm">注册</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations } from "vuex";
import { isEmail, isNotEmpty } from "@/common/util.js";
@Component({})
export default class register extends Vue {
  /**
   * 变量
   */
  public formWarning = "1";
  form = {
    username: "",
    password: "",
    checkPwd: "",
    email: "",
  };
  rule = [
    {
      validator: isNotEmpty(this.form.username),
      warning: "账号不能为空",
    },
    {
      validator: isNotEmpty(this.form.password),
      warning: "密码不能为空",
    },
  ];
  /**
   * 方法
   */
  validateForm(rule: any) {
    console.log(this.form.username);
    let judge = true;
    for (let r of rule) {
      if (!r.validator) {
        this.formWarning = r.warning;
        judge = false;
        break;
      }
    }
    return judge;
  }
  // validatePwd = (rule: any, value: any, callback: any) => {
  //   callback(new Error("请输入密码"));
  //   console.log("1");
  //   if (value === "") {
  //     callback(new Error("请输入密码"));
  //   } else {
  //     if (this.form.password !== "") {
  //       let form: any = this.$refs.form;
  //       form.validateField("password");
  //     }
  //     callback();
  //   }
  // };
  submitForm = () => {
    console.log("this: ", this);
    this.formWarning = "12312";

    // this.validateForm(this.rule)
  };
  // public user: string = "";
  // public setUser() {
  //   this.$store.commit("setUser", this.user);
  // }
}
</script>
<style lang="less" scoped>
</style>