import { fireEvent, render } from '@testing-library/vue'
import FormTextField from '../../../src/components/form-components/FormTextField.vue'
import { test, expect } from 'vitest'

test('it should render the label, input, and help text correctly', async () => {
  const { getByText, getByLabelText, getByTestId } = render(FormTextField, {
    props: {
      obj: {
        id: "email",
        type: "email",
        helpId: "emailHelp",
        labelContent: "Email",
        helpContent: "Ex: boris@gmail.com"
      }
    }
  })

  const input = getByTestId("email") as HTMLInputElement
  const label = getByLabelText("Email")
  const helpText = getByText("Ex: boris@gmail.com")

  expect(input).toBeTruthy()
  expect(label).toBeTruthy()
  expect(helpText).toBeTruthy()


  await fireEvent.update(input, 'boris@gmail.com')
  expect(input.value).toBe('boris@gmail.com')
})
