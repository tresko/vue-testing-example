import {render} from '@/test'
import Slots from '@/components/Slots.vue'

test('Slots component', () => {
  const {getByText, queryByText} = render(Slots, {
    slots: {
      header: '<h1>HEADER</h1>',
      footer: '<div>FOOTER</div>',
    },
    scopedSlots: {
      default: '<p>Yay! {{props.content}}</p>',
    },
  })

  getByText('Yay! Scoped content!')

  expect(queryByText('Nothing used the Scoped content!')).not.toBeInTheDocument()

  getByText('HEADER')
  getByText('FOOTER')
})
