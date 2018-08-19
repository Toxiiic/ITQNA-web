<template>
    <div class="question">
        <div class="question-panel">
            <div class="page-wrapper">
                <div class="title">{{qsData.title}}</div>
                <div class="desc">
                    <!-- 发售日2018.9.14，正好去年下半年官方独家ND一周年。 -->
                    {{qsData.desc}}
                </div>
                <div>
                    <a-button style="margin-right:10px" type="primary">关注问题</a-button> 
                    <a-button>写回答</a-button>
                </div>
            </div>
        </div>
        <div class="page-wrapper">
            <ul class="answer-list" v-if="ansData!=null">
                <li v-for="(ans, index) in ansData" :key="index">
                    <answer
                    :showQuestion="false"
                    :displayData="ans"
                    ></answer>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Answer from "@/components/Answer";
import { question, answer } from '@/common/api'

export default {
  components: {
    Answer
  },
  data () {
      return {
            qsData: {},
            ansData: null
      }
  },
  beforeRouteEnter (to, from, next) {
      next(vm => {
        // console.log(vm.$route.params)
        question.show(vm.$route.params.qs_id, res => {
            vm.qsData = res.data[0]
        })
        answer.qsId(vm.$route.params.qs_id, res => {
            vm.ansData = res.data
        })
      })
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

