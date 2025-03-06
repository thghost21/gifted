import { Identity } from './Auth/Identity.js'
import { Gift } from './models/Gift.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /** @type {Identity}*/
  identity = null
  /** @type {Gift[]}*/
  gifts = []

  savedGifts = []
}

export const AppState = createObservableProxy(new ObservableAppState())