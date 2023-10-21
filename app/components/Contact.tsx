'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas/Earth';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef: any = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    // template_8qojxgs;
    // service_ehwhvff;
    // eiPno - ZtttxXzWSuz;
    emailjs
      .send(
        'service_ehwhvff',
        'template_8qojxgs',
        {
          from_name: form.name,
          to_name: 'Hari',
          from_email: form.email,
          to_email: 'hk256934@gmail.com',
          message: form.message,
        },
        'eiPno-ZtttxXzWSuz'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-full min-h-[550px] bg-base-200`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75]  p-8 rounded-2xl'
        >
          <p className='text-2xl font-bold'>Get in touch</p>
          <h3 className='text-xl font-semibold'>Contact.</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 py-4'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Your Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='What is your name?'
                  value={form.name}
                  onChange={handleChange}
                  className='input input-bordered'
                />
                <label className='label'>
                  <span className='label-text-alt'>Your Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='What is your email?'
                  value={form.email}
                  onChange={handleChange}
                  className='input input-bordered'
                  required
                />

                <label className='label'>
                  <span className='label-text-alt'>Your Message</span>
                </label>
                <textarea
                  className='textarea textarea-bordered'
                  placeholder='What you want to say?'
                  name='message'
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button className='btn btn-block bg-base-100'>
              {' '}
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};
