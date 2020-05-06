import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        username: '',
        list: []
    },
    mutations: {
        addCount(state) {
            state.count += 1

            Vue.set(state, 'loading', false) // 為定義在state中的做法(爛)
        }
    }
})

export default store;