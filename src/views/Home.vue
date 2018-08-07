<template>
  <div class="home page-wrapper">
    <ul class="home-feed">
      <li>
        <answer></answer>
      </li>
      <li>
        <answer></answer>
      </li>
      <li>
        <answer></answer>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Answer from '@/components/Answer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Answer
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

