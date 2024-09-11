'use client'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Dialog, DialogPanel, Disclosure, Popover, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ResumeButton from './ResumeButton'

export default function NavBar() {
  // navbar state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    // header
    <header className="bg-background">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        {/* logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </Link>
        </div>

        {/* nav bars */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-light" />
          </button>
        </div>

        {/* nav links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Link to="/about" className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-light">
              About
            </Link>
          </Popover>

          <Link to="/works" className="text-lg font-semibold leading-6 text-light">
            Works
          </Link>
          <Link to="/contact" className="text-lg font-semibold leading-6 text-light">
            Contact
          </Link>
        </PopoverGroup>

        {/* resume button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Resume
          </a> */}
          <ResumeButton />
        </div>

      </nav>

      {/* nav mobile view */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />

        {/* mobile nav menu */}
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">

            {/* mobile logo */}
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Haruna Dev</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>

            {/* mobile close icon */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-light" />
            </button>

          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
            {/* mobile nav links */}
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <Link to="/about" className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-light hover:text-secondary">
                    About
                  </Link>
                </Disclosure>
                <Link
                  to="/works"
                  className="-mx-3 w-[100px] block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light hover:text-secondary"
                >
                  Works
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light hover:text-secondary"
                >
                  Contact
                </Link>
              </div>

              {/* mobile resume button */}
              <div className="py-6">
                <ResumeButton />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
