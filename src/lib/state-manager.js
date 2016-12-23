export default class StateManager {
  constructor() {
    this.propertyCallbacks = {};
  }

  read(property) {
    return this[property];
  }

  write(property, newValue) {
    const oldValue = this[property]
    this[property] = newValue;
    if (property in this.propertyCallbacks) {
      this.propertyCallbacks[property].forEach(callback => callback(newValue, oldValue));
    }
  }

  listen(property, callback) {
    if (!(property in this.propertyCallbacks)) {
      this.propertyCallbacks[property] = [];
    }
    this.propertyCallbacks[property].push(callback);
  }
}
