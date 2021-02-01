<template>
  <el-container>
    <el-main>
      <h4>时间老人 偷偷地写下了这些话</h4>
      <el-tabs type="border-card" class="mb10">
        <span>
          {{ myData.secret }}
        </span>
        <div class="rf">————JM</div>
      </el-tabs>
      <el-button @click="showB">点这里查看悄悄话</el-button>
      <el-tabs type="border-card" :class="[active ? 'isActive' : 'notA']">
        <span>
          {{ myData.secretMore }}
        </span>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
@Component({
  components: {},
})
export default class secret extends Vue {
  @Inject("myData") private readonly myData: any;
  private active: boolean = false;
  public showB() {
    this.active = true;
  }
}
</script>
<style lang="less" scoped>
.el-main {
  height: calc(100% - 20px);
}
.isActive{
  margin-top:10px;
}
.notA{
  margin-top:10px;
  background:black;
  color: black;
}
// .el-tabs--border-card {
//   height: calc(100% - 50px);
//   /deep/ .el-tabs__content {
//     overflow-y: scroll;
//     height: 350px;
//   }
// }
</style>