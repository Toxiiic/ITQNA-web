<template>
  <div id="app">
    <nav-bar :headUrl="headUrl"></nav-bar>
    <div style="height:62px">&nbsp;</div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Home from '@/views/Home.vue'
import { user } from '@/common/api'
import { verifyTokenAndSaveId } from './common/util'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
    Home
  },
  data () {
    return {
      headUrl: null
    }
  },
  mounted () {
    verifyTokenAndSaveId(() => {
      //验证token成功之后，
      user.show(this.userId, res => {
          this.headUrl = res.data[0].head_url
      })
    })
  },
  methods: {
    ...mapMutations([
      'setUserId'
    ]),
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  }
}
</script>


<style lang="scss">
$brand-color: #1890ff;
$shadow-color: #f4f8fb;

ul {
  padding: 0;
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background: #f2f6f9;
  min-height: 100vh;
  padding-bottom: 50px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fullscreen {
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  display: block;
  top: 0;
}

.ib {
  display: inline-block;
  vertical-align: middle;
}
.vt {
  vertical-align: top;
}
.w-full {
  width: 100%;
}
.float-right {
  float: right;
}

.page-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}


</style>
