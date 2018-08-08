<template>
    <div class="question">
        <div class="question-panel">
            <div class="page-wrapper">
                <div class="title">如何评价任天堂Labo发布第三弹——海陆空驾驶套装</div>
                <div class="desc">
                    发售日2018.9.14，正好去年下半年官方独家ND一周年。
                </div>
                <div>
                    <a-button style="margin-right:10px" type="primary">关注问题</a-button> 
                    <a-button>写回答</a-button>
                </div>
            </div>
        </div>
        <div class="page-wrapper">
            <ul class="answer-list">
                <li>
                    <answer :showQuestion="false"></answer>
                </li>
                <li>
                    <answer :showQuestion="false"></answer>
                </li>
                <li>
                    <answer :showQuestion="false"></answer>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Answer from "@/components/Answer";

export default {
  components: {
    Answer
  }
};
</script>

<style lang="scss">
.question {
  .question-panel {
    background: white;
    padding: 20px 0;
    .title {
      font-size: 23px;
      font-weight: bolder;
    }
    .desc {
      margin: 17px 0;
      font-size: 14px;
    }
  }
  ul.answer-list {
    margin-top: 10px;
    background: white;
    box-shadow: 0 0 10px 0 #f2f6f9;
    li {
      padding: 10px;
      border-bottom: 1px solid #f1f6f9;
    }
  }
}
</style>

