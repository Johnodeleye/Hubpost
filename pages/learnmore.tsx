'use client'
import React from 'react';
import { useState } from 'react'
import '@/app/globals.css';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const navigation = [
  { name: 'Back to Home', href: '/' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Founder', href: '/founder' },
  { name: 'Contact', href: '/contact' },
  { name: 'Join Community', href: '/social' },
]

export default function Learnmore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='min-h-screen overflow-hidden bg-[#1F2937]'>
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
                  src="/Logo white.png"
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
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 mt-8">
      <h1 className="text-9xl font-bold text-green-400 mt-4">
        Welcome to HubPost
      </h1>
      <h2 className="text-xl font-bold mb-2 text-green-500">Our Mission</h2>
      <p className="text-lg leading-7 mb-8 text-light-1">
        <code>At HubPost, we believe in the power of creativity and innovation. We're dedicated to empowering creators and founders to build a remarkable online presence that inspires and uplifts others. Our mission is to provide a platform where you can share your ideas, showcase your talents, and connect with like-minded individuals who share your passions.</code>
      </p>
      <h2 className="text-xl font-bold mb-2 text-green-500">What is HubPost?</h2>
      <p className="text-lg leading-7 mb-8 text-light-1">
        HubPost is more than just a platform - it's a community of dreamers, thinkers, and doers. We offer a range of tools and resources to help you establish yourself as a thought leader in your niche, connect with your audience, and grow your online community.
      </p>
      <h2 className="text-xl font-bold mb-2 text-green-500">Benefits of HubPost</h2>
      <ul className="list-disc pl-4 mb-8 text-light-1">
        <li className="text-lg leading-7 mb-2">
          Connect with like-minded individuals: Join a community that shares your passions and interests, and collaborate with others to achieve greatness.
        </li>
        <li className="text-lg leading-7 mb-2">
          Access exclusive resources: Get access to expert advice, tutorials, and industry insights that will help you grow your online presence and achieve your goals.
        </li>
        <li className="text-lg leading-7">
          Stay updated on industry trends: Stay ahead of the curve with the latest news, updates, and trends in your niche, and use that knowledge to fuel your creativity and innovation.
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-2 text-green-500">Features of HubPost</h2>
      <ul className="list-disc pl-4 text-light-1">
        <li className="text-lg leading-7 mb-2">
          Customizable profiles: Showcase your personality and brand with our customizable profile options, and stand out from the crowd.
        </li>
        <li className="text-lg leading-7 mb-2">
          Community forums: Connect with others, ask questions, and share your expertise in our community forums, and help create a supportive and inspiring community.
        </li>
        <li className="text-lg leading-7">
          Resource library: Access a library of expert advice, tutorials, and industry insights that will help you grow your online presence and achieve your goals.
        </li>
      </ul>
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
  );
};
