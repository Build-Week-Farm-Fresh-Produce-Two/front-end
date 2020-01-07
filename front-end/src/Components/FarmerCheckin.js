import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = () =>{
    const { register } = useForm();
  return(
      <form>
          <label>Credit Card</label>
          <input name='creditCard' />

          <label>Card Number</label>
          <input name='cardNumber'/>

          <label>Name on Card</label>
          <input name='nameonCard'/>

          <label>Expiration</label>
          <input name='expiration'/>

          <label>Cvv code</label>
          <input name='cvvCode'/>

     </form>

  )
};