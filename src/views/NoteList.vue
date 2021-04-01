<template>
  <div>
    <van-nav-bar
      title="笔记列表"
      right-text="添加笔记"
      @click-right="onClickRight"
    />
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell class="note-item" v-for="item in list" :key="item.id" :title="item.title" :value="item.content" />
    </van-list>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import { api } from '../api/index';

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 1,
      perpage: 10
    };
  },
  computed: {
    uuid() {
      return this.$store.state.userState.uuid;
    }
  },
  methods: {
    onLoad() {
      this.loading = true;
      this.finished = false;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      api.get('/', {
        params: {
          s: 'App.Table.FreeQuery',
          model_name: 'note',
          where: [[
            'muuid',
            '=',
            this.uuid
          ]],
          order: ['id desc'],
          page: this.page,
          perpage: this.perpage
        }
      }).then((res, err) => {
        console.log(res.data);
        if (res.data.ret === 200) {
          const len = res.data.data.list.length;
          for (let i = 0; i < len; i++) {
            this.list.push(res.data.data.list[i]);
          }
        }
        // 加载状态结束
        if (res.data.data.total / this.perpage > this.page) {
          this.page += 1;
        } else {
          this.finished = true;
        }
        this.loading = false;
      });
    },
    onClickRight() {
      // Toast('按钮');
      this.$router.push('/addnote');
    }
  }
};
</script>

<style>
.note-item {
  text-align: left;
}
</style>
