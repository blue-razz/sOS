import type { NextPage } from "next";
import { IoLogoApple } from "react-icons/io";
import AppMenuItem from "./AppMenuItem";

const AppMenu: NextPage = () => {
  return (
    <div className="flex items-center align-middle h-full">
      <AppMenuItem name="System">
        {/* Replace with own logo */}
        <IoLogoApple className="text-[1.42rem]" />
      </AppMenuItem>

      <AppMenuItem name="Looker">
        <div className="font-bold">Looker</div>
      </AppMenuItem>
      <AppMenuItem name="File" />
      <AppMenuItem name="Edit" />
      <AppMenuItem name="View" />
      <AppMenuItem name="Go" />
      <AppMenuItem name="Window" />
      <AppMenuItem name="Help" />
    </div>
  );
};

export default AppMenu;
