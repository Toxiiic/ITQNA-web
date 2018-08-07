<template>
    <div class="nav-bar">
        <div class="page-wrapper">
            <div class="ib logo">ITQ&A</div>
            <a-input class="ib search-input" style="width: 300px" placeholder="搜索"></a-input>
            <a-button class="ib" type="primary">提问</a-button>
            <router-link to="/user">
                <img class="avatar" src="@/assets/logo.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style lang="scss">
    .nav-bar {
            background: white;
    box-shadow: 0 10px 20px 0 #f4f8fb;
    padding: 8px 0;
    position: fixed;
    width: 100%;

        .logo {
            font-weight: bolder;
            font-size: 30px;
            color: #1890ff;
        }
        .avatar {
                width: 36px;
        float: right;
        margin: 5px;
        }
        input.search-input {
            margin: 0 10px 0 100px;
        }
    }
</style>


