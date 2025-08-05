import { render } from '@testing-library/vue'
import CustomButton from '../../../src/components/shared-components/CustomButton.vue'
import { test } from 'vitest'

test('it should get submit text from the component', () => {
  const { getByText } = render(CustomButton, {
    props: {
      obj: {
        content: "Submit",
        type: "submit"
      }
    }
  })

  getByText('Submit')
})