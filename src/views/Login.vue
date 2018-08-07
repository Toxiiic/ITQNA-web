<template>
    <div class="login-page fullscreen">
        <div>
            <span @click="loginTab = true">登陆</span>
            <span @click="loginTab = false">注册</span>
        </div>

        <div v-show="loginTab">
            <a-input type="text" placeholder="用户名">
                <a-icon slot="prefix" type="user" />
            </a-input>
            <a-input type="password" placeholder="密码">
                <a-icon slot="prefix" type="key" />
            </a-input>
            <a-button type="primary">登陆</a-button>
        </div>
        <div v-show="!loginTab">
            <a-input type="text" placeholder="用户名">
                <a-icon slot="prefix" type="user" />
            </a-input>
            <a-input type="password" placeholder="密码">
                <a-icon slot="prefix" type="key" />
            </a-input>
            <a-input type="password" placeholder="密码">
                <a-icon slot="prefix" type="key" />
            </a-input>
            <a-button type="primary">注册</a-button>
        </div>
    </div>
</template>

<script>
import { Input, Button } from 'ant-design-vue'

export default {
    data () {
        return {
            loginTab: true
        }
    },
    components: {
        Input,
        Button
    }
}
</script>
