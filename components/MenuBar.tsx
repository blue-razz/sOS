import type { NextPage } from "next";
import AppMenu from "./AppMenu";

const MenuBar: NextPage = () => {
  return (
    <div className="flex justify-between items-center align-middle w-full bg-slate-700/20 py-1 px-4 text-[0.85rem] font-normal text-white after:mix-blend-overlay z-0 text-shadow">
      <AppMenu />

      {/* Status Menu, Date and Time open Notifcation Center */}
      <div className="flex flex-row-reverse align-middle space-x-6 justify-start w-full">
        <div>Mon 3:33 PM</div>
      </div>
    </div>
  );
};

export default MenuBar;
