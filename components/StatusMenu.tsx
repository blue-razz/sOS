import type { NextPage } from "next";
import {
  IoIosSwitch,
  IoIosSearch,
  IoIosContact,
  IoIosWifi,
} from "react-icons/io";

const StatusMenu: NextPage = () => {
  return (
    <>
      <span className="text-[0.99rem]">
        <IoIosSwitch />
      </span>
      <IoIosSearch className="text-lg" />
      <IoIosContact className="text-lg" />
      <IoIosWifi className="text-lg" />
    </>
  );
};

export default StatusMenu;
