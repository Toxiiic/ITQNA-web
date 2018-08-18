<template>
    <div class="nav-bar">
        <div class="page-wrapper">
            <div class="ib logo">ITQ&A</div>
            <a-input class="ib search-input" style="width: 300px" placeholder="搜索"></a-input>
            <a-button class="ib" type="primary" @click="questionModalOpen=true">提问</a-button>
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
            <router-link to="/user">
                <img class="avatar" src="@/assets/logo.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
import { question } from '@/common/api'
import { mapGetters } from 'vuex';

export default {
    components: {
    },
    data () {
        return {
            confirmLoading: false,
            questionModalOpen: false
        }
    },
    methods: {
        submitQuestion () {
            this.confirmLoading = true
            let formData = this.questionForm.getFieldsValue()
            formData.ask_user_id = this.userId
            question.create(formData, res => {
                this.confirmLoading = false
                this.questionModalOpen = false
            })
        }
    },
    computed: {
        ...mapGetters([
            'userId'
        ])
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


