<template>
    <div class="user" v-if="logined">
        <img src="" alt="">
        <div>
            <div>孟德尔</div>
            <div>发送到发送到发送到发送到发</div>
        </div>
        
        <a-button></a-button>
        <a-input></a-input>
    </div>

</template>


<script>
import Button from 'ant-design-vue'
import { user } from '@/common/api'
import { mapGetters } from 'vuex';

export default {
    components: {
        Button
    },
    beforeRouteEnter (to, from, next) {
        //每当进入此页面时，发出请求是否已登陆
        next(vm => {
            if(!vm.logined) {
                vm.$router.push('login')
            }
        })
    },
    computed: {
        ...mapGetters([
            'logined'
        ])
    }
}
</script>

<style lang="scss">

</style>

