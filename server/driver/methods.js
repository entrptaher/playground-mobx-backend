import autoBind from 'auto-bind';

export default class Driver {
  constructor() {
		autoBind(this);
	}
  getLocationHref(){
    return this.getLocation().href
  }
  getLocation() {
    return location;
  }
}