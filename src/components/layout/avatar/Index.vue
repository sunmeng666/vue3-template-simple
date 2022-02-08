<template>
  <div class='as-avatar right-item'>
    <a-dropdown :trigger="['hover']">
      <span class='ant-dropdown-link'>
        <a-avatar :src='avatar' />
        {{ username }}
        <DownOutlined class='right-item--icon' />
      </span>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item @click='showInfoModel'>
            <MIcon type='user' />
            个人信息
          </a-menu-item>
          <a-menu-item @click='showPasswordModel'>
            <MIcon type='wrench' />
            修改密码
          </a-menu-item>
          <a-menu-item @click='confirmLogout()'>
            <MIcon type='logout' />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
  <a-modal v-model:visible='visible' title='修改密码' @ok='confirmModifyPassword' :confirmLoading='confirmLoading' :maskClosable='false'>
    <a-form ref='formRef' :model='formState' :rules='rules' :label-col='labelCol' :wrapper-col='wrapperCol'>
      <a-form-item label='旧密码' name='password'>
        <a-input v-model:value='formState.password' />
      </a-form-item>
      <a-form-item label='新密码' name='newPassword'>
        <a-input v-model:value='formState.newPassword' />
      </a-form-item>
      <a-form-item label='确认新密码' name='confirmPassword'>
        <a-input v-model:value='formState.confirmPassword' />
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal v-model:visible='infoVisible' title='个人信息' @ok='infoVisible.value = false' :footer='null'>
    <a-descriptions :column='1' class='user-info'>
      <a-descriptions-item label='用户名'>{{ userInfo.name }}</a-descriptions-item>
      <a-descriptions-item label='登录账号'>{{ userInfo.username }}</a-descriptions-item>
      <a-descriptions-item label='手机号'>{{ userInfo.mobile }}</a-descriptions-item>
      <a-descriptions-item label='邮箱'>{{ userInfo.email }}</a-descriptions-item>
      <a-descriptions-item label='所属组织'>{{ userInfo.organization }}</a-descriptions-item>
    </a-descriptions>
  </a-modal>
</template>

<script lang='ts'>
  import { DownOutlined } from '@ant-design/icons-vue'
  import { defineComponent, getCurrentInstance, reactive, ref, toRaw, UnwrapRef } from 'vue'

  import avatar from '@/assets/image/avatar.gif'
  import { useStore } from '@/store'
  import { RuleObject } from 'ant-design-vue/lib/form/interface'
  import { modifyPassword } from '@/apis/account'
  import { message } from 'ant-design-vue'

  export default defineComponent({
    name: 'AsAvatar',
    components: { DownOutlined },
    setup() {
      // basic
      const { userStore } = useStore()
      const internalInstance: any = getCurrentInstance()
      const global = internalInstance.appContext.config.globalProperties
      // modal
      const visible = ref<boolean>(false)
      const infoVisible = ref<boolean>(false)
      const showPasswordModel = () => {
        visible.value = true
      }
      const modifyPasswordOk = (e: MouseEvent) => {
        console.log(e)
        visible.value = false
      }

      // form
      const confirmLoading = ref(false)
      const formRef = ref()
      const formState: UnwrapRef<any> = reactive({
        id: userStore?.user?.id,
        password: '',
        newPassword: '',
        confirmPassword: ''
      })

      const handleConfirmPassword = async (rule: RuleObject, value: any) => {
        if (!value) {
          return Promise.reject('请确认新密码')
        } else if (value !== formState.newPassword) {
          return Promise.reject('与新密码不一致')
        } else {
          return Promise.resolve()
        }
      }
      const rules = {
        password: [{ required: true, message: '请输入原始密码', trigger: 'blur' }],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { pattern: /^(?=.*[a-zA-Z])(?=.*\d)[^]{6,16}$/, message: '至少6-16个字符，至少1个字母和1个数字，其他任意组合', trigger: 'blur' }
        ],
        confirmPassword: [{ required: true, validator: handleConfirmPassword, trigger: 'blur' }]
      }

      const confirmModifyPassword = () => {
        formRef.value.validate().then(() => {
          confirmLoading.value = true
          modifyPassword(toRaw(formState)).then((res) => {
            confirmLoading.value = false
            visible.value = false
            if (res.code !== '0000') {
              message.error(res.msg)
              return
            }
            message.success('修改成功')
            logout()
          })
        })
      }

      // logout
      const logout = async () => {
        const { userStore } = useStore()
        await userStore.handleLogout()
        const fullPath = global.$route.fullPath
        global.$router.push(`/login?redirect=${fullPath}`)
      }
      const confirmLogout = () => {
        global.$modal.confirm({
          title: '提示',
          // icon: createVNode(ExclamationCircleOutlined),
          content: '确认退出登录吗',
          onOk: () => {
            logout()
          },
          class: 'test'
        })
      }
      const showInfoModel = () => {
        infoVisible.value = true
      }
      return {
        // header
        username: userStore.user.name,
        userInfo: userStore.user,
        // modal
        visible,
        infoVisible,
        showPasswordModel,
        modifyPasswordOk,
        confirmLoading,
        // form
        formRef,
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
        formState,
        rules,
        confirmModifyPassword,
        // logout
        confirmLogout,
        showInfoModel
      }
    },
    data() {
      return {
        avatar: avatar
      }
    }
  })
</script>
<style lang='less' scoped>
  .user-info {
    padding-left: 70px;
  }
</style>
