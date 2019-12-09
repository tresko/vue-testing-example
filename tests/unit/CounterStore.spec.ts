import {render, user, waitForDomChange} from '@/test'
import Counter from '@/components/CounterStore.vue'

test('renders counter', async () => {
  expect.assertions(2)
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
  await waitForDomChange(container)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <button>
        Count is: 1, double is: 2
      </button>
    </div>
  `)
})

test('mock store', async () => {
  const increment = jest.fn()
  const store = {
    state: {count: 1000},
    actions: {
      increment,
    },
  }

  const {getByText} = render(Counter, {store})

  user.click(getByText('Count is: 1000, double is: 2000'))
  expect(increment).toBeCalledTimes(1)
})
