import {render, fireEvent} from '@/test'
import App from '@/App.vue'

test('full app rendering/navigating', async () => {
  // Notice how we pass a `routes` object to our render function.
  const {container, queryByTestId} = render(App, {})

  expect(queryByTestId('location-display')).toHaveTextContent('/')
  expect(container).toMatchSnapshot()

  await fireEvent.click(queryByTestId('about-link'))

  expect(queryByTestId('location-display')).toHaveTextContent('/about')
  expect(container).toMatchSnapshot()
})
