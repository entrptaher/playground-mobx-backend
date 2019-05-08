import getAllClassMethods from 'user-defined-methods';

// get all methods to execute inside browser
import Driver from './methods';

// expose all methods from a driver instance
const driver = new Driver()
for(let method of getAllClassMethods(driver)){
  window[method] = driver[method];
}