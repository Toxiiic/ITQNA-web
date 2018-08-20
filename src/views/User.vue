<template>
    <div class="user">
        <div class="page-wrapper">
            <img class="avatar" :src="user.head_url" alt="">
            <div class="info">
                <div class="name">{{user.name}}</div>
                <div class="motto">{{user.motto}}</div>
            </div>
            
            <!-- <a-button></a-button>
            <a-input></a-input> -->

            <div class="detail">
                <a-tabs class="tabs" defaultActiveKey="1">
                <a-tab-pane tab="回答" key="1">
                    <ul>
                        <li v-for="(answer, index) in answers" :key="index">
                            <answer :answerData="answer"></answer>
                        </li>
                    </ul>
                </a-tab-pane>
                <a-tab-pane tab="点赞" key="2">
                    <ul>
                        <li v-for="(answer, index) in likeAnswers" :key="index">
                            <answer :answerData="answer"></answer>
                        </li>
                    </ul>
                </a-tab-pane>
                <a-tab-pane tab="提问" key="3">
                    <ul>
                        <li v-for="(question, index) in questions" :key="index">
                            <answer :answerData="question"
                                onlyShowQuestion="true"></answer>
                        </li>
                    </ul>
                </a-tab-pane>
            </a-tabs>
            </div>
        </div>
    </div>

</template>


<script>
import { user, answer, question } from '@/common/api'
import { mapGetters } from 'vuex';
import Answer from '@/components/Answer'

export default {
    components: {
        Answer
    },
    data () {
        return {
            user: {},
            answers: [],
            likeAnswers: [],
            questions: []
        }
    },
    mounted () {
        user.show(this.userId, res => {
            this.user = res.data[0]
        })
        answer.userId(this.userId, res => {
            this.answers = res.data
        })
        answer.userLike(this.userId, res => {
            this.likeAnswers = res.data
        })
        question.userAsk(this.userId, res => {
            this.questions = res.data
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
    .user {
        padding-top: 50px;

        .avatar {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 6px;
        }
        .info {
            display: inline-block;
            vertical-align: bottom;
            margin-left: 20px;
            .name {
                font-size: 25px;
                font-weight: bolder;
            }
            .motto {
                font-size: 15px;
                margin-top: 6px;
            }
        }
        .detail {
            background: white;
                margin-top: 30px;

                ul {
                    li {
                        padding: 10px;
                    }
                }
        }
    }
</style>

