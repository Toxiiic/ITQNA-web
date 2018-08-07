<template>
    <div class="login-page fullscreen">

        <div class="panel">

            <div class="logo">ITQ&A</div>

            <a-tabs class="tabs" defaultActiveKey="1">
                <a-tab-pane tab="登陆" key="1" @click="loginTab = true">
                    <a-form>
                        <a-form-item>
                        <a-input type="text" placeholder="用户名">
                            <a-icon slot="prefix" type="user" />
                        </a-input>
                        </a-form-item>
                        <a-form-item>
                        <a-input type="password" placeholder="密码">
                            <a-icon slot="prefix" type="key" />
                        </a-input>
                        </a-form-item>
                        <a-button class="w-full" type="primary">登陆</a-button>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane tab="注册" key="2" @click="loginTab = false">
                    <a-form>
                        <a-form-item>
                        <a-input type="text" placeholder="用户名">
                            <a-icon type="user" />
                        </a-input>
                        </a-form-item>
                        <a-form-item>
                        <a-input type="password" placeholder="密码">
                            <a-icon type="key" />
                        </a-input>
                        </a-form-item>
                        <a-form-item>
                        <a-input type="password" placeholder="确认密码">
                            <a-icon type="key" />
                        </a-input>
                        </a-form-item>
                        <a-button class="w-full" type="primary">登陆</a-button>
                    </a-form>
                </a-tab-pane>
            </a-tabs>

        </div>
    </div>
</template>

<script>
import { Input, Button } from "ant-design-vue";

export default {
  data() {
    return {
      loginTab: true
    };
  },
  components: {
    Input,
    Button
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

