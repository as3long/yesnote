<template>
  <div>
    <van-nav-bar
      title="登录"
      style="margin-bottom: 32px;"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 32px;">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  watch: {
    '$store.state.userState.uuid': () => {
      console.log('登录成功');
    }
  },
  methods: {
    // ...mapActions([
    //   'login'
    // ]),
    onSubmit(values) {
      console.log('submit', values);
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      });
    },
  },
};
</script>
