import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import user from '@testing-library/user-event'
import {VueClass} from '@vue/test-utils'
import {render as tlvRender, RenderOptions, ConfigurationCallback} from '@testing-library/vue'
import {Store} from 'vuex'
import Router from 'vue-router'
import {axe} from 'jest-axe'
import {storeObj} from '@/store'
import {routes} from '@/router'

export {user, axe}
export * from '@testing-library/vue'
export function render<V extends Vue>(
  component: any,
  options: RenderOptions<V> = {},
  callback?: ConfigurationCallback<V>,
) {
  const finalOptions = {
    ...options,
    routes,
    store: {
      ...storeObj,
      ...(options.store || {}),
    },
  }

  return tlvRender(
    component,
    // @ts-ignore
    finalOptions,
    <V extends Vue>(vue: V, store: Store<any>, router: Router) => {
      // @ts-ignore
      vue.use(VueCompositionApi)

      if (callback) {
        // @ts-ignore
        return callback(vue, store, router)
      }

      return {}
    },
  )
}
