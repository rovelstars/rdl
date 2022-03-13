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
    <aside onMouseOver={sidebarAction} onMouseOut={sidebarAction}
    id="sidebar" className="fixed backdrop-blur-sm bg-white/30 p-2 inset-y-0 left-2 my-32 rounded-xl transistion-all duration-300">
      <div className="flex flex-col">
        
      </div>
    </aside>
  );
}
