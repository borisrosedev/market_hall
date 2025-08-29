export interface OrderItemInterface {
    sku: string
    product_name: string
    unit_price_cents: number
    quantity: number
    total_cents: number
    currency: string 

    // optional props 
    tax_cents?: number
    discount_cents?: number
    subtotal_cents?: number 
    variant_json?: string
    metedata_json?: string

}