import React, { Children } from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
// import { selectItems } from "../cart/cartSlice";
// import { selectLoggedInUser } from "../auth/authSlice";

const token = localStorage.getItem('token');



const navigation = [
  { name: 'RescueConnect', link: '/' },
 
];
const authNavigation = [
  { name: "Register Agency", link: "/registerAgency"},
  { name: "Login Agency", link: "/loginAgency" },

];
const agencyNavigation = [
  { name: "myAgencies", link: "/" },
  { name: "Sign Out", link: "/signout"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar2({ children }) {

//   const item = useSelector(selectItems);
//   const user = useSelector(selectLoggedInUser);
    

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-sky-950">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to={"/"}>
                        <img
                          className="h-8 w-8"
                          // src="https://cdn1.iconfinder.com/data/icons/smart-technology-turquoise-vol-1/256/Disaster_Management-512.png"
                          src="https://yt3.googleusercontent.com/ytc/AOPolaQGbEJcg1RTYwjZTh8P_DCC52aykKl95rdAjjRBxQ=s900-c-k-c0x00ffffff-no-rj"
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) =>
                         
                            <Link
                              key={item.name}
                              to={item.link}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white no-underline'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white no-underline',
                                'rounded-md px-3 py-2 text-sm font-medium no-underline'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </Link>
                         
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tH5zoCc1erY-Z-ilixkEOwR_CHsnsQwj702OMABHLdOHKlaDcbmPKLjzFMZajKIhnxA&usqp=CAU"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {!token && authNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? "bg-gray-100 no-underline" : "",
                                      "block px-4 py-2 text-sm text-gray-700 no-underline"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                            {token && agencyNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? "bg-gray-100 no-underline" : "",
                                      "block px-4 py-2 text-sm text-gray-700 no-underline"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white no-underline"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white no-underline",
                        "block rounded-md px-3 py-2 text-base font-medium no-underline"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        // src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {/* {user.name} */}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {/* {user.email} */}
                      </div>
                    </div>

                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {!token && authNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 no-underline hover:text-white no-underline"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    {token && agencyNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 no-underline hover:text-white no-underline"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Rescue 
            </h1>
          </div>
        </header> */}
        <main>
          <div >
            {children}
          </div>
        </main>
      </div>
    </>
  );
}

export default Navbar2;
