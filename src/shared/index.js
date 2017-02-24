import Vue from 'vue'
import { app, router, store } from './app'

const _app = new Vue(app)
const meta = _app.$meta()

export default context => {
  // set router's location
  router.push(context.url)
  // call prefetch hooks on components matched by the route
  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.prefetch) {
      return component.prefetch(store)
    }
  })).then(() => {
    // set initial store on context
    // the request handler will inline the state in the HTML response.
    context.state = store.state
    context.meta = meta
    return _app
  })
}
