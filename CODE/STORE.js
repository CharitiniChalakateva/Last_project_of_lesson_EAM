import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 0,
      username: '',
      email: '',
      courses: [],
      exams: [],
    },
    courses: [],
    exams: [],
    error: null,
  },
  mutations: {
    // Sets the user to state
    setUser(state, user) {
      state.user = user;
    },
    // Adds a course to the courses list in state
    addCourse(state, course) {
      state.courses.push(course);
    },
    // Adds an exam to the exams list in state
    addExam(state, exam) {
      state.exams.push(exam);
    },
    // Sets an error in state
    setError(state, error) {
      state.error = {
        code: error.code,
        message: error.message,
      };
    },
  },
  actions: {
    // Action for user input
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/login', credentials)
          .then((response) => {
            // The login was successful
            commit('setUser', response.data.user);
            resolve();
          })
          .catch((error) => {
           // The login failed
            commit('setError', error.response.data);
            reject(error);
          });
      });
    },
    // Action to register the user
    register({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/api/register', credentials)
          .then((response) => {
            // The registration was successful
            commit('setUser', response.data.user);
            resolve();
          })
          .catch((error) => {
            // The registration failed 
            commit('setError', error.response.data);
            reject(error);
          });
      });
    },
  },
});
