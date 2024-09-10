'use client'
import React from 'react'
import Head from 'next/head';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react'
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../globals.css';
const navigation = [
  { name: 'Learn More', href: '/learn' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Founder', href: '/founder' },
  { name: 'Contact', href: '/contact' },
  { name: 'Join Community', href: '/social' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='min-h-screen overflow-hidden bg-[#1F2937]'>
    <Head>
    {/* Google tag (gtag.js) */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZKVC5YYKT8"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-ZKVC5YYKT8');
      `}
    </script>
  </Head>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">HubPost</span>
              <img
                alt="HubPost Logo"
                src="/Logo White.png"
                className="w-24 h-15"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-600"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-1 text-sm font-semibold leading-6 text-green-400 hover:bg-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/sign-in" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-1 text-sm leading-6 text-white hover:bg-green-600">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-[#1F2937] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"> HubPost </span>
                <img
                  alt="HubPost"
                  src="/Logo White.png"
                  className="w-auto h-8"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-green-600"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-green-600">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-green-600 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <a
                    href="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-green-600"
                  >
                    Get Started
                  </a>
                  
                  <a
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-green-600"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
        <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:py-8">
        <div className="text-center">
        <h1 className="font-bold tracking-tight text-green-400 big-font text-left lh-[1.1] sm:mt-[20px] lg:mt-[60px]">
  <code> Spark, Connect, Ignite.</code>
</h1>
            <p className="mt-6 text-lg leading-8 text-left text-white">
              Spark your passion, Connect with your purpose, and ignite your potential. Believe in yourself,
              take the leap, and watch your dreams unfold. Embrace the journey, learn from the struggles, 
               and shine your light for the world to see!
            </p>
            <div className="flex items-center mt-10 text-left gap-x-6">
              <a
                href="/sign-up"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white text-left shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red lg:text-left lg:ml-0"
              >
                Get started
              </a>
              <a href="/learn" className="text-sm font-semibold leading-6 text-green-600">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>  
          </div>
        </div>
      </div>
      
      {/* footer */}
      
      <footer className="p-5 text-left text-white bg-gray-800">
  <p className=" md:mt-0 copy">&copy; 2024 HubPost. All rights reserved.</p>
  <ul className="flex justify-center mb-4">
    <li className="mr-4">
      <a href="#" className="text-green-400 hover:text-gray-400">
        Terms and Conditions
      </a>
    </li>
    <li className="mr-4">
      <a href="#" className="text-green-400 hover:text-gray-400">
        Privacy Policy
      </a>
    </li>
    <li>
      <a href="#" className="text-green-400 hover:text-gray-400">
        Contact Us
      </a>
    </li>
  </ul>
  <div className="flex justify-center mb-4">
    <a href="#" className="mr-4 text-white hover:text-gray-400">
      <img src="logo white.png" alt="HubPost logo" className="w-auto h-6 mx-auto"/>
    </a>
    <a href="#" className="mr-4 text-white hover:text-green-400">
      <FaTwitter size="24" />
    </a>
    <a href="#" className="mr-4 text-white hover:text-green-400">
      <FaFacebook size="24" />
    </a>
    <a href="#" className="mr-4 text-white hover:text-green-400">
      <FaLinkedin size="24" />
    </a>
    <a href="#" className="text-white hover:text-green-400">
      <FaInstagram size="24" />
    </a>
  </div>
</footer>
      
    </div>
  )
}
