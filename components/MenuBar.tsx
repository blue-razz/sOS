import type { NextPage } from "next";
import AppMenu from "./AppMenu";
import StatusMenu from "./StatusMenu";
import Time from "./Time";

const MenuBar: NextPage = () => {
  return (
    <div className="flex justify-between items-center align-middle w-full bg-slate-700/20 pr-4 pl-1 text-[0.85rem] font-normal text-white after:mix-blend-overlay z-0 text-shadow">
      <AppMenu />

      {/* Status Menu, Date and Time open Notifcation Center */}
      <div className="flex flex-row-reverse items-center align-middle gap-x-5 text-base justify-start w-full">
        <Time />
        <StatusMenu />
      </div>
    </div>
  );
};

export default MenuBar;
