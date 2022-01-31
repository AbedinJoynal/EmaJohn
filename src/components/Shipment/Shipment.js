import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/useAuth';
import './Shipment.css';
const Shipment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const auth = useAuth();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ship-form">
      <input
        name="name"     placeholder="Your name"
        defaultValue={auth.user.name}
        {...register('name', { required: true })}
      />
      {errors.name && <span className="error-form">Name is required!</span>}

      <input
        name="email"    placeholder="Your Email"
        defaultValue={auth.user.email}
        {...register('email', { required: true })}
      />
      {errors.email && <span className="error-form">Email is required!</span>}

      <input name="address"   placeholder="Your Adress" {...register('adress', { required: true })} />
      {errors.adress && <span className="error-form">Adress is required!</span>}

      <input name="city"  placeholder="Your City" {...register('city', { required: true })} />
      {errors.city && <span className="error-form">City is required!</span>}

      <input name="country" placeholder="Your Country" {...register('country', { required: true })} />
      {errors.country && <span className="error-form">Country is required!</span>}

      <input  type="submit" />
    </form>
  );
};

export default Shipment;
