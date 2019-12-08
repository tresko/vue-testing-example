import Vue from 'vue'
import {VueClass} from '@vue/test-utils'
import {render as tlvRender, RenderOptions, ConfigurationCallback} from '@testing-library/vue'

export * from '@testing-library/vue'
export function render<V extends Vue>(
  component: VueClass<V>,
  options?: RenderOptions<V>,
  callback?: ConfigurationCallback<V>,
) {
  return tlvRender(component, options, callback)
}
