<template>
  <div class="pwd-ct">
    <el-container>
      <el-header>
        <h2>闲者-修改密码</h2>
      </el-header>
      <el-main>
        <el-form :model="form" ref="form" :rules="rules">
          <el-form-item prop="name" label="账号">
            <el-input
              v-model="form.name"
              type="text"
              placeholder="请输入账号"
              clearable
            >
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="oldPwd" label="旧密码">
            <el-input
              v-model="form.oldPwd"
              type="password"
              placeholder="请输入旧密码"
              clearable
            >
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="newPwd" label="新密码">
            <el-input
              v-model="form.newPwd"
              type="password"
              placeholder="请输入新密码"
              clearable
            >
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="checkNewPwd">
            <el-input
              v-model="form.checkNewPwd"
              type="password"
              placeholder="请重复输入新密码"
              clearable
            >
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
        </el-form>
        <el-button @click="submitForm">修改密码</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { changePwd } from "@/api/user.js";
export default {
  data() {
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码！"));
      } else {
        if (this.form.newPwd !== "") {
          this.$refs.form.validateField("validateCheckPwd");
        }
        callback();
      }
    };
    var validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码！"));
      } else if (value !== this.form.newPwd) {
        callback(new Error("两次输入新密码不一致！"));
      } else if (value == this.form.oldPwd) {
        callback(new Error("新旧密码不能相同！"));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: "",
        oldPwd: "",
        checkNewPwd: "",
        newPwd: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号！", trigger: "blur" }],
        oldPwd: [
          { required: true, message: "请输入旧密码！", trigger: "blur" },
        ],
        newPwd: [{ validator: validatePwd, trigger: "blur" }],
        checkNewPwd: [{ validator: validateCheckPwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    changePwdHandler() {
      let params = JSON.parse(JSON.stringify(this.form));
      delete params.checkNewPwd;
      changePwd(params).then(() => {});
    },
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.changePwdHandler();
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-main {
  width: 80%;
  margin: 0 auto;
}

.el-button {
  margin: 20px;
  width: 50%;
}
.pwd-ct {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /deep/ .el-form-item__error {
    font-size: 16px;
  }
}
</style>