<template>
    <div class="question">
        <div>
            <div>如何评价任天堂Labo发布第三弹——海陆空驾驶套装</div>
            <div>
                发售日2018.9.14，正好去年下半年官方独家ND一周年。
            </div>
            <div>
                <a-button type="primary">关注问题</a-button>
                <a-button>写回答</a-button>
            </div>
        </div>

        <ul>
            <li>
                <answer :showQuestion="false"></answer>
            </li>
        </ul>
    </div>
</template>

<script>
import Button from 'ant-design-vue'
import Answer from '@/components/Answer'

export default {
    components: {
        Answer
    }
}
</script>
