import {render, waitForDomChange} from '@/test'
import Timeout from '@/components/Timeout.vue'

jest.useFakeTimers()

test('timeout', async () => {
  const {getByText} = render(Timeout)

  getByText('Joe')
  jest.runTimersToTime(1000)
  await waitForDomChange()
  getByText('Doe')
})
