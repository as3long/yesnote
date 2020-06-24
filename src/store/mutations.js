export const STORAGE_KEY = 'todos-vuejs';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state, { todo, text = todo.text, done = todo.done }) {
    const index = state.todos.indexOf(todo);

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done
    });
  },
  login(state, data) {
    if (data.err_code !== 0) {
      state.toastText = data.err_msg;
    }
    state.userState.uuid = data.uuid;
    state.userState.token = data.token;
    console.log(data.uuid, data.token);
  },
  resetToast(state) {
    state.toastText = '';
  },
  regist(state, data) {
    if (data.err_code !== 0) {
      state.toastText = data.err_msg;
    } else {
      state.toastText = '注册成功！';
      // 注册成功之后跳转到登录页面
      setTimeout(() => {
        state.redirect = '/login';
      }, 2000);
    }
  }
};
