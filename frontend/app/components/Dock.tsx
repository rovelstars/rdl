import React, { useState, useEffect, Fragment } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Dialog, Transition } from "@headlessui/react";
import { BottomSheet } from "react-spring-bottom-sheet";
export default function Dock() {
  const { t, i18n } = useTranslation();
  let [isOpen, setIsOpen] = useState(false);
  let [sheetOpen, sheetIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeSheet() {
    sheetIsOpen(false);
  }

  function openSheet() {
    sheetIsOpen(true);
  }
  return (
    <div className="flex w-max md:space-x-2 h-14 flex-row justify-center items-end bg-gradient-to-t from-branding/50 to-blush/20 backdrop-blur-md fixed bottom-0 md:bottom-2 left-0 right-0 px-2 bg-opacity-10 m-auto rounded-t-xl md:rounded-xl">
      <button className="hidden md:flex bg-blush/40 dark:bg-violet-500/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-blush duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-user-robot text-2xl text-blush dark:text-violet-400 select-none w-full"></i>
      </button>
      <button className="hidden md:flex bg-red-500/40 dark:bg-warning/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-red-600 dark:hover:focus:ring-warning duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-server text-2xl text-red-600 dark:text-warning select-none w-full"></i>
      </button>
      <button className="hidden md:flex bg-blue-500/40 dark:bg-success/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-blue-600 dark:hover:focus:ring-success duration-300">
        <i className="text-center fad group-hover:rotate-[360deg] duration-1000 fa-user text-2xl text-blue-600 dark:text-success select-none w-full"></i>
      </button>
      <button className="hidden md:flex bg-green-600/30 dark:bg-red-500/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-green-600 dark:hover:focus:ring-red-500 duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-icons text-2xl text-green-800 dark:text-red-400 select-none w-full"></i>
      </button>
      <button className="md:hidden space-x-0 bg-green-600/30 dark:bg-red-500/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-green-600 dark:hover:focus:ring-red-500 duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-list text-2xl text-green-800 dark:text-red-400 select-none w-full"></i>
      </button>
      <BrowserView>
        <>
          <button
            className="ml-2 md:ml-0 group transition w-10 h-10 -translate-y-2 align-bottom hover:-translate-y-4 hover:scale-110 duration-300"
            onClick={openModal}
          >
            <img
              className="transition-[border-radius] md:ml-0 duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring group-hover:group-focus:ring-branding"
              src="/logo.png"
            ></img>
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 backdrop-blur-lg" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                {/*<span className="inline-block h-screen align-middle" aria-hidden="true"> */}
                {/*&#8203;*/}
                {/*</span>*/}
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="absolute bottom-5 w-full max-w-md  p-6 overflow-hidden text-left align-middle transition-all transform bg-black/30 backdrop-blur-md shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-body font-bold text-center leading-6 text-black-text dark:text-white-text"
                    >
                      {t("Settings")}
                    </Dialog.Title>
                    <div className="grid grid-cols-3 gap-2 justify-items-center">
                      <button className="group transition w-14 h-14 align-bottom p-2 hover:-translate-y-4 hover:scale-110 duration-300">
                        <img
                          className="transition-[border-radius] duration-300 select-none w-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring group-hover:group-focus:ring-branding"
                          src="/logo.png"
                        ></img>
                      </button>
                      <button className="group transition w-14 h-14 align-bottom p-2 hover:-translate-y-4 hover:scale-110 duration-300">
                        <img
                          className="transition-[border-radius] duration-300 select-none w-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring group-hover:group-focus:ring-branding"
                          src="/logo.png"
                        ></img>
                      </button>
                      <button className="group transition w-14 h-14 align-bottom p-2 hover:-translate-y-4 hover:scale-110 duration-300">
                        <img
                          className="transition-[border-radius] duration-300 select-none w-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring group-hover:group-focus:ring-branding"
                          src="/logo.png"
                        ></img>
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      </BrowserView>
      <MobileView>
        <>
          <button
            className="sm:ml-2 md:ml-0 group transition w-10 h-10 -translate-y-2 align-bottom hover:-translate-y-4 hover:scale-110 duration-300"
            onClick={openSheet}
          >
            <img
              className="transition-[border-radius] duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring group-hover:group-focus:ring-branding"
              src="/logo.png"
            ></img>
          </button>
          <BottomSheet open={sheetOpen}>
            Hello, Please see me, I am very underrated :(
          </BottomSheet>
        </>
      </MobileView>
      <button className="hidden md:flex bg-green-600/30 dark:bg-red-500/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-green-600 dark:hover:focus:ring-red-500 duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-laugh text-2xl text-green-800 dark:text-red-400 select-none w-full"></i>
      </button>
      <button className="hidden md:flex bg-blue-500/40 dark:bg-success/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-blue-600 dark:hover:focus:ring-success duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-portrait text-2xl text-blue-600 dark:text-success  select-none w-full"></i>
      </button>
      <button className="hidden md:flex bg-red-500/40 dark:bg-warning/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-red-600 dark:hover:focus:ring-warning duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-pager text-2xl text-red-600 dark:text-warning select-none w-full"></i>
      </button>
      <button className="ml-2 bg-blush/40 dark:bg-violet-500/40 group transition-all w-10 h-10 -translate-y-2 align-bottom p-2 hover:-translate-y-4 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-blush duration-300">
        <i className="fad group-hover:rotate-[360deg] duration-1000 fa-pencil-paintbrush text-2xl text-blush dark:text-violet-400 select-none w-full"></i>
      </button>
    </div>
  );
}
