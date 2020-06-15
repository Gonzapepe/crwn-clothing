import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Gu0VNLOmNwJJJm76HoFJRfzwDNGMUt2lUPPV8gUEIAvkNahzSKaznEQFDvj96A1GxU1ClxHnnudi5pvAQg2Vlbe00ubO0JxNF'

    const onToken = token => {
        console.log(token)
        alert('Payment successful.')
    }

    return(
        <StripeCheckout 
            label= 'Pay Now'
            name= 'Crown Clothing corp.'
            billingAddress
            shippingAddress
            image= ''
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton