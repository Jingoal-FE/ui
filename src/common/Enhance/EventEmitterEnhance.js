/**
 * Created by rongyao on 16/4/25.
 */
import React from 'react';
import EventEmitter from 'eventemitter3';

export const EventEmitterEnhance = (ComposedComponent) => class extends React.Component {
  constructor() {
    super();
    this.eventEmitter = new EventEmitter();
  }

  on(name, fn) {
    this.eventEmitter.on(name, fn);
  }

  once(name, fn) {
    this.eventEmitter.once(name, fn);
  }

  emit(name) {
    this.eventEmitter.emit(name);
  }

  render() {
      return <ComposedComponent {...this.props} {...this.state} />
  }
};
