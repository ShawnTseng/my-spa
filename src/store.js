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
        // Only "SYNC"
        addCount(state, payLoad = 1) {
            state.count += payLoad;
            // Vue.set(state, 'loading', false) // 為定義在state中的做法(爛)
        }
        // addCount(state, payLoad) {
        //     state.count += payLoad.step;
        // }
    }
})

export default store;