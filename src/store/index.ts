import Vue from 'vue'
import Vuex, {ActionContext} from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

interface State {
  count: number
  api?: null | string
}

export const storeObj = {
  state: {
    count: 0,
    api: null,
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
    saveData(state: State, data: {data: {greeting: string}}) {
      state.api = data.data.greeting
    },
  },
  actions: {
    increment(context: ActionContext<State, State>) {
      context.commit('increment')
    },
    async fetchData(context: ActionContext<State, State>) {
      const data = await axios.get('/test')
      context.commit('saveData', data)
    },
  },
}

export default new Vuex.Store(storeObj)
