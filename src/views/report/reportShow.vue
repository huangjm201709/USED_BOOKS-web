<template>
  <el-container>
    <el-header>
      <el-button
        class="lf mt10 backBtn"
        @click="backCard()"
        v-show="cardIndex != 0"
        >Back</el-button
      >
    </el-header>
    <el-main>
      <el-card shadow="always" class="card">
        <div style="width: 100%; text-align: left">
          <el-tag class="tag">Page {{ cardIndex + 1 }}</el-tag>
        </div>
        <days v-if="cardIndex == 0"></days>
        <talk v-if="cardIndex == 1"></talk>
        <test v-if="cardIndex == 2" @toEnd="toEnd"></test>
        <secret v-if="cardIndex == 3"></secret>
      </el-card>
    </el-main>
    <el-footer>
      <el-button
        class="frontBtn"
        @click="frontCard()"
        v-show="cardIndex != 2"
        >{{ tipList[cardIndex] }}</el-button
      >
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import days from "./reportDetail/days.vue";
import talk from "./reportDetail/talk.vue";
import test from "./reportDetail/test.vue";
import secret from "./reportDetail/secret.vue";
import { data } from "./reportDetail/data";
@Component({
  components: {
    days,
    talk,
    test,
    secret,
  },
})
export default class reportShow extends Vue {
  private user: string = this.$store.state.user;
  private toEnd(): void {
    this.cardIndex = 3;
  }
  @Provide("myData") private pData = data[this.user];
  public cardIndex: number = 0;
  public tipList: any = ["解锁更多姿势", "进入小测试环节", "", "回到第一页"];
  public frontCard() {
    if (this.cardIndex == 3) {
      this.cardIndex = 0;
    } else {
      this.cardIndex++;
    }
  }
  public backCard() {
    this.cardIndex--;
  }
}
</script>
<style lang="less" scoped>
.card {
  background: rgba(255, 255, 255, 0.6);
}
.tag {
  font-size: 16px;
}
.el-card__body {
  height: calc(100% - 40px);
}
.backBtn {
  color: #fff;
  background: rgba(98, 65, 24, 0.5);
}
.frontBtn {
  color: #fff;
  background:rgba(211, 176, 4,0.5);
}
</style>