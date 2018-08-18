<template>
    <div class="user">
        <img src="" alt="">
        <div>
            <div>{{user.name}}</div>
            <div>{{user.motto}}</div>
        </div>
        
        <a-button></a-button>
        <a-input></a-input>
    </div>

</template>


<script>
import { user } from '@/common/api'
import { mapGetters } from 'vuex';

export default {
    components: {
    },
    data () {
        return {
            user: {}
        }
    },
    mounted () {
        user.show(this.userId, res => {
            this.user = res.data
        })
    },
    computed: {
        ...mapGetters([
            'userId'
        ])
    }
}
</script>

<style lang="scss">

</style>

