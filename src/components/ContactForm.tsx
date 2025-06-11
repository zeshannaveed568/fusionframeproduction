"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";

interface FormInputProps {
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}
const FormInput = React.memo(
  ({ label, type, placeholder, name, value, onChange, required }: FormInputProps) => (
    <div className='flex  flex-col items-start justify-center'>
      <label className='font-bold tracking-wider' htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className='w-full bg-gray-200 h-12 px-4'
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div className='w-3/4  lg:w-4/6 h-full bg-[#f4eded] mx-auto text-[#090302] rounded-xl shadow-xl p-8'>
      <form
        name='contact'
        method='POST'
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-4'
      >
        <FormInput
          label='First Name'
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Last Name'
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Email'
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Phone Number'
          type='tel'
          name='phoneNumber'
          placeholder='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <div className='flex flex-col items-start justify-center md:col-span-2'>
          <label className='font-georama tracking-wider' htmlFor='message'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Leave your message...'
            className='w-full bg-gray-200 h-44 p-4'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <p className='my-4 text-sm md:col-span-2'>
          By submitting this form you agree to our
          <Link className='text-blue-700' href='/terms'>
            {" "}
            terms and conditions{" "}
          </Link>
          and our
          <Link className='text-blue-700' href='/privacy'>
            {" "}
            privacy policy{" "}
          </Link>
          which explains how we may collect, use and disclose your personal
          information including to third parties.
        </p>
        <button
          type='submit'
          className='text-black w-full sm:w-auto bg-[#F9DB6D] hover:bg-[#090302] hover:text-[#f4eded] focus:outline-none transition-all duration-300 focus:ring-blue-300 font-medium rounded-md tracking-wider text-sm px-5 py-2.5 text-center max-h-12 max-w-52'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
