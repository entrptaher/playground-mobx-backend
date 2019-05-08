import getAllClassMethods from "user-defined-methods";

// get all methods to execute inside browser
import Driver from "./methods";

const driver = new Driver();

// expose driver itself so we can access it later
window["driver"] = driver;

// expose all methods from a driver instance
// any method will reference the instance for "this"
for (let method of getAllClassMethods(driver)) {
  window[method] = driver[method];
}
