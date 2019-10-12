import idbKeyValue from 'idb-keyval';

export default class StateManager {
  constructor(key = location.href) {
    this.propertyCallbacks = {};
    this.state = {};
    this.key = `state-${key}`;
  }
  
  async bootstrap(defaultState = {}) {
    const savedState = await idbKeyValue.get(this.key);
    const computedState = Object.assign({}, defaultState, savedState);

    Object.keys(computedState).forEach(async property => {
      await this.write(property, computedState[property]);
    });
  }

  read(property) {
    return this.state[property];
  }

  async write(property, newValue) {
    const oldValue = this.state[property];
    this.state[property] = newValue;
    await idbKeyValue.set(this.key, this.state);
    if (property in this.propertyCallbacks) {
      this.propertyCallbacks[property].forEach(callback => callback(newValue, property, oldValue));
    }
  }

  listen(property, callback) {
    if (!(property in this.propertyCallbacks)) {
      this.propertyCallbacks[property] = [];
    }
    this.propertyCallbacks[property].push(callback);
  }
}
