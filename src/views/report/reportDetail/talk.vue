<template>
  <el-container>
    <el-main>
      <h4>时光带走过那些 最有趣的小对话 (●ˇ∀ˇ●)</h4>
      <el-tabs type="border-card">
        <el-tab-pane
          v-for="(talk, index) in myData.talkList"
          :key="index"
          :label="talk.time"
        >
          <div v-for="(item, i) in talk.words" :key="i">
            <div v-if="DWord(item)[0] == 'y'" class="lf talkItem ltext">
              <el-avatar>YOU</el-avatar>
              <div class="talkBox">
                <span>{{ DWord(item)[1] }}</span>
              </div>
            </div>
            <div v-else class="rf talkItem rtext">
              <div class="talkBox rightBox">
                <span>{{ DWord(item)[1] }}</span>
              </div>
              <el-avatar class="ra">ME</el-avatar>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
@Component({
  components: {},
})
export default class talk extends Vue {
  @Inject("myData") private readonly myData: any;
  public DWord(s: string): Array<string> {
    return s.split("-");
  }
}
</script>
<style lang="less" scoped>
.el-main {
  overflow: hidden;
}
.el-tabs--border-card {
  height: calc(100% - 50px);
  /deep/ .el-tabs__content {
    overflow-y: scroll;
    height: 250px;
  }
}
.talkItem {
  width: 80%;
  display: flex;
  align-items: center;
}
.talkBox {
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 10px;
}
.rightBox{
  margin-left: auto;
}
.ra{
  background: cornflowerblue !important;
}
.el-avatar {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  background: rgba(137, 157, 192, 0.8);
}
.el-avatar--circle {
  border-radius: 50%;
}
</style>