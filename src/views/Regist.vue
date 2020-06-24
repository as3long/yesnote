<template>
  <div>
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
      <van-field
        v-model="passwordAgain"
        type="password"
        name="再次输入密码"
        label="再次输入密码"
        placeholder="再次输入密码"
        :rules="[{ validator, message: '密码不一致' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      passwordAgain: ''
    };
  },
  methods: {
    validator(val) {
      return this.password === val;
    },
    onSubmit(values) {
      console.log('submit', values);
      this.$store.dispatch('regist', {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
