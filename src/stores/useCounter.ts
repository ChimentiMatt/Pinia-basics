import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
  state: ()=> ({
    counter: 1,
    name: "Matt"
  }),
  getters: {
    doubleCount: (state)=> {
      state.counter * 2;
    }
  },
  actions: {
    addOne() {
      this.counter++;
    }
  }
});