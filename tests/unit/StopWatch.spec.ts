import {render, wait, fireEvent} from '@/test'
import StopWatch from '@/components/StopWatch.vue'

test('updates component state', async () => {
  const {getByTestId, getByText} = render(StopWatch)

  const startButton = getByText('Start')
  const elapsedTime = getByTestId('elapsed')

  // Assert initial state.
  expect(elapsedTime).toHaveTextContent('0ms')
  getByText('Start')

  await fireEvent.click(startButton)

  getByText('Stop')

  // Wait for one tick of the event loop.
  await wait()

  // Stop the timer.
  await fireEvent.click(startButton)

  // We can't assert a specific amount of time. Instead, we assert that the
  // content has changed.
  expect(elapsedTime).not.toHaveTextContent('0ms')
})
