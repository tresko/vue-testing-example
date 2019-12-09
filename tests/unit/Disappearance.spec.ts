import {render, waitForElementToBeRemoved} from '@/test'
import Disappearance from '@/components/Disappearance.vue'

test('waits for the data to be loaded', async () => {
  expect.assertions(2)
  const {getByText, queryByText, queryByTestId} = render(Disappearance)

  getByText('Loading...')
  expect(queryByText(/Loaded this message/)).not.toBeInTheDocument()

  await waitForElementToBeRemoved(() => queryByText('Loading...'))

  expect(queryByTestId('message')).toHaveTextContent(/Hello World/)
})
