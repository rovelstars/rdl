import React, { useState, useEffect, Fragment } from "react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { Dialog, Transition } from "@headlessui/react";
import DockButton from "./button";
import Icon from "./icon";

export default function Dock() {
  let [isOpen, setIsOpen] = useState(false);
  let [sheetOpen, sheetIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
    document.querySelector("#you-image")?.classList.remove("ring", "ring-branding", "rounded-2xl", "shadow-2xl", "outline-none");
    document.querySelector("#you-image")?.classList.add("rounded-lg");
    document.querySelector("#you-button")?.classList.add("-translate-y-2");
    document.querySelector("#you-button")?.classList.remove("-translate-y-4", "scale-110");
  }

  function openModal() {
    setIsOpen(true);
    setTimeout(() => { document.documentElement.style.overflow = '' }, 100);
    document.querySelector("#you-image")?.classList.add("ring", "ring-branding", "rounded-2xl", "shadow-2xl", "outline-none");
    document.querySelector("#you-image")?.classList.remove("rounded-lg");
    document.querySelector("#you-button")?.classList.remove("-translate-y-2");
    document.querySelector("#you-button")?.classList.add("-translate-y-4", "scale-110");

  }

  function closeSheet() {
    sheetIsOpen(false);
  }

  function openSheet() {
    sheetIsOpen(true);
  }
  return (
    <div className="flex w-max md:space-x-2 h-14 flex-row justify-center items-end bg-gradient-to-t from-branding/50 to-blush/20 backdrop-blur-md fixed bottom-0 md:bottom-2 left-0 right-0 px-2 bg-opacity-10 m-auto rounded-t-xl md:rounded-xl">
      <DockButton mobile={true}
      name="Bot List"
        color="bg-blush/40 dark:bg-violet-500/40 hover:focus:ring-blush " >
        <Icon css="fa-user-robot text-blush dark:text-violet-400"></Icon>
      </DockButton>
      <DockButton mobile={true}
      name="Server List"
        color="bg-red-500/40 dark:bg-warning/40 hover:focus:ring-red-600 dark:hover:focus:ring-warning">
        <Icon css="fa-server text-red-600 dark:text-warning"></Icon>
      </DockButton>
      <DockButton mobile={true}
      name="User List"
        color="bg-blue-500/40 dark:bg-success/40 hover:focus:ring-blue-600 dark:hover:focus:ring-success">
        <Icon css="fa-user text-blue-600 dark:text-success"></Icon>
      </DockButton>
      <DockButton mobile={true} 
      name="Sticker List"
      color="bg-green-600/30 dark:bg-red-500/40 hover:focus:ring-green-600 dark:hover:focus:ring-red-500">
        <Icon css="fa-icons text-green-800 dark:text-red-400"></Icon>
      </DockButton>
      <DockButton mobile={false}
      name="All Listings"
      color="bg-green-600/30 dark:bg-red-500/40 hover:focus:ring-green-600 dark:hover:focus:ring-red-500">
        <Icon css="fa-list text-green-800 dark:text-red-400"></Icon>
      </DockButton>
      <BrowserView>
        <>
          <DockButton
          allSize={true}
            mid={true}
            onClick={openModal}
            id="you-button"
            name="Your Account"
          >
            <img
              className="transition-[border-radius] md:ml-0 duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring-4 group-hover:group-focus:ring-branding"
              src="/img/logo.png" id="you-image" width="2.5rem" height="2.5rem" alt="Your Avatar"
            ></img>
          </DockButton>
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
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                { /*This element is to trick the browser into centering the modal contents.*/}
                <span className="inline-block h-screen align-bottom bottom-2" aria-hidden="true">
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block mb-20 ml-auto mr-auto w-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-gradient-to-t from-branding/50 to-blush/20 backdrop-blur-md shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl pb-7 font-body font-bold text-center leading-6 text-black-text dark:text-white-text"
                    >
                      {"Settings"}
                    </Dialog.Title>
                    <div className="grid grid-cols-3 gap-2 justify-items-center">
                      <button className="focus-visible:ring-4 focus-visible:ring-skyline/50 rounded-lg ml-2 md:ml-0 group transition-all hover:rounded-2xl w-10 h-10 align-bottom hover:-translate-y-4 hover:scale-110 duration-300">
                        <img
                          className="transition-[border-radius] duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring-4 group-hover:group-focus:ring-branding"
                          src="/img/logo.png"
                        ></img>
                      </button>
                      <button className="focus-visible:ring-4 focus-visible:ring-skyline/50 rounded-lg ml-2 md:ml-0 group transition-all hover:rounded-2xl w-10 h-10 align-bottom hover:-translate-y-4 hover:scale-110 duration-300">
                        <img
                          className="transition-[border-radius] duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring-4 group-hover:group-focus:ring-branding"
                          src="/img/logo.png"
                        ></img>
                      </button>
                      <button className="focus-visible:ring-4 focus-visible:ring-skyline/50 rounded-lg ml-2 md:ml-0 group transition-all hover:rounded-2xl w-10 h-10 align-bottom hover:-translate-y-4 hover:scale-110 duration-300">
                        <img
                          className="transition-[border-radius] duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring-4 group-hover:group-focus:ring-branding"
                          src="/img/logo.png"
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
          <DockButton
          allSize={true}
            mid={true}
            onClick={openSheet}
            name="Your Account"
          >
            <img
              className="transition-[border-radius] duration-300 select-none w-full h-full rounded-lg shadow-xl group-hover:rounded-2xl group-hover:shadow-2xl group-hover:group-focus:outline-none group-hover:group-focus:ring group-hover:group-focus:ring-branding"
              src="/img/logo.png"
              alt="Your Avatar"
            ></img>
          </DockButton>
          {/*Todo: add spring for mobile view*/}
        </>
      </MobileView>
      <DockButton mobile={true}
      name="Emoji List"
       color="bg-green-600/30 dark:bg-red-500/40 hover:focus:ring-green-600 dark:hover:focus:ring-red-500">
        <Icon css="fa-laugh text-green-800 dark:text-red-400"></Icon>
      </DockButton>
      <DockButton mobile={true}
      name="Avatar List"
       color="bg-blue-500/40 dark:bg-success/40 hover:focus:ring-blue-600 dark:hover:focus:ring-success">
        <Icon css="fa-portrait text-blue-600 dark:text-success"></Icon>
      </DockButton>
      <DockButton mobile={true}
      name="Server Template List"
       color="bg-red-500/40 dark:bg-warning/40 hover:focus:ring-red-600 dark:hover:focus:ring-warning">
        <Icon css="fa-pager text-red-600 dark:text-warning"></Icon>
      </DockButton>
      <DockButton allSize={true}
      name="Discord Library List"
       color="ml-2 bg-blush/40 dark:bg-violet-500/40 hover:focus:ring-blush dark:hover:focus:ring-violet-500">
        <Icon css="fa-box-alt text-blush dark:text-violet-400"></Icon>
      </DockButton>
    </div>
  );
}
