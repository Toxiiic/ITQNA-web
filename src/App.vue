<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div style="height:62px">&nbsp;</div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Home from '@/views/Home.vue'
import { user } from '@/common/api'
import { mapMutations } from 'vuex'

export default {
  components: {
    NavBar,
    Home
  },
  mounted () {
    user.getLoginState(res => {
      this.setLogined(res.logined)
    })
  },
  methods: {
    ...mapMutations([
      'setLogined'
    ]),
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

.page-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}


</style>
