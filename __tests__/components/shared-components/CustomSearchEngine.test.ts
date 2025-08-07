import { fireEvent, render } from '@testing-library/vue'
import CustomSearchEngine from '../../../src/components/shared-components/CustomSearchEngine.vue'
import { test, expect } from 'vitest'

test('it should get camera as input from the component', async() => {
  const { getByText, getByPlaceholderText } = render(CustomSearchEngine, {
    props: {
      classNames: "search-engine",
      placeholder: "Search",
      button: {
        content: "Submit",
        type: "submit",
        classNames: "btn-outline-danger"
      }
    }
  })

    const searchEngineInput = getByPlaceholderText("Search") as HTMLInputElement
    expect(searchEngineInput).toBeTruthy()
  
    await fireEvent.update(searchEngineInput, 'camera')
    expect(searchEngineInput.value).toBe('camera')

})