import {render, fireEvent, user} from '@/test'
import Button from '@/components/Button.vue'

test('renders button with default text', async () => {
  expect.assertions(2)
  const text = 'Button Text'
  const newText = 'New Button Text'

  // Set the prop value by using the second argument of `render()`.
  const {getByRole, updateProps} = render(Button)

  // Get the only element with a 'button' role.
  const button = getByRole('button')

  expect(button).toHaveTextContent(text)

  await updateProps({text: newText})

  expect(button).toHaveTextContent(newText)
})

test('renders button with text', () => {
  const text = "Click me; I'm sick"

  // Set the prop value by using the second argument of `render()`.
  const {getByRole} = render(Button, {
    props: {text},
  })

  // Get the only element with a 'button' role.
  const button = getByRole('button')

  expect(button).toHaveTextContent(text)
})

test('emits click event when button is clicked', async () => {
  expect.assertions(1)
  const text = 'Click me'

  const {getByRole, emitted} = render(Button, {
    props: {text},
  })

  // Send a click event.
  await fireEvent.click(getByRole('button'))

  // Expect that the event emitted a "click" event. We should test for emitted
  // events has they are part of the public API of the component.
  expect(emitted()).toHaveProperty('click')
})

test('emits click event when button is clicked (user event)', () => {
  const text = 'Click me'

  const {getByRole, emitted} = render(Button, {
    props: {text},
  })

  // Send a click event.
  user.click(getByRole('button'))

  // Expect that the event emitted a "click" event. We should test for emitted
  // events has they are part of the public API of the component.
  expect(emitted()).toHaveProperty('click')
})
