import { render } from '@testing-library/vue'
 
import { expect,test } from 'vitest'
import checkFormat from '../../src/utils/check-format'
 

test('format email', () => {

   expect(checkFormat.isValidEmail("markethall@mail.com")).toBe(true)
})
 

 
