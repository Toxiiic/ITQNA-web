<template>
  <div class="home page-wrapper">
    <ul class="home-feed">
      <li v-for="(qa, index) in QAs" :key="index">
        <answer
          :onlyShowQuestion="!qa.content"
          :answerData="qa"
        ></answer>
      </li>
      <!-- <li>
        <answer></answer>
      </li>
      <li>
        <answer></answer>
      </li> -->
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Answer from '@/components/Answer.vue'
import { question, answer } from '@/common/api'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Answer
  },
  data () {
    return {
      QAs: []
    }
  },
  mounted () {
    question.noAnswer(res => {
      let questions = res.data
      
      answer.index(res => {
        let answers = res.data

        //区分q a：有content的是a
        this.QAs = questions.concat(questions, answers).shuffle()
      })
    })
  }
}
</script>


<style lang="scss">
ul.home-feed {
  li {
    padding: 10px;
    margin-top: 10px;
    background: white;
  }
}
</style>

