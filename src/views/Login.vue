<template>
    <div class="login-page fullscreen">

        <div class="panel">

            <div class="logo">ITQ&A</div>

            <a-tabs class="tabs" defaultActiveKey="1">
                <a-tab-pane tab="登陆" key="1" @click="loginTab = true">
                    <a-form @submit="onSubmitLogin" :autoFormCreate="form => this.loginForm=form">
                        <a-form-item fieldDecoratorId="username">
                            <a-input type="text" placeholder="用户名">
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item>
                        <a-form-item fieldDecoratorId="password">
                            <a-input type="password" placeholder="密码">
                                <a-icon slot="prefix" type="key" />
                            </a-input>
                        </a-form-item>
                        <a-button class="w-full" type="primary" htmlType="submit">登陆</a-button>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane tab="注册" key="2" @click="loginTab = false">
                    <a-form @submit="onSubmitRegister" :autoFormCreate="form => this.registerForm=form">
                        <a-form-item fieldDecoratorId="name">
                            <a-input type="text" placeholder="用户名">
                                <a-icon slot="prefix" type="user" />
                            </a-input>
                        </a-form-item>
                        <a-form-item fieldDecoratorId="password">
                            <a-input type="password" placeholder="密码">
                                <a-icon slot="prefix" type="key" />
                            </a-input>
                        </a-form-item>
                        <!-- <a-form-item fieldDecoratorId="password-again">
                            <a-input type="password" placeholder="确认密码">
                                <a-icon slot="prefix" type="key" />
                            </a-input>
                        </a-form-item> -->
                        <a-form-item fieldDecoratorId="motto">
                            <a-input type="text" placeholder="一句话签名">
                                <a-icon slot="prefix" type="edit" />
                            </a-input>
                        </a-form-item>
                        <a-form-item fieldDecoratorId="head_url">
                            <a-input type="url" placeholder="头像地址">
                                <a-icon slot="prefix" type="smile-o" />
                            </a-input>
                        </a-form-item>
                        <a-button class="w-full" type="primary" htmlType="submit">注册</a-button>
                    </a-form>
                </a-tab-pane>
            </a-tabs>

        </div>
    </div>
</template>

<script>
import { user } from '@/common/api'
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      loginTab: true
    };
  },
  mounted () {
  },
  methods: {
    onSubmitLogin() {
        user.login(this.loginForm.getFieldsValue(), (res) => {
            if(res.data.success) {
                this.setUserId(res.data.userId)
                window.localStorage.setItem('token', res.data.token)
                this.$router.push('user')
            }
        })
        console.log(this.loginForm.getFieldsValue());
    },
    onSubmitRegister() {
      console.log(this.registerForm.getFieldsValue());
      user.register(this.registerForm.getFieldsValue(), res => {

      })
    },
    ...mapMutations([
        'setUserId'
    ])
  }
};
</script>

<style lang="scss">
.login-page {
  text-align: center;
  background: -webkit-linear-gradient(left, #c6def1, #d9ecfb);

  .panel {
    width: 460px;
    display: inline-block;
    padding: 50px;
    background: white;
    margin-top: 120px;
    .logo {
      font-size: 37px;
      font-weight: bolder;
      color: #0090ff;
      margin-bottom: 15px;
    }
  }
}
</style>

