import autoBind from 'auto-bind';

export default class Driver {
  constructor() {
		autoBind(this);
	}
  getLocationHref(){
    return this.location.href
  }
  getLocationHash(){
    return this.location.hash
  }
  setLocation() {
    this.location = location;
    return location;
  }
}