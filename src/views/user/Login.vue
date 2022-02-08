<template>
  <div class="user-login login-bg">
    <div class="user-login--content">
      <div class="left">
        <img class="login-box-bg" src="~@/assets/image/login-left.png" alt="" />
      </div>
      <div class="right">
        <a-form class="form" ref="formRef" :model="formState" :rules="rules" v-bind="layout">
          <h3 class="form-title">用户登录</h3>
          <a-form-item class="form-item" has-feedback name="username">
            <a-input class="input" v-model:value="formState.username" type="text" @keyup.enter="onSubmit()" placeholder="请输入用户名"
                     autocomplete="off" allow-clear />
          </a-form-item>
          <a-form-item class="form-item" has-feedback name="password">
            <a-input class="input" v-model:value="formState.password" type="password" @keyup.enter="onSubmit()" placeholder="请输入登录密码"
                     autocomplete="off" allow-clear />
          </a-form-item>
          <!--        <a class="forget-password">忘记密码?</a>-->
          <a-button class="login-button mt-24" type="primary" size="large" block @click="onSubmit()">登录</a-button>
        </a-form>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
  import { message } from 'ant-design-vue'
  import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from '@/store'

  interface FormState {
    username: string;
    password: string;
  }

  export default defineComponent({
    setup() {
      const formRef = ref()
      const $route = useRoute()
      const $router = useRouter()
      const { userStore } = useStore()

      const redirect: any = decodeURIComponent(($route.query.redirect as any) || '/welcome')

      const formState: UnwrapRef<FormState> = reactive({
        username: 'development@sinsegye.com.cn',
        password: 'metafacture@admin'
      })

      console.log(import.meta.env)

      const rules = {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }

      const layout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 24 }
      }

      const resetForm = () => {
        formRef.value.resetFields()
      }

      const onSubmit = () => {
        formRef.value.validate().then(() => {
          userStore.handleLogin(toRaw(formState)).then((res: any) => {
            console.log(res)
            if (res.code !== '0000') {
              message.error(res.msg)
              return
            }
            console.log('登录成功', typeof redirect)
            console.log($route.path)
            $router.replace({
              path: redirect || 'welcome'
            })
          })
        })
      }
      return {
        redirect,
        formRef,
        formState,
        rules,
        layout,
        resetForm,
        onSubmit,
        svg: import('@/assets/svg/login-bg.svg')
      }
    },
    mounted() {
      // this.$testFn('hahah');
    }
  })
</script>

<style lang="less" scoped>
  .user-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: url(@/assets/image/login-bg.png) no-repeat;
    background-size: 100% 100%;

    &--content {
      width: 50%;
      max-width: 700px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      background-color: rgba(40, 64, 91, 0.9);
      padding: 40px;
      box-shadow: 0 4px 22px 3px rgba(2, 15, 58, 0.51);
      border-radius: 5px;

      .left {
        flex: 1;
        text-align: center;
        margin: 0 60px 0 0;
        padding-right: 30px;
        height: 100%;
        border-right: 4px solid #28405b;
        border-image: linear-gradient(rgba(40, 64, 91, 0.3), #255fda, rgba(40, 64, 91, 0.3)) 10 10;
        display: flex;
        justify-content: center;

        .login-box-bg {
          //width: 50%;
          max-width: 600px;
        }

        h3 {
          font-size: 38px;
          font-weight: bold;
          color: #fff;
          margin-top: 30px;
        }
      }

      .right {
        flex: 1;

        .form-title {
          color: #fff;
          text-align: center;
        }

        .form {
          // background: rgba(255, 255, 255, 0.8);
          width: 280px;
          margin: 0 auto;
          // height: 500px;
          &-title {
            font-size: 20px;
            font-weight: bold;
          }

          .form-item input {
            width: 100%;
          }

          padding-bottom: 50px;
        }
      }
    }

    &--footer {
      text-align: center;
      padding: 24px 50px;
      font-size: 12px;

      &.record-number {
        color: rgba(255, 255, 255, 0.75);

        &:hover {
          color: #fff;
        }
      }
    }
  }

  //.login-bg {
  //  display: flex;
  //  align-items: center;
  //  justify-content: center;
  //
  //  //&::before {
  //  //  position: absolute;
  //  //  top: 0;
  //  //  left: 0;
  //  //  width: 100%;
  //  //  height: 100%;
  //  //  margin-left: -48%;
  //  //  background-image: url(@/assets/svg/login-bg.svg);
  //  //  background-position: 100%;
  //  //  background-repeat: no-repeat;
  //  //  background-size: auto 100%;
  //  //  content: '';
  //  //}
  //}

</style>
