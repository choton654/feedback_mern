import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { handelToken } from '../actions/index';

function Payments() {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      name='Emaily'
      description='₹5 for 5 email credits'
      amount={500}
      token={(token) => dispatch(handelToken(token))}
      stripeKey='pk_test_51GvznyDnbzVw245GypYWl0LjXn1sfUGAdKrhr7yGkt7583oV8ijqrWXoy7p49cGdmGcYHnJIJPSLKPpd8KbHn0WT00DkEE5ydG'>
      <button className='btn'>Add Credits</button>
    </StripeCheckout>
  );
}

export default Payments;
