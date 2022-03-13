import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function BotCard(props: { name: string, short: string, avatar: string, link: URL | string, bg?: string }) {
    //on clicking button, open a headlessui Dialog
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <li
            className="first:rounded-t-md last:rounded-b-md flex flex-col items-center bg-slate-900 odd:bg-slate-800 sm:flex-row sm:max-w-2xl">
            <img
                className="mt-5 sm:mt-0 sm:ml-5 rounded-full w-16 h-16"
                src="/img/face"
                alt={`${props.name}'s Avatar`} />
            <div
                className="p-4">
                <h5
                    className="text-center sm:text-left mb-2 text-2xl font-bold tracking-wide text-gray-900 dark:text-white font-display">{props.name}</h5>
                <p
                    className="mb-3 font-body font-bold text-gray-700 dark:text-gray-400">{props.short}</p>
                <div
                    className="hidden sm:flex sm:flex-row gap-4 justify-between">
                    <div
                        className="px-2 bg-green-500/20 text-green-300  font-display rounded-2xl">2.1k Servers</div>
                    <div
                        className="px-2 bg-indigo-600/20 text-indigo-300 font-display rounded-2xl">5k Votes</div>

                </div>
            </div>
            <button
                onClick={handleClick}
                className="sm:ml-auto sm:mr-4 px-10 py-2 mb-4 bg-branding/10 text-branding focus:ring-4 focus:ring-branding transition-all duration-300 font-display rounded-2xl">View More</button>
            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={handleClose}
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

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
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
                            <div
                                className="bg-gradient-to-t from-branding/50 to-blush/20 backdrop-blur-md inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-bold tracking-wide leading-6 text-black-text dark:text-white-text"
                                >
                                    {props.name}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-200">
                                        {props.short}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        onClick={handleClose}
                                        className="ml-auto mr-4 px-10 py-2 mb-4 bg-blush/30 text-blush focus:ring-4 focus:ring-blush transition-all duration-300 font-display rounded-2xl">View More</button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </li>
    );

}