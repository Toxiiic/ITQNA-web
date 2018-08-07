<template>
    <div class="nav-bar page-wrapper">
        <div class="ib logo">ITQNA</div>
        <div class="ib">
            <a-input placeholder="搜索"></a-input>
        </div>
        <div class="ib">提问</div>
        <router-link to="/user">
            <img class="avatar" src="@/assets/logo.png" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style lang="scss">
    .logo {
        font-weight: bolder;
        font-size: 30px;
        color: #1890ff;
    }
    .avatar {
        width: 30px;
    }
</style>


