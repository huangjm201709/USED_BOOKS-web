<template>
  <div class="entry-ct">
    <el-container>
      <el-header>
        <h1>二手书籍交易平台</h1>
      </el-header>
      <el-main>
        <div class="rf radio-btn">
          <el-radio-group v-model="index">
            <el-radio-button label="0">登录</el-radio-button>
            <el-radio-button label="1">注册</el-radio-button>
          </el-radio-group>
        </div>
        <div class="mt50">
          <Login v-if="index == '0' "></Login>
          <Register v-else></Register>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import Register from '@/views/register/register.vue';
import Login from '@/views/login/login.vue';
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Register,
    Login,
  },
})
export default class Entry extends Vue {
  public index = "0";
  form = {
    umCode: "",
  }
  created() {
    console.log('form: ');
  }
}
</script>
<style lang="less" scoped>
.el-main {
  width: 80%;
  margin: 0 auto;
}
.el-button {
  width: 100%;
}
.entry-ct {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>