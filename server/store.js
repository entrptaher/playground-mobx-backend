import { observable, computed, action, autorun } from "mobx";
import { toJS } from "mobx";
const { performance, PerformanceObserver } = require("perf_hooks");

class Store {
  @observable settings = {
    showCross: true
  };
  @observable state = {
    haveEaten: performance.now()
  };

  @action eat() {
    this.state.haveEaten = performance.now();
  }
}

const store = new Store();

export const autorunner = () =>
  autorun(() => {
    console.log(toJS(store.state.haveEaten))
  });

export default store;
