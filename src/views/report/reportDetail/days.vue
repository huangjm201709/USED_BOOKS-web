<template>
  <el-container>
    <el-main>
      <h2>Hi~</h2>
      <h3>我们认识已经</h3>
      <div class="textData f40">{{myData.days}}天</div>
      <div class="mt10">那一天，你真的够幸运的！</div>
      <h3>你跟我说的第一句话是</h3>
      <div class="textData f30">{{myData.firstWord}}</div>
      <div class="mt10">
        <h4>掐指一算 我们碰撞出火花的几率为 ( ͡• ͜ʖ ͡• )</h4>
      <el-progress :text-inside="true" :stroke-width="25" :percentage="myData.perc"></el-progress>
      </div>
    </el-main>
  </el-container>

</template>

<script lang="ts">
import { Component, Vue,Inject } from "vue-property-decorator";
@Component({
  components: {},
})
export default class days extends Vue {
  @Inject('myData') private readonly myData: any
  
}
</script>
<style lang="less" scoped>
.f40{
  font-size: 40px;
}
.f30{
  font-size: 30px;
}
</style>