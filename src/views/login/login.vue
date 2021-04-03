<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item prop="name">
        <el-input
          v-model="form.name"
          type="text"
          placeholder="请输入账号"
          clearable
        >
          <i slot="prefix" class="el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          clearable
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
    </el-form>
    <div class="mt50">
      <el-button @click="submitForm">登录</el-button>
    </div>
    <el-footer>
      <div class="mt50">
        <router-link target="_blank" :to="{ path: '/changePwd' }"
          >修改密码</router-link
        >
        <el-divider direction="vertical"></el-divider>
        <router-link target="_blank" :to="{ path: '/retrievePwd' }"
          >忘记密码</router-link
        >
      </div>
    </el-footer>
  </div>
</template>
<script>
import { loginUser } from "@/api/user.js";
export default {
  data() {
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else {
        if (this.form.password !== "") {
          this.$refs.form.validateField("validatePwd");
        }
        callback();
      }
    };
    return {
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号！", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ validator: validatePwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    checkLogin() {
      loginUser(this.form).then((res) => {
        console.log(res);
      });
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.checkLogin();
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>