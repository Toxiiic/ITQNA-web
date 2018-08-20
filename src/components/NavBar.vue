<template>
    <div class="nav-bar">
        <div class="page-wrapper">
            <router-link to="/home" class="ib logo">ITQ&A</router-link>
            <a-input-search
                class="ib search-input"
                style="width: 300px"
                placeholder="搜索"
                @search="onSearch"
                enterButton
                />
            <a-button
                class="ib"
                type="primary"
                @click="questionModalOpen=true"
                v-if="userId!=null">提问</a-button>
            <a-modal
                title="写下你的问题"
                :visible="questionModalOpen"
                @ok="submitQuestion"
                @cancel="questionModalOpen=false"
                :confirmLoading="confirmLoading"
                okText="提交问题"
                cancelText="取消"
            >
                <a-form :autoFormCreate="form => this.questionForm=form">
                    <a-form-item fieldDecoratorId="title">
                        <a-input placeholder="问题标题"></a-input>
                    </a-form-item>
                    <a-form-item fieldDecoratorId="desc">
                        <a-textarea placeholder="问题描述，详细信息"></a-textarea>
                    </a-form-item>
                </a-form>
            </a-modal>
            <!-- <router-link to="/user">
                <img class="avatar" src="@/assets/logo.png" alt="">
            </router-link> -->
            <a-dropdown v-if="userId!=null">
                <a class="ant-dropdown-link float-right" href="#">
                    <img class="avatar" :src="headUrl" alt="">
                </a>
                <a-menu slot="overlay" style="width:200px">
                    <a-menu-item>
                        <router-link to="/user">个人主页</router-link>
                    </a-menu-item>
                    <a-menu-item>
                        <a @click="onClickLogout">退出登陆</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
import { question, user } from "@/common/api";
import { logout } from "@/common/util";
import { mapGetters } from "vuex";
import router from '@/router'

export default {
  components: {},
  props: [
      'headUrl'
  ],
  data() {
    return {
      confirmLoading: false,
      questionModalOpen: false,
      userData: {}
    };
  },
  mounted () {
    //   user.show(this.userId, res => {
    //       this.userData = res.data[0]
    //   })
  },
  methods: {
    submitQuestion () {
      this.confirmLoading = true;
      let formData = this.questionForm.getFieldsValue();
      formData.ask_user_id = this.userId;
      question.create(formData, res => {
        this.confirmLoading = false;
        this.questionModalOpen = false;
      });
    },
    onClickLogout () {
        //退出登陆
        logout()
    },
    onSearch (value) {
        // this.$router.go(-1)
        this.$router.push({
            path: 'result',
            query: {
                searchValue: value
            }
        })
    }
  },
  computed: {
    ...mapGetters(["userId"])
  }
};
</script>

<style lang="scss">
.nav-bar {
  background: white;
  box-shadow: 0 10px 20px 0 #f4f8fb;
  padding: 8px 0;
  position: fixed;
  width: 100%;
  z-index: 10;

  .logo {
    font-weight: bolder;
    font-size: 30px;
    color: #1890ff;
  }
  .avatar {
    width: 36px;
    height: 36px;
    margin: 5px;
    object-fit: cover;
    border-radius: 3px;
  }
  .search-input {
    margin: 0 10px 0 100px;
  }
}
</style>


