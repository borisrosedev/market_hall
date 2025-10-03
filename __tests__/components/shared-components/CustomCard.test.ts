import { test, expect } from "vitest"
import { render } from '@testing-library/vue'
import CustomCard from "../../../src/components/shared-components/CustomCard.vue"


test('it should get a alt with the name of the objet on the ui', () => {
    const price = 50.00
    const { getByAltText, getByText  } = render(CustomCard, {
        props: {
            obj: {
                url:"http://zouk./",
                name: "Old Piano",
                price_cents: price,
                listItems: [
                    {
                    content: `price: ${price}`
                    }
                ],
                description: "This is an old Piano"
            }
        }
    })

    expect(getByText(`${price} €`)).toBeTruthy()
    expect(getByAltText("Image of Old Piano")).toBeTruthy()


})



test('it should get a 50.00 price on the ui', () => {
    const price = 50.00
    const { getByAltText, getByText ,container } = render(CustomCard, {
        props: {
            obj: {
                url:"http://zouk./",
                name: "Old Piano",
                price_cents: price,
                listItems: [
                    {
                    content: `price: ${price}`
                    }
                ],
                description: "This is an old Piano"
            }
        }
    })
    
    expect(getByText(`${price} €`)).toBeTruthy()



})