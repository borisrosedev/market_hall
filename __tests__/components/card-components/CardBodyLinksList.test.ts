import { render } from '@testing-library/vue'
import CardBodyLinksList from '../../../src/components/card-components/CardBodyLinksList.vue'
import { test } from 'vitest'

test('it should get Details text from the component', () => {
  const id = 1
  const { getByText } = render(CardBodyLinksList, {
    props: {
      listLinks: [
        {
           href: `/products/${id}`, 
           content: `Details ...`
        }
      ]
    }
  })

  getByText(/Details/)
})