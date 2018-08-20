<template>
    <div class="searchResult">
        <div class="page-wrapper">
            <ul class="result-list" v-if="resultAnswers!=null">
                <li v-for="(resultAnswer, index) in resultAnswers" :key="index">
                    <answer
                    :answerData="resultAnswer"
                    ></answer>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Answer from "@/components/Answer";
import { answer } from '@/common/api'
import { mapGetters } from 'vuex';

export default {
  components: {
    Answer
  },
  data () {
      return {
        resultAnswers: []
      }
  },
  mounted () {
    this.search(this.$route.query.searchValue)
  },
  // beforeRouteEnter (to, from, next) {
  // },
  methods: {
      search (searchValue) {
        answer.search(this.$route.query.searchValue, res => {
        this.resultAnswers = res.data
      })
    }
  },
  computed: {
      ...mapGetters([
          'userId'
      ])
  },
  watch: {
    '$route' (to, from) {
      this.search(to.query.searchValue)
    }
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

