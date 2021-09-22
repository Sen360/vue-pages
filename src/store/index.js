import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: [
            {value: "Code"},
            {value: "Test"}
        ]
    },
    getters: {
        todoList: state => {
            return state.todoList
        }
    },
    mutations: {
        addTodoList(state, value) {
            state.todoList.push({value: value})
        }
    },
    actions: {
        addItem(context, value) {
            context.commit('addTodoList', value)
        }
    }
})

export default store