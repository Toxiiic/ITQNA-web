<template>
    <div class="answer">
        <div class="author">
            <img class="avatar" src="https://pic1.zhimg.com/50/v2-b5d3d6f8403bbb284b6afb876b134527_xs.jpg 2x" alt="">
            <span class="name">{{displayData.user_name}}</span>
            <span class="motto">{{displayData.user_motto}}</span>
        </div>
        <router-link class="title" v-if="showQuestion" :to="'/question/'+displayData.qs_id">
            <!-- 如何评价任天堂Labo发布第三弹——海陆空驾驶套装 「Vehicle KIT」？ -->
            {{displayData.title}}
        </router-link>
        <div class="content" v-if="!onlyShowQuestion">
            <!-- 应该是早就做好了，没有首发放出来是怕零售商积货。把它放到第二批是有考量的，第二批虽然作为电子游戏的游戏性更高，但是耐用性比不过第一批。一个主体搭配3种操作方式很棒，但也提高了损坏的概率。我觉得比较理想的方式是在零售商处设立维修点，提供白板，根据客户需求随时打印零件替换，当然我这也是纸上谈兵，维修点少了没意义，多了不合算。 -->
            {{displayData.content}}
        </div>
        <div v-if="!onlyShowQuestion">
            <a-button
                class="answer-oprt-button"
                @click="onClickLike">
                <a-icon type="caret-up"></a-icon> 赞同 {{like_count}}
            </a-button>
            <div class="answer-oprt-button"><a-icon type="caret-down"></a-icon></div>
            <div class="answer-oprt-button"><a-icon type="message"></a-icon> 47条评论</div>
            <div class="answer-oprt-button"><a-icon type="star-o"></a-icon> 收藏</div>
        </div>
    </div>
</template>

<script>
import { userLikeAnswer } from '@/common/api'
import { mapGetters } from 'vuex';
export default {
    props: {
        showQuestion: {
            default: true
        },
        onlyShowQuestion: {
            default: false
        },
        /**
         * 回答需要
         * title
         * content
         * ans_id
         * qs_id
         * user_name
         * user_head_url
         * user_motto
         * like_count
         * 
         * 问题需要
         * title
         * qs_id
         * user_name
         * user_head_url
         * user_motto
         * 
         * */
        displayData: {}
    },
    data () {
        return {
            like_count: this.displayData.like_count
        }
    },
    methods: {
        onClickLike () {
            userLikeAnswer.create({
                answer_id: this.displayData.ans_id,
                user_id: this.userId
            }, res => {
                this.like_count ++
            })

        }
    }, computed: {
        ...mapGetters([
            'userId'
        ])
    }
}
</script>

<style lang="scss">
    .answer {
            margin: 13px;
        .author {
            .avatar {

            }
            .name {
font-size: 15px;
    font-weight: 500;
        margin-right: 10px;
            }
            .motto {

            }
        }


        .title {
            touch-action: manipulation;
            font-size: 20px;
            font-weight: bold;
            margin: 10px 0 6px;
            display: block;
        }
        .content {
            font-size: 14px;
    width: 800px;
        }
        .answer-oprt-button {
            background: #edf6fd;
    border-radius: 4px;
    color: #0090ff;
    display: inline-block;
    padding: 6px 13px;
    font-weight: normal;
    margin: 7px;
    margin-left: 0;
    cursor: pointer;
    border: none;
        }
    }
</style>

