import { Gift } from './models/Gift.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Gift[]}*/
  gifts = []
}

export const AppState = createObservableProxy(new ObservableAppState())