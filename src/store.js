import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = '';

const store = new Vuex.Store({
    state: {
        count: 0,
        username: '',
        list: [],
        todos: []
    },
    getters: {
        // store's computed
        itemsNotDone(state) {
            return state.todos.filter(item => !item.done).length;
        },
        itemsDone(state, getters) {
            return state.todos.length - getters.itemsNotDone;
        },
        itemsWithID: state =>
            id => state.todos.filter(item => item.id === id)
    },
    mutations: {
        // Only "SYNC"
        addCount(state, payload = 1) {
            state.count += payload;
            // Vue.set(state, 'loading', false) // 為定義在state中的做法(爛)
        },
        // addCount(state, payload) {
        //     state.count += payload.step;
        // }
        setTodos(state, todos) {
            state.todos = todos;
        }
    },
    actions: {
        // can do "ASYNC", can not change store, need to through mutation
        // fetchTodos(context) {
        fetchTodos({ commit, dispatch }, payload) {
            // const tmp = payload;
            fetch(`${url}/todos`)
                .then(response => response.json())
                .then(todos => {
                    commit('setTodos', todos);
                    dispatch('fetchUserInfo')
                })
        },
        fetchUserInfo() {

        }
    }
})

export default store;