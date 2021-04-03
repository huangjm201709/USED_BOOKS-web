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
      <el-form-item prop="checkPwd">
        <el-input
          v-model="form.checkPwd"
          type="password"
          placeholder="请重复输入密码"
          clearable
        >
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input
          v-model="form.email"
          type="text"
          placeholder="请输入邮箱"
          clearable
        >
          <i slot="prefix" class="el-icon-message"></i>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submitForm">注册</el-button>
  </div>
</template>
<script>
import { registerUser } from "@/api/user.js";
import {isEmail} from "@/common/util.js";
export default {
  data() {
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码！"));
      } else {
        if (this.form.password !== "") {
          this.$refs.form.validateField("validateCheckPwd");
        }
        callback();
      }
    };
    var validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱！"));
      } else {
        if ( isEmail(this.form.email) ) {
          callback()
        } else {
          callback(new Error("请正确输入邮箱格式"));
        }
      }
    };
    return {
      form: {
        name: "",
        password: "",
        checkPwd: "",
        email: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号！", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [{ validator: validatePwd, trigger: "blur" }],
        checkPwd: [{ validator: validateCheckPwd, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    registerHandler() {
      registerUser(this.form).then(() => {
        
      });
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.registerHandler();
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