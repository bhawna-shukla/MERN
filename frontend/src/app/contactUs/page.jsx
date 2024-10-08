'use client'
import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUsSchema = Yup.object().shape({
  name:Yup.string()
  .min(2,'Name must be atleast  2 characters')
  .max(50,'Name must be most  50 characters')
  .required(' Enter Name'),
 
 
 
 
  email : Yup.string()
  .email('please enter a valid email address')
  .required('Email is required'),
 
  phone : Yup.string()
 .min(10,'number is not valid ')
//  .matches(/[a-z]/, ' password must contain at least one lowercase letter')
//  .matches(/[A-Z]/, ' password must contain at least one upercase letter')
 .matches(/[0-9]/, '  must contain at least 10 number')
//  .matches(/[!@#$%^&* ()/<>]/, ' password must contain at least one special character')
 .required('phone is requied'),
 
   
 
 })

const ContactUs = () => {
  const ContactUsForm =useFormik({
    intitialvalues :{
      name : "",
      Lastname : "",
      email : "",
      phone : "",
    },
  })
  return (
    <div>
      <>
  {/* Contact Us */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-1 text-gray-600">
          We'd love to talk about how we can help you.
        </p>
      </div>
    </div>
    <div className="mt-12 max-w-lg mx-auto">
      {/* Card */}
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
        <h2 className="mb-8 text-xl font-semibold text-gray-800">
          Fill in the form
        </h2>
        <form>
          <div className="grid gap-4 lg:gap-6">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-firstname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  First Name
                </label>
                {ContactUsForm.errors.name && ContactUsForm.touched.name ? (
                      <div className='text-red-500 text-sm'>{ContactUsForm.errors.name}</div>
                      
                     ):null}
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  // id="hs-firstname-contacts-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="name"
                  onChange={ContactUsForm.handleChange}
                  value={ContactUsForm.values.name}
                />
              </div>
              <div>
                <label
                  htmlFor="hs-lastname-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  // id="hs-lastname-contacts-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  id="Lastname"
                  onChange={ContactUsForm.handleChange}
                  value={ContactUsForm.values.Lastname}

                />
              </div>
            </div>
            {/* End Grid */}
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-email-contacts-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="hs-email-contacts-1"
                  
                  // autoComplete="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  
          
                />
              </div>
              <div>
                <label
                  htmlFor="hs-phone-number-1"
                  className="block mb-2 text-sm text-gray-700 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="hs-phone-number-1"
                  id="hs-phone-number-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
            </div>
            {/* End Grid */}
            {/* <div>
              <label
                htmlFor="hs-about-contacts-1"
                className="block mb-2 text-sm text-gray-700 font-medium"
              >
                Details
              </label>
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                rows={4}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                defaultValue={""}
              />
            </div> */}
          </div>
          {/* End Grid */}
          <div className="mt-6 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Send inquiry
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      {/* End Card */}
    </div>
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
      {/* Icon Block */}
      <a
        className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6"
        href="#"
      >
        <svg
          className="size-9 text-gray-800 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800">Knowledgebase</h3>
          <p className="mt-1 text-gray-500">
            We're here to help with any questions or code.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600">
            Contact support
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6"
        href="#"
      >
        <svg
          className="size-9 text-gray-800 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800">FAQ</h3>
          <p className="mt-1 text-gray-500">
            Search our FAQ for answers to anything you might ask.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600">
            Visit FAQ
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
      {/* Icon Block */}
      <a
        className="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-4 sm:p-6"
        href="#"
      >
        <svg
          className="size-9 text-gray-800 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 11 2-2-2-2" />
          <path d="M11 13h4" />
          <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        </svg>
        <div className="mt-5">
          <h3 className="text-lg font-semibold text-gray-800">
            Developer APIs
          </h3>
          <p className="mt-1 text-gray-500">
            Check out our development quickstart guide.
          </p>
          <p className="mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600">
            Contact sales
            <svg
              className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </a>
      {/* End Icon Block */}
    </div>
  </div>
  {/* End Contact Us */}
</>

    </div>
  )
}

export default ContactUs