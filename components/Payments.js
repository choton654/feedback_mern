import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handelToken } from '../actions/index';
import keys from '../config/keys';

function Payments() {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name='Emaily'
      description='₹5 for 5 email credits'
      amount={500}
      token={(token) => dispatch(handelToken(token))}
      stripeKey={keys.stripePublishableKey}>
      <button className='btn'>Add Credits</button>
    </StripeCheckout>
  );
}

export default Payments;
