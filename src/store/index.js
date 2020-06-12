import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation"
Vue.use(Vuex);
const state={
  path:[],
  musicName:[],
  suggest:{},
  searVal:"",
  playList:[]
}
const store=new Vuex.Store({
  state,
  mutations
})
export default store;