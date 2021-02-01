<template>
  <el-container>
    <el-main>
      <h3>
        如果时间倒流 回到我们的<span class="textData"> {{ myData.date }}</span>
      </h3>
      <div style="margin-bottom: 2px">——选对了才能看到小奖励！</div>
      <el-card>
        <div v-for="(item, index) in testList" :key="index">
          <div class="ques">{{index + 1}}. {{ item.question }}</div>
          <div>
            <el-radio-group v-model="pickList[index]">
              <el-radio v-for="(o, oi) in item.options" :key="oi" :label="o">{{
                o
              }}</el-radio>
              <el-divider>(●'◡'●)</el-divider>
            </el-radio-group>
          </div>
        </div>
      </el-card>
    </el-main>
    <el-footer>
      <el-button @click="check">提 交</el-button>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Inject, Emit } from "vue-property-decorator";
@Component({
  components: {},
})
export default class test extends Vue {
  @Emit() private toEnd(): void {}
  @Inject("myData") private readonly myData: any;
  private pickList: Array<string> = ["", "", ""];
  private answerList: Array<string> = [];
  public check(): boolean {
    let len = this.answerList.length;
    for (let i = 0; i < len; i++) {
      if (this.pickList[i] != this.answerList[i]) {
        this.$message.error("选错啦！友尽友尽！");
        return false;
      }
    }
    this.$message.success("你真棒！！！");
    this.$emit('toEnd')
    return true;
  }
  private testList: any = []
  private noDataList: any = [
    {
      question: "你会对我说什么？",
      options: ["你好", "滚蛋", "我们在一起吧"],
      answer: "我们在一起吧",
    },
    {
      question: "你会觉得我？",
      options: ["人帅", "气质好", "未来可期"],
      answer: "人帅",
    },
    {
      question: "我为什么不理你？",
      options: ["我忙", "我很忙", "我坏"],
      answer: "我坏",
    },
  ];
  public created() {
    let td = this.myData.testList
    td ? this.testList = td : this.testList = this.noDataList
    td &&
      td.forEach((t: any) => {
        this.answerList.push(t.answer);
      });
  }
}
</script>
<style lang="less" scoped>
.ques {
  margin-bottom: 6px;
}
</style>