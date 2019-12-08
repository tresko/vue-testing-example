import {render} from '@/test'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const {container, debug} = render(HelloWorld, {
      props: {msg},
    })
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="hello text-left bg-red-100"
        >
          <h1>
            new message
          </h1>
           
          <p>
            
          For a guide and recipes on how to configure / customize this project,
            <br />
            
          check out the
          
            <a
              href="https://cli.vuejs.org"
              rel="noopener"
              target="_blank"
            >
              vue-cli documentation
            </a>
            .
        
          </p>
           
          <h3>
            Installed CLI Plugins
          </h3>
           
          <ul>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                rel="noopener"
                target="_blank"
              >
                
              babel
            
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
                rel="noopener"
                target="_blank"
              >
                
              typescript
            
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa"
                rel="noopener"
                target="_blank"
              >
                pwa
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                rel="noopener"
                target="_blank"
              >
                router
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                rel="noopener"
                target="_blank"
              >
                vuex
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                rel="noopener"
                target="_blank"
              >
                eslint
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
                rel="noopener"
                target="_blank"
              >
                unit-jest
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
                rel="noopener"
                target="_blank"
              >
                e2e-cypress
              </a>
            </li>
          </ul>
           
          <h3>
            Essential Links
          </h3>
           
          <ul>
            <li>
              <a
                href="https://vuejs.org"
                rel="noopener"
                target="_blank"
              >
                Core Docs
              </a>
            </li>
             
            <li>
              <a
                href="https://forum.vuejs.org"
                rel="noopener"
                target="_blank"
              >
                Forum
              </a>
            </li>
             
            <li>
              <a
                href="https://chat.vuejs.org"
                rel="noopener"
                target="_blank"
              >
                Community Chat
              </a>
            </li>
             
            <li>
              <a
                href="https://twitter.com/vuejs"
                rel="noopener"
                target="_blank"
              >
                Twitter
              </a>
            </li>
             
            <li>
              <a
                href="https://news.vuejs.org"
                rel="noopener"
                target="_blank"
              >
                News
              </a>
            </li>
          </ul>
           
          <h3>
            Ecosystem
          </h3>
           
          <ul>
            <li>
              <a
                href="https://router.vuejs.org"
                rel="noopener"
                target="_blank"
              >
                vue-router
              </a>
            </li>
             
            <li>
              <a
                href="https://vuex.vuejs.org"
                rel="noopener"
                target="_blank"
              >
                vuex
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/vue-devtools#vue-devtools"
                rel="noopener"
                target="_blank"
              >
                
              vue-devtools
            
              </a>
            </li>
             
            <li>
              <a
                href="https://vue-loader.vuejs.org"
                rel="noopener"
                target="_blank"
              >
                vue-loader
              </a>
            </li>
             
            <li>
              <a
                href="https://github.com/vuejs/awesome-vue"
                rel="noopener"
                target="_blank"
              >
                
              awesome-vue
            
              </a>
            </li>
          </ul>
        </div>
      </div>
    `)
  })
})
