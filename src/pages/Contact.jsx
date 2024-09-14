/* eslint-disable react/no-unescaped-entities */
'use client'

// import { useState } from 'react'


export default function Contact() {

  return (
    <div className="bg-background px-6 py-24 sm:py-24 lg:px-8">

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Say Hello, Let's Start Building</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          
          <div className="sm:col-span-2">
            <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-primary">
              Full Name
            </label>
            <div className="mt-2.5">
              <input
                id="full-name"
                name="full-name"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 lg:text-xl text-[#33333] font-semibold shadow-sm ring-1 ring-inset ring-primary lg:placeholder:text-[#555555] lg:placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-primary">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 lg:text-xl text-[#33333] font-semibold shadow-sm ring-1 ring-inset ring-primary lg:placeholder:text-[#555555] lg:placeholder:font-semibold focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-primary">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 lg:text-xl text-[#33333] font-semibold shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 lg:placeholder:text-[#555555] lg:placeholder:font-semibold"
                defaultValue={''}
                placeholder="Say hi"
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
