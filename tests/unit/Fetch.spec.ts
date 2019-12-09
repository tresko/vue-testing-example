import axios from 'axios'
import {render, fireEvent} from '@/test'
import Fetch from '@/components/Fetch.vue'

jest.mock('axios')

test('mocks an API call when load-greeting is clicked', async () => {
  expect.assertions(3)
  // @ts-ignore
  axios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {greeting: 'hello there'},
    }),
  )

  const {html, getByText} = render(Fetch)

  await fireEvent.click(getByText('Fetch'))

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('/test')
  getByText('hello there')

  expect(html()).toMatchInlineSnapshot(`<div><button>Fetch</button> <span>hello there</span></div>`)
})
