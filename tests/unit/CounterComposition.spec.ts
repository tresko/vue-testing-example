import {render, user, waitForDomChange} from '@/test'
import Counter from '@/components/CounterComposition.vue'

test('renders counter', async () => {
  const {container} = render(Counter)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button>
        Count is: 0, double is: 0
      </button>
    </div>
  `)

  // @ts-ignore
  user.click(container.firstChild)
  // @ts-ignore
  await waitForDomChange(container)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button>
        Count is: 1, double is: 2
      </button>
    </div>
  `)
})
