'use client'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Dialog, DialogPanel, Disclosure, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import ResumeButton from './ResumeButton'

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const mobileMenuVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img alt="Logo" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </Link>
        </div>

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

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <motion.div initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.3 }} variants={navVariants}>
            <Link to="/about" className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-light hover:text-secondary">
              About
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.4 }} variants={navVariants}>
            <Link to="/works" className="text-lg font-semibold leading-6 text-light hover:text-secondary">
              Works
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.5 }} variants={navVariants}>
            <Link to="/contact" className="text-lg font-semibold leading-6 text-light hover:text-secondary">
              Contact
            </Link>
          </motion.div>
        </PopoverGroup>

        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.6 }} variants={navVariants} className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ResumeButton />
        </motion.div>
      </motion.nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <motion.div initial="hidden" animate="visible" exit="hidden" variants={mobileMenuVariants} transition={{ duration: 0.5 }}>
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img alt="Logo" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
              </Link>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-light" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <Link to="/about" className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-light hover:text-secondary">
                      About
                    </Link>
                  </Disclosure>
                  <Link to="/works" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light hover:text-secondary">
                    Works
                  </Link>
                  <Link to="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light hover:text-secondary">
                    Contact
                  </Link>
                </div>

                <div className="py-6">
                  <ResumeButton />
                </div>
              </div>
            </div>
          </DialogPanel>
        </motion.div>
      </Dialog>
    </header>
  )
}
