import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      username: '',
      email: '',
      courses: [],
      exams: []
    },
    courses: [],
    exams: [],
    error: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addCourse(state, course) {
      state.courses.push(course);
    },
    addExam(state, exam) {
      state.exams.push(exam);
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/api/login', credentials)
        .then(response => {
          commit('setUser', response.data.user);
          resolve();
        })
        .catch(error => {
          commit('setError', error);
          reject(error);
        });
      });
    },
    register({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/api/register', credentials)
        .then(response => {
          commit('setUser', response.data.user);
          resolve();
        })
        .catch(error => {
          commit('setError', error);
          reject(error);
        });
      });
    }
  }
})


