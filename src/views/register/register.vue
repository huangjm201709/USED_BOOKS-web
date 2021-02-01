<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item>
        <el-input
          v-model="form.umCode"
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
// import { isEmail } from "@/common/util.js";
@Component({})
export default class register extends Vue {
  validatePwd = (rule: any, value: any, callback: any) => {
    console.log('1');
    if (value === "") {
      callback(new Error("请输入密码"));
    } else {
      if (this.form.password !== "") {
        let form: any = this.$refs.form;
        form.validateField("password");
      }
      callback();
    }
  };
  validateCheckPwd: any = (rule: any, value: any, callback: any) => {
    console.log('1');
    if (value === "") {
      callback(new Error("请再次输入密码"));
    } else if (value !== this.form.checkPwd) {
      callback(new Error("两次输入密码不一致!"));
    } else {
      callback();
    }
  };
  public form = {
    umCode: "",
    password: "",
    checkPwd: "",
    email: "",
  };
  public rules = {
    umCode: [{ required: true, message: "请输入账号", trigger: "change" }],
    password: [{ validator: this.validatePwd, trigger: "blur" }],
    checkPwd: [{ validator: this.validateCheckPwd, trigger: "blur" }],
  };
  submitForm() {
    let ref: any = this.$refs.form;
    ref.validate((valid: any) => {
      if (valid) {
        // let params = {
        //   umCode: this.form.umCode, //用户名
        //   password: this.form.password, //密码
        // };
        // this.successFunc(params); //执行验证通过函数
        console.log('valid',valid);
      } else {
        alert("s");
        return false;
      }
    });
  }
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