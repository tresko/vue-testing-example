import {render} from '@/test'
import {advanceTo, clear} from 'jest-date-mock'
import FormatDate from '@/components/FormatDate.vue'

beforeEach(() => {
  advanceTo(new Date(2018, 5, 27, 0, 0, 0))
})

afterEach(() => {
  clear()
})

test('timeout', async () => {
  const {getByTestId} = render(FormatDate)

  expect(getByTestId('date')).toHaveTextContent('June 27, 2018')
})
