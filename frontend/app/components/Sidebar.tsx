//import react useEffect useState
import { useEffect, useState } from 'react';

export default function Sidebar() {
  // on button click, make aside element longer
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.querySelector("#sidebar")?.classList.add("pr-36");
      //rotate sidebarIcon 180deg
      document.querySelector("#sidebarIcon")?.classList.add("rotate-180");
    }
    else {
      document.querySelector("#sidebar")?.classList.remove("pr-36");
      //rotate sidebarIcon 0deg
      document.querySelector("#sidebarIcon")?.classList.remove("rotate-180");
    }
  }, [isOpen]);

  function sidebarAction() {
    if (!isOpen) { setIsOpen(true); }
    else { setIsOpen(false); }
  }
  return (
    <aside id="sidebar" className="fixed backdrop-blur-sm bg-white/30 p-2 inset-y-0 left-2 my-32 rounded-xl transistion-all duration-300">
      <div className="flex flex-col">
        <button className="flex focus-visible:ring-4 focus-visible:ring-skyline/50 bg-blush/40 dark:bg-violet-500/40 group transition-all w-10 h-10 align-bottom p-2 hover:scale-110 rounded-lg shadow-xl hover:rounded-2xl hover:shadow-2xl hover:focus:outline-none hover:focus:ring hover:focus:ring-blush duration-300"
          onClick={sidebarAction}>
            <i id="sidebarIcon" className="fad duration-100 fa-arrow-right text-2xl text-blush dark:text-violet-400 select-none w-full"></i>
            </button>
            <div className="border-t-10 pb-1 border-t-white"></div>
      </div>
    </aside>
  );
}
