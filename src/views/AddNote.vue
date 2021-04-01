<template>
  <div>
    <van-nav-bar title="添加笔记" left-text="返回" left-arrow style="margin-bottom: 32px;" @click-left="onLeftClick" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="title"
        name="标题"
        label="标题"
        placeholder="标题"
        :rules="[{ required: true, message: '标题不能为空' }]"
      />
      <van-field
        v-model="content"
        type="textarea"
        rows="8"
        name="内容"
        label="内容"
        placeholder="内容"
        :rules="[{ required: true, message: '内容不能为空' }]"
      />
      <div style="margin: 32px;">
        <van-button round block type="info" native-type="submit">
          添加
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { format } from '../utils/data';

export default {
  data() {
    return {
      title: '',
      keywords: '',
      description: '',
      content: '',
      click_num: 0,
      create_time: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
      catalog: 1,
      publish_type: 'test'
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      this.$store.dispatch('addLog', {
        title: this.title,
        keywords: this.keywords,
        description: this.description,
        content: this.content,
        click_num: this.click_num,
        create_time: format(new Date(), 'yyyy-MM-dd hh:mm:ss'),
        catalog: this.catalog,
        publish_type: this.publish_type
      });
    },
    onLeftClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
