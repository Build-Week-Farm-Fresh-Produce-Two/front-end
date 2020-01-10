import React from "react";
import { useForm } from "react-hook-form";

const FarmerCheckout = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Credit Card</label>
      <input
        type="checkbox"
        name="creditCard"
        ref={register({ required: true })}
      />

      <label>Card Number</label>
      <input
        name="cardNumber"
        ref={register({ required: true, minLength: 16 })}
      />
      {errors.cardNumber &&
        errors.cardNumber.type === "required"(<p>This is required</p>)}
      {errors.cardNumber &&
        errors.cardNumber.type ===
          "minLength"(<p>This is required min length of 16</p>)}

      <label>Name on Card</label>
      <input name="nameonCard" ref={register({ required: true })} />
      {errors.nameonCard && errors.nameonCard.type === "required" && (
        <p>This is required</p>
      )}

      <label>Expiration</label>
      <input name="expiration" ref={register({ required: true })} />
      {errors.expiration && errors.epiration.type === "required" && (
        <p>This is required</p>
      )}

      <label>Cvv code</label>
      <input name="cvvCode" ref={register({ required: true, minLenght: 3 })} />
      {errors.cvvCode &&
        errors.cvvCode.type === "required"(<p>This is required</p>)}
      {errors.cvvCode &&
        errors.cvvCode.type ===
          "minLength"(<p>This is required min length of 3</p>)}
      <input type="submit" />
    </form>
  );
};

export default FarmerCheckout;
