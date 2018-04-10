import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

import createLog from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        app,
        user
    },
    getters,
    strict : debug,
    plugins : debug ? [createLog()] : []
})

export default store